"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Button from "../ui/button";

export default function RegisterForm() {
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
    <div className="bg-zinc-900 p-6 rounded-xl w-80">
      <h1 className="text-xl mb-4 text-yellow-400">Register</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 text-black"
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 text-black"
      />

      <Button onClick={handleRegister}>Daftar</Button>
    </div>
  );
}
