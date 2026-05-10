"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [role, setRole] = useState("client");

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      checkUser();
    });

    // CLOSE DROPDOWN
    const handleClickOutside = (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      subscription.unsubscribe();

      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // GET USER
  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUser(user);

    if (user) {
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (data) {
        setProfile(data);

        setRole(data.role || "client");
      }
    }
  };

  // LOGOUT
  const handleLogout = async () => {
    await supabase.auth.signOut();

    location.href = "/";
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="text-2xl font-extrabold tracking-wide">
            <span className="text-yellow-400">Asafati</span>

            <span className="text-red-500">Store</span>
          </Link>

          {/* MENU */}
          <nav className="flex items-center gap-8">
            {/* MARKETPLACE */}
            <Link
              href="/marketplace"
              className="text-sm text-gray-300 hover:text-yellow-400 transition"
            >
              Marketplace
            </Link>

            {/* EDUCATION */}
            <Link
              href="/education"
              className="text-sm text-gray-300 hover:text-yellow-400 transition"
            >
              Education
            </Link>

            {/* CATEGORIES */}
            <Link
              href="/education/categories"
              className="text-sm text-gray-300 hover:text-yellow-400 transition hidden md:block"
            >
              Categories
            </Link>

            {/* INSTRUCTOR */}
            <Link
              href="/education/instructor"
              className="text-sm text-gray-300 hover:text-yellow-400 transition hidden lg:block"
            >
              Instructor
            </Link>

            {/* SELLER ONLY */}
            {role === "seller" && (
              <>
                <Link
                  href="/dashboard"
                  className="text-sm text-gray-300 hover:text-yellow-400 transition"
                >
                  Dashboard Seller
                </Link>

                <Link
                  href="/dashboard/upload"
                  className="text-sm text-gray-300 hover:text-yellow-400 transition"
                >
                  Upload Produk
                </Link>
              </>
            )}

            {/* USER */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                {/* PROFILE BUTTON */}
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-yellow-400 transition px-3 py-2 rounded-full"
                >
                  <img
                    src={
                      profile?.avatar_url ||
                      `https://ui-avatars.com/api/?name=${
                        profile?.full_name || "User"
                      }`
                    }
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400"
                  />

                  <div className="hidden md:block text-left">
                    <p className="text-sm font-semibold leading-none">
                      {profile?.full_name || "User"}
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      @{profile?.username || "username"}
                    </p>
                  </div>
                </button>

                {/* DROPDOWN */}
                {open && (
                  <div className="absolute right-0 mt-4 w-72 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
                    {/* TOP PROFILE */}
                    <div className="p-5 border-b border-zinc-800">
                      <div className="flex items-center gap-4">
                        <img
                          src={
                            profile?.avatar_url ||
                            `https://ui-avatars.com/api/?name=${
                              profile?.full_name || "User"
                            }`
                          }
                          alt="avatar"
                          className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
                        />

                        <div>
                          <h3 className="font-bold text-lg">
                            {profile?.full_name || "User"}
                          </h3>

                          <p className="text-sm text-gray-400">
                            {profile?.email || user?.email}
                          </p>

                          {/* ROLE BADGE */}
                          <div className="mt-2">
                            {role === "seller" ? (
                              <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold">
                                SELLER ACCOUNT
                              </span>
                            ) : (
                              <span className="bg-zinc-800 text-gray-300 text-xs px-3 py-1 rounded-full font-bold">
                                CLIENT ACCOUNT
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* MENU */}
                    <div className="p-2">
                      {/* PROFILE */}
                      <Link
                        href="/profile"
                        className="flex items-center px-4 py-3 rounded-xl hover:bg-zinc-800 transition text-sm"
                      >
                        👤 Profile Saya
                      </Link>

                      {/* ORDERS */}
                      <Link
                        href="/orders"
                        className="flex items-center px-4 py-3 rounded-xl hover:bg-zinc-800 transition text-sm"
                      >
                        📦 Pesanan Saya
                      </Link>

                      {/* EDUCATION */}
                      <Link
                        href="/education"
                        className="flex items-center px-4 py-3 rounded-xl hover:bg-zinc-800 transition text-sm"
                      >
                        🎓 Education Center
                      </Link>

                      {/* COURSE CATEGORY */}
                      <Link
                        href="/education/categories"
                        className="flex items-center px-4 py-3 rounded-xl hover:bg-zinc-800 transition text-sm"
                      >
                        📚 Semua Kategori
                      </Link>

                      {/* INSTRUCTOR */}
                      <Link
                        href="/education/instructor"
                        className="flex items-center px-4 py-3 rounded-xl hover:bg-zinc-800 transition text-sm"
                      >
                        🧑‍🏫 Menjadi Instructor
                      </Link>

                      {/* EDUCATION DASHBOARD */}
                      <Link
                        href="/education/dashboard"
                        className="flex items-center px-4 py-3 rounded-xl hover:bg-zinc-800 transition text-sm"
                      >
                        📊 Dashboard Education
                      </Link>

                      {/* SELLER MENU */}
                      {role === "seller" && (
                        <>
                          <Link
                            href="/dashboard"
                            className="flex items-center px-4 py-3 rounded-xl hover:bg-zinc-800 transition text-sm"
                          >
                            📊 Dashboard Seller
                          </Link>

                          <Link
                            href="/dashboard/upload"
                            className="flex items-center px-4 py-3 rounded-xl hover:bg-zinc-800 transition text-sm"
                          >
                            🛒 Upload Produk
                          </Link>

                          <Link
                            href="/dashboard/products"
                            className="flex items-center px-4 py-3 rounded-xl hover:bg-zinc-800 transition text-sm"
                          >
                            📁 Produk Saya
                          </Link>
                        </>
                      )}

                      {/* CLIENT UPGRADE */}
                      {role === "client" && (
                        <Link
                          href="/become-seller"
                          className="flex items-center px-4 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition text-sm text-yellow-400"
                        >
                          🚀 Jadi Seller
                        </Link>
                      )}

                      {/* LOGOUT */}
                      <button
                        onClick={handleLogout}
                        className="w-full text-left flex items-center px-4 py-3 rounded-xl hover:bg-red-500 hover:text-white transition text-sm"
                      >
                        🚪 Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                {/* EDUCATION BUTTON */}
                <Link
                  href="/education"
                  className="border border-yellow-500/30 hover:border-yellow-400 text-yellow-400 px-5 py-2 rounded-xl font-semibold transition"
                >
                  Education
                </Link>

                {/* LOGIN */}
                <Link
                  href="/login"
                  className="bg-yellow-400 hover:bg-red-500 hover:text-white text-black px-5 py-2 rounded-xl font-semibold transition"
                >
                  Login
                </Link>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* CONTENT */}
      <main>{children}</main>
    </div>
  );
}
