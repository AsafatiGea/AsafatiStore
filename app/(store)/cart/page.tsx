"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import { formatRupiah } from "@/lib/utils";

type Item = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

export default function CartPage() {
  const [items, setItems] = useState<Item[]>([]);
  const router = useRouter();

  useEffect(() => {
    const raw = localStorage.getItem("cart");
    if (raw) setItems(JSON.parse(raw));
  }, []);

  const total = items.reduce((a, b) => a + b.price * b.qty, 0);

  const goCheckout = () => {
    if (items.length === 0) return alert("Keranjang kosong");
    router.push("/checkout");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl text-yellow-400 mb-6">Keranjang</h1>

      {items.length === 0 && <p className="text-gray-400">Belum ada item.</p>}

      <div className="space-y-3">
        {items.map((it) => (
          <div key={it.id} className="bg-zinc-900 p-4 rounded">
            <p className="font-semibold">{it.name}</p>
            <p className="text-gray-400">
              {it.qty} x {formatRupiah(it.price)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className="mb-3">Total: {formatRupiah(total)}</p>
        <Button onClick={goCheckout}>Checkout</Button>
      </div>
    </div>
  );
}
