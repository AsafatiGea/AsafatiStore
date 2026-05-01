"use client";

import Card from "../ui/card";
import Button from "../ui/button";
import { useRouter } from "next/navigation";

export default function ProductCard() {
  const router = useRouter();

  return (
    <Card>
      <h3 className="text-lg font-bold">Ebook Bisnis</h3>
      <p className="text-gray-400">Rp 99.000</p>

      <Button onClick={() => router.push("/product/1")}>Lihat Detail</Button>
    </Card>
  );
}
