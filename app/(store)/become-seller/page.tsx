"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function BecomeSellerPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleBecomeSeller = async () => {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Silakan login terlebih dahulu");
      return;
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        role: "seller",
      })
      .eq("id", user.id);

    setLoading(false);

    if (error) {
      return alert(error.message);
    }

    alert("Sekarang akun kamu sudah menjadi seller");

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
        <h1 className="text-4xl font-black text-yellow-400">Become Seller</h1>

        <p className="mt-4 text-gray-400 leading-relaxed">
          Mulai bangun bisnis digital dan jual produk kamu di platform modern.
        </p>

        <button
          onClick={handleBecomeSeller}
          disabled={loading}
          className="mt-8 w-full bg-yellow-400 hover:bg-red-500 hover:text-white text-black font-bold py-4 rounded-2xl transition"
        >
          {loading ? "Memproses..." : "Menjadi Seller"}
        </button>
      </div>
    </div>
  );
}
