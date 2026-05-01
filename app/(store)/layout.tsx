import Link from "next/link";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Navbar */}
      <header className="border-b border-yellow-500/30 p-4 flex justify-between">
        <Link href="/" className="text-yellow-400 font-bold">
          Asafati<span className="text-red-500">Store</span>
        </Link>

        <nav className="flex gap-4">
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/login">Login</Link>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}
