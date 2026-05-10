"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!fullName || !email || !password) {
      return alert("Lengkapi data terlebih dahulu");
    }

    if (!agree) {
      return alert("Kamu harus menyetujui syarat & ketentuan");
    }

    setLoading(true);

    // REGISTER AUTH
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setLoading(false);

      return alert(error.message);
    }

    const userId = data.user?.id;

    if (userId) {
      // AUTO USERNAME
      const username =
        fullName.toLowerCase().replace(/\s+/g, "") +
        Math.floor(Math.random() * 9999);

      // AUTO AVATAR
      const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
        fullName,
      )}&background=facc15&color=000`;

      // INSERT PROFILE
      const { error: profileError } = await supabase.from("profiles").insert({
        id: userId,

        full_name: fullName,

        username: username,

        email: email,

        phone: phone,

        role: "client",

        provider: "email",

        avatar_url: avatar,

        verified: false,
      });

      if (profileError) {
        setLoading(false);

        return alert(profileError.message);
      }
    }

    setLoading(false);

    alert("Registrasi berhasil!");

    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-zinc-900 border border-yellow-500/20 rounded-3xl p-8 shadow-2xl">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-yellow-400">AsafatiStore</h1>

          <p className="text-gray-400 mt-3">
            Buat akun baru dan mulai masuk ke marketplace digital modern.
          </p>
        </div>

        {/* FULL NAME */}
        <div className="mb-4">
          <label className="text-sm text-gray-400 block mb-2">
            Nama Lengkap
          </label>

          <input
            type="text"
            placeholder="Masukkan nama lengkap"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 focus:border-yellow-400 outline-none px-4 py-3 rounded-xl"
          />
        </div>

        {/* EMAIL */}
        <div className="mb-4">
          <label className="text-sm text-gray-400 block mb-2">Email</label>

          <input
            type="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 focus:border-yellow-400 outline-none px-4 py-3 rounded-xl"
          />
        </div>

        {/* PHONE */}
        <div className="mb-4">
          <label className="text-sm text-gray-400 block mb-2">Nomor HP</label>

          <input
            type="text"
            placeholder="08xxxxxxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 focus:border-yellow-400 outline-none px-4 py-3 rounded-xl"
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-5">
          <label className="text-sm text-gray-400 block mb-2">Password</label>

          <input
            type="password"
            placeholder="Minimal 6 karakter"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 focus:border-yellow-400 outline-none px-4 py-3 rounded-xl"
          />
        </div>

        {/* TERMS */}
        <label className="flex items-start gap-3 text-sm text-gray-400 mb-6 cursor-pointer">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-1 accent-yellow-400"
          />

          <span>
            Saya setuju dengan{" "}
            <Link href="/terms" className="text-yellow-400 hover:underline">
              syarat & ketentuan
            </Link>
          </span>
        </label>

        {/* BUTTON */}
        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-red-500 hover:text-white text-black py-3 rounded-xl font-bold transition duration-300"
        >
          {loading ? "Memproses..." : "Daftar Sekarang"}
        </button>

        {/* LOGIN */}
        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="text-sm text-gray-400 hover:text-yellow-400 transition"
          >
            Sudah punya akun? Login
          </Link>
        </div>
      </div>
    </div>
  );
}
