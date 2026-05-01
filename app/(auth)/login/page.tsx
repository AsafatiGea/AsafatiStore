"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return alert(error.message);

    router.push("/");
  };

  return (
    <div className="bg-zinc-900 p-8 rounded-xl w-80">
      <h1 className="text-xl font-bold mb-4 text-yellow-400">Login</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-3 text-black"
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-3 text-black"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-red-500 hover:text-white"
      >
        Masuk
      </button>
    </div>
  );
}
