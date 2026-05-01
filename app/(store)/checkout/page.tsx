"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";

export default function Checkout() {
  const router = useRouter();
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("cart");
    if (raw) setItems(JSON.parse(raw));
  }, []);

  const handlePay = async () => {
    const { data: userRes } = await supabase.auth.getUser();
    const user = userRes.user;
    if (!user) return router.push("/login");

    const total = items.reduce((a, b) => a + b.price * b.qty, 0);

    // 1) create order
    const { data: order, error } = await supabase
      .from("orders")
      .insert([{ user_id: user.id, total, status: "pending" }])
      .select()
      .single();

    if (error) return alert(error.message);

    // 2) create order_items
    const rows = items.map((it) => ({
      order_id: order.id,
      product_id: it.id,
      qty: it.qty,
      price: it.price,
    }));

    await supabase.from("order_items").insert(rows);

    localStorage.removeItem("cart");
    alert("Order berhasil dibuat!");
    router.push("/orders");
  };

  return (
    <div className="p-10">
      <h1 className="text-yellow-400 text-2xl mb-4">Checkout</h1>
      <Button onClick={handlePay}>Bayar Sekarang</Button>
    </div>
  );
}
