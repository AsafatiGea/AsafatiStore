"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function Marketplace() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const { data } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setProducts(data);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-black text-yellow-400">Marketplace</h1>

            <p className="text-gray-400 mt-2">
              Produk digital terbaru dari seller.
            </p>
          </div>

          <Link
            href="/dashboard"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-red-500 hover:text-white transition"
          >
            + Upload Produk
          </Link>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-yellow-400 transition"
            >
              <img
                src={product.image_url}
                alt={product.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <span className="text-xs text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
                  {product.category}
                </span>

                <h2 className="text-2xl font-bold mt-4">{product.title}</h2>

                <p className="text-gray-400 mt-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Harga</p>

                    <h3 className="text-yellow-400 text-2xl font-black">
                      Rp {product.price?.toLocaleString()}
                    </h3>
                  </div>

                  <button className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-bold hover:bg-red-500 hover:text-white transition">
                    Beli
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
