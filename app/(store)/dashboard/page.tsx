"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-black text-yellow-400">
              Dashboard Seller
            </h1>

            <p className="text-gray-400 mt-2">
              Kelola bisnis digital dan produk marketplace kamu.
            </p>
          </div>

          <Link
            href="/dashboard/upload"
            className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold hover:bg-red-500 hover:text-white transition"
          >
            + Upload Produk
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-gray-400">Total Produk</h2>
            <p className="text-5xl font-black text-yellow-400 mt-4">0</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-gray-400">Total Penjualan</h2>
            <p className="text-5xl font-black text-yellow-400 mt-4">0</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-gray-400">Pendapatan</h2>
            <p className="text-5xl font-black text-yellow-400 mt-4">Rp0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
