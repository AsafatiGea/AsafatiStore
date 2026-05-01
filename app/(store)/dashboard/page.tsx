"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { formatRupiah } from "@/lib/utils";

export default function DashboardPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (data) setOrders(data);
    };
    load();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl text-yellow-400 mb-6">Admin Dashboard</h1>

      <div className="space-y-3">
        {orders.map((o) => (
          <div key={o.id} className="bg-zinc-900 p-4 rounded">
            <p>User: {o.user_id}</p>
            <p>Total: {formatRupiah(o.total)}</p>
            <p>Status: {o.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
