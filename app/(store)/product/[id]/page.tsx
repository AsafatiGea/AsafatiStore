"use client";

import { useRouter } from "next/navigation";

export default function ProductPage() {
  const router = useRouter();

  return (
    <div className="p-10">
      <h1 className="text-2xl text-yellow-400">Detail Produk</h1>

      <button
        onClick={() => router.push("/checkout")}
        className="mt-4 bg-yellow-400 text-black px-4 py-2"
      >
        Beli Sekarang
      </button>
    </div>
  );
}
