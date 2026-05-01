"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "../ui/button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    setErrorMsg("");

    if (!email || !password) {
      return setErrorMsg("Email dan password wajib diisi");
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      return setErrorMsg("Email atau password salah");
    }

    router.push("/");
  };

  return (
    <div className="bg-zinc-900 p-8 rounded-2xl w-96 shadow-lg border border-yellow-500/20">
      {/* TITLE */}
      <h1 className="text-2xl font-bold text-yellow-400 mb-2 text-center">
        Masuk ke AsafatiStore
      </h1>

      <p className="text-gray-400 text-sm text-center mb-6">
        Silakan login untuk melanjutkan transaksi
      </p>

      {/* ERROR */}
      {errorMsg && (
        <div className="bg-red-500/10 text-red-400 p-2 rounded mb-4 text-sm">
          {errorMsg}
        </div>
      )}

      {/* EMAIL */}
      <div className="mb-3">
        <label className="text-sm text-gray-400">Email</label>
        <input
          type="email"
          placeholder="contoh@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mt-1 rounded bg-black border border-zinc-700 focus:border-yellow-400 outline-none"
        />
      </div>

      {/* PASSWORD */}
      <div className="mb-4">
        <label className="text-sm text-gray-400">Password</label>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mt-1 rounded bg-black border border-zinc-700 focus:border-yellow-400 outline-none"
        />
      </div>

      {/* BUTTON */}
      <Button onClick={handleLogin}>{loading ? "Loading..." : "Masuk"}</Button>

      {/* REGISTER LINK */}
      <p className="text-sm text-gray-400 mt-4 text-center">
        Belum punya akun?{" "}
        <Link href="/register" className="text-yellow-400 hover:underline">
          Daftar di sini
        </Link>
      </p>
    </div>
  );
}
