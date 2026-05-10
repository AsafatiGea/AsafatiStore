"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const { data } = await supabase
      .from("products")
      .select("*")
      .eq("id", params.id)
      .single();

    setProduct(data);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full rounded-3xl"
        />

        <div>
          <h1 className="text-5xl font-black">{product.name}</h1>

          <p className="mt-6 text-gray-400 leading-relaxed">
            {product.description}
          </p>

          <h2 className="mt-8 text-4xl font-black text-yellow-400">
            Rp {product.price}
          </h2>

          <button className="mt-8 bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold hover:bg-red-500 hover:text-white transition">
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
