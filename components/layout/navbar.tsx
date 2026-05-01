import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-yellow-500/30">
      <Link href="/" className="text-xl font-bold text-yellow-400">
        Asafati<span className="text-red-500">Store</span>
      </Link>

      <nav className="flex gap-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/marketplace">Marketplace</Link>
        <Link href="/login">Login</Link>
      </nav>
    </header>
  );
}
