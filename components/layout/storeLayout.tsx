"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      checkUser();
    });

    // close dropdown kalau klik luar
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

  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUser(user);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    location.href = "/";
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="border-b border-yellow-500/30 px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          Asafati<span className="text-red-500">Store</span>
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/marketplace"
            className="hover:text-yellow-400 transition"
          >
            Marketplace
          </Link>

          {user ? (
            <div className="relative" ref={dropdownRef}>
              {/* Profile Image */}
              <button onClick={() => setOpen(!open)}>
                <img
                  src={
                    user?.user_metadata?.avatar_url ||
                    "https://i.pravatar.cc/40"
                  }
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 border-yellow-400 object-cover"
                />
              </button>

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-3 w-48 bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg overflow-hidden">
                  <Link
                    href="/profile"
                    className="block px-4 py-3 hover:bg-zinc-800 transition"
                  >
                    Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 hover:bg-red-500 hover:text-white transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login" className="hover:text-yellow-400 transition">
              Login
            </Link>
          )}
        </nav>
      </header>

      {/* Content */}
      <main>{children}</main>
    </div>
  );
}
