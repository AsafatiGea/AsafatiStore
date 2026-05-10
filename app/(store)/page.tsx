import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* BACKGROUND */}
        <div className="absolute -top-50 -left-50 w-125 h-125 bg-yellow-400/20 blur-[150px] rounded-full" />

        <div className="absolute -bottom-50 -right-50 w-125 h-125 bg-red-500/20 blur-[150px] rounded-full" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[80px_80px]" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-yellow-500/20 px-5 py-2 rounded-full text-sm text-yellow-400 mb-8 shadow-xl backdrop-blur-xl">
            ✨ Future Digital Ecosystem
          </div>

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
            Bangun
            <span className="text-yellow-400"> Infrastruktur Digital </span>
            Modern
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Platform modern yang dirancang untuk mendukung pertumbuhan
            teknologi, bisnis digital, sistem enterprise, inovasi, dan
            pengembangan jangka panjang dalam satu ekosistem profesional.
          </p>

          {/* BUTTON */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/marketplace"
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-2xl font-bold text-lg transition duration-300 hover:scale-105 shadow-[0_0_40px_rgba(250,204,21,0.35)]"
            >
              Explore Ecosystem
            </Link>

            <Link
              href="/register"
              className="border border-yellow-500/30 bg-zinc-900/60 backdrop-blur-xl px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* TRUST */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div>✔ Secure Infrastructure</div>
            <div>✔ Scalable Ecosystem</div>
            <div>✔ Modern Technology</div>
            <div>✔ Long-Term Vision</div>
          </div>

          {/* STATS */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-6 backdrop-blur-xl hover:border-yellow-400 transition">
              <h2 className="text-3xl font-black text-yellow-400">24/7</h2>

              <p className="text-gray-400 mt-2 text-sm">Digital Operations</p>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-6 backdrop-blur-xl hover:border-yellow-400 transition">
              <h2 className="text-3xl font-black text-yellow-400">Cloud</h2>

              <p className="text-gray-400 mt-2 text-sm">Integrated System</p>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-6 backdrop-blur-xl hover:border-yellow-400 transition">
              <h2 className="text-3xl font-black text-yellow-400">Secure</h2>

              <p className="text-gray-400 mt-2 text-sm">Authentication Layer</p>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-6 backdrop-blur-xl hover:border-yellow-400 transition">
              <h2 className="text-3xl font-black text-yellow-400">Future</h2>

              <p className="text-gray-400 mt-2 text-sm">Growth Oriented</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-20">
            <span className="text-yellow-400 font-semibold uppercase tracking-widest text-sm">
              Enterprise Technology
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-black">
              Dibangun Untuk
              <span className="text-yellow-400"> Ekosistem Masa Depan</span>
            </h2>

            <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
              Menggabungkan cloud infrastructure, automation system, modern
              technology, dan digital operation untuk mendukung perkembangan
              bisnis dan inovasi jangka panjang.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 transition duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-3xl mb-6 border border-yellow-400/20">
                ⚡
              </div>

              <h3 className="text-2xl font-bold group-hover:text-yellow-400 transition">
                High Performance
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Infrastruktur modern dengan performa tinggi, responsif, stabil,
                dan scalable untuk mendukung kebutuhan digital modern.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 transition duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-3xl mb-6 border border-yellow-400/20">
                ☁️
              </div>

              <h3 className="text-2xl font-bold group-hover:text-yellow-400 transition">
                Cloud Infrastructure
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Sistem cloud modern yang mendukung authentication, storage,
                database integration, dan digital ecosystem secara aman.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 transition duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-3xl mb-6 border border-yellow-400/20">
                🚀
              </div>

              <h3 className="text-2xl font-bold group-hover:text-yellow-400 transition">
                Expansion Ready
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Dirancang untuk mendukung pengembangan operasional, teknologi,
                distribusi digital, dan pertumbuhan jangka panjang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black">
              Integrated
              <span className="text-yellow-400"> Digital Solutions</span>
            </h2>

            <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
              Ekosistem modern untuk mendukung teknologi, operasional digital,
              business system, dan pengembangan enterprise masa depan.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 transition">
              <div className="text-5xl mb-5">💻</div>

              <h3 className="text-xl font-bold">Technology</h3>

              <p className="text-gray-400 mt-3 text-sm">
                Infrastruktur digital dan pengembangan sistem berbasis teknologi
                modern.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 transition">
              <div className="text-5xl mb-5">🏢</div>

              <h3 className="text-xl font-bold">Operations</h3>

              <p className="text-gray-400 mt-3 text-sm">
                Mendukung workflow digital, manajemen operasional, dan sistem
                enterprise modern.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 transition">
              <div className="text-5xl mb-5">📈</div>

              <h3 className="text-xl font-bold">Growth</h3>

              <p className="text-gray-400 mt-3 text-sm">
                Dibangun untuk mendukung perkembangan bisnis dan transformasi
                digital jangka panjang.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 transition">
              <div className="text-5xl mb-5">🌍</div>

              <h3 className="text-xl font-bold">Global Vision</h3>

              <p className="text-gray-400 mt-3 text-sm">
                Memiliki visi modern untuk mendukung perkembangan teknologi dan
                inovasi global.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto bg-linear-to-r from-yellow-400 to-red-500 rounded-[40px] p-12 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
            Build The Future
            <br />
            With AsafatiStore
          </h2>

          <p className="mt-6 text-black/80 text-lg max-w-2xl mx-auto">
            Platform modern untuk mendukung transformasi digital, pengembangan
            sistem, dan pertumbuhan ekosistem teknologi generasi berikutnya.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/register"
              className="bg-black hover:bg-zinc-900 text-white px-10 py-4 rounded-2xl font-bold text-lg transition duration-300"
            >
              Get Started
            </Link>

            <Link
              href="/marketplace"
              className="bg-white/20 backdrop-blur-xl border border-white/30 hover:bg-white hover:text-black text-white px-10 py-4 rounded-2xl font-bold text-lg transition duration-300"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
