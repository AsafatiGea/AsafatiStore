"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { formatRupiah } from "@/lib/utils";

type Order = {
  id: string;
  total: number;
  status: string;
  created_at: string;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const load = async () => {
      const { data: userRes } = await supabase.auth.getUser();
      const user = userRes.user;
      if (!user) return;

      const { data } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (data) setOrders(data as Order[]);
    };

    load();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl text-yellow-400 mb-6">Pesanan Saya</h1>

      {orders.length === 0 && (
        <p className="text-gray-400">Belum ada pesanan.</p>
      )}

      <div className="space-y-4">
        {orders.map((o) => (
          <div key={o.id} className="bg-zinc-900 p-4 rounded">
            <p>ID: {o.id}</p>
            <p>Total: {formatRupiah(o.total)}</p>
            <p>Status: {o.status}</p>
            <p className="text-gray-400 text-sm">
              {new Date(o.created_at).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
