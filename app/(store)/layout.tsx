import Link from "next/link";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="border-b border-yellow-500/30 px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          Asafati<span className="text-red-500">Store</span>
        </Link>

        <nav className="flex gap-6 text-sm font-medium">
          <Link
            href="/marketplace"
            className="hover:text-yellow-400 transition"
          >
            Marketplace
          </Link>

          <Link href="/login" className="hover:text-yellow-400 transition">
            Login
          </Link>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}
