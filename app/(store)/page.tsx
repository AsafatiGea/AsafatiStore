import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center py-32 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Bangun <span className="text-yellow-400">Bisnis Digital</span>
          <br />
          Lebih Cepat
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          Platform marketplace modern untuk jual beli produk digital, layanan,
          dan kebutuhan bisnis masa depan.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            href="/marketplace"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Mulai Belanja
          </Link>

          <Link
            href="/register"
            className="border border-yellow-500 px-6 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
          >
            Daftar Seller
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 px-6 pb-20 max-w-6xl mx-auto">
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-xl font-bold text-yellow-400">Cepat</h3>
          <p className="text-gray-400 mt-2">
            Proses transaksi instan dan otomatis.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-xl font-bold text-yellow-400">Aman</h3>
          <p className="text-gray-400 mt-2">
            Sistem pembayaran terpercaya dan terproteksi.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-xl font-bold text-yellow-400">Modern</h3>
          <p className="text-gray-400 mt-2">
            Tampilan elegan dan siap scale bisnis besar.
          </p>
        </div>
      </section>
    </>
  );
}
