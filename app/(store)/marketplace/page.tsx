import Link from "next/link";

export default function Marketplace() {
  return (
    <div className="p-10">
      <h1 className="text-2xl text-yellow-400 mb-6">Marketplace</h1>

      <div className="grid grid-cols-3 gap-4">
        <Link href="/product/1" className="bg-zinc-900 p-4 rounded">
          Ebook Bisnis
        </Link>
      </div>
    </div>
  );
}
