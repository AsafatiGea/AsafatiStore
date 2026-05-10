"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function DashboardProductsPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("products")
      .select("*")
      .eq("seller_id", user.id);

    setProducts(data || []);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-black text-yellow-400 mb-10">Produk Saya</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
          >
            <img
              src={item.image_url}
              alt={item.name}
              className="w-full h-52 object-cover rounded-2xl"
            />

            <h2 className="mt-5 text-2xl font-bold">{item.name}</h2>

            <p className="mt-2 text-yellow-400 font-bold">Rp {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
