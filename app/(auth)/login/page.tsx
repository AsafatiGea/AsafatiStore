"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [loginMethod, setLoginMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    let loginEmail = email;

    if (loginMethod === "phone") {
      loginEmail = `${phone}@asafatistore.local`;
    }

    if (loginMethod === "username") {
      loginEmail = `${username}@asafatistore.local`;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password,
    });

    if (error) {
      setLoading(false);
      return alert(error.message);
    }

    setLoading(false);
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-zinc-900 border border-yellow-500/20 p-8 rounded-2xl w-full max-w-md shadow-xl">
        <h1 className="text-3xl font-bold mb-2 text-yellow-400 text-center">
          Login
        </h1>

        <p className="text-gray-400 text-sm text-center mb-6">
          Masuk ke akun AsafatiStore
        </p>

        <select
          value={loginMethod}
          onChange={(e) => setLoginMethod(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-zinc-800 text-white border border-zinc-700"
        >
          <option value="email">Login dengan Email</option>
          <option value="phone">Login dengan Nomor HP</option>
          <option value="username">Login dengan Username</option>
        </select>

        {loginMethod === "email" && (
          <input
            type="email"
            placeholder="Masukkan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-zinc-800 text-white border border-zinc-700"
          />
        )}

        {loginMethod === "phone" && (
          <input
            type="text"
            placeholder="Masukkan Nomor HP"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-zinc-800 text-white border border-zinc-700"
          />
        )}

        {loginMethod === "username" && (
          <input
            type="text"
            placeholder="Masukkan Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-zinc-800 text-white border border-zinc-700"
          />
        )}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-2 rounded-lg bg-zinc-800 text-white border border-zinc-700"
        />

        <div className="flex justify-between text-sm mb-5">
          <Link
            href="/register"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            Register
          </Link>

          <Link
            href="/forgot-password"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            Lupa sandi?
          </Link>
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition"
        >
          {loading ? "Memproses..." : "Masuk"}
        </button>
      </div>
    </div>
  );
}
