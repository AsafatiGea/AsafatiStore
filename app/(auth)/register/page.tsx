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
      const { error: profileError } = await supabase.from("profiles").insert({
        id: userId,
        full_name: fullName,
        email: email,
        phone: phone,
        role: "customer",
        provider: "email",
      });

      if (profileError) {
        setLoading(false);
        return alert(profileError.message);
      }
    }

    setLoading(false);
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
          type="text"
          placeholder="Nama Lengkap"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-3 mb-3 rounded-lg bg-zinc-800 text-white border border-zinc-700"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-3 rounded-lg bg-zinc-800 text-white border border-zinc-700"
        />

        <input
          type="text"
          placeholder="Nomor HP (opsional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 mb-3 rounded-lg bg-zinc-800 text-white border border-zinc-700"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-zinc-800 text-white border border-zinc-700"
        />

        <label className="flex items-start gap-2 text-sm text-gray-400 mb-4 cursor-pointer">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-1 accent-yellow-400"
          />

          <span>
            Dengan mendaftar, kamu setuju dengan{" "}
            <Link href="/terms" className="text-yellow-400 hover:underline">
              syarat & ketentuan
            </Link>
          </span>
        </label>

        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition mb-4"
        >
          {loading ? "Memproses..." : "Daftar"}
        </button>

        <div className="text-right">
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
