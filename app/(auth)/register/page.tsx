"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) return alert(error.message);

    alert("Berhasil daftar!");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-zinc-900 border border-yellow-500/20 p-8 rounded-2xl w-full max-w-md shadow-xl">
        <h1 className="text-3xl font-bold mb-2 text-yellow-400 text-center">
          Register
        </h1>

        <p className="text-gray-400 text-sm text-center mb-6">
          Buat akun baru AsafatiStore
        </p>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-yellow-400"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-yellow-400"
        />

        <div className="text-right mb-5">
          <Link
            href="/login"
            className="text-sm text-gray-400 hover:text-yellow-400 transition"
          >
            Sudah punya akun? Login
          </Link>
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition"
        >
          Daftar
        </button>

        <p className="text-center text-sm text-gray-500 mt-5">
          Dengan mendaftar, kamu setuju dengan syarat & ketentuan.
        </p>
      </div>
    </div>
  );
}
