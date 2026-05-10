interface CoursePageProps {
  params: {
    slug: string;
  };
}

export default function CourseDetailPage({ params }: CoursePageProps) {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
          <div className="inline-block bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm mb-6">
            Course Detail
          </div>

          <h1 className="text-5xl font-black capitalize leading-tight">
            {params.slug.replace(/-/g, " ")}
          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            Halaman detail course modern untuk pembelajaran teknologi, bisnis,
            bahasa, dan pengembangan skill masa depan.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-black border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-bold text-yellow-400">Level</h3>

              <p className="text-gray-400 mt-3">Beginner to Advanced</p>
            </div>

            <div className="bg-black border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-bold text-yellow-400">Duration</h3>

              <p className="text-gray-400 mt-3">Lifetime Access</p>
            </div>

            <div className="bg-black border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-bold text-yellow-400">Certificate</h3>

              <p className="text-gray-400 mt-3">Available</p>
            </div>
          </div>

          <button className="mt-10 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-2xl font-bold transition">
            Mulai Belajar
          </button>
        </div>
      </div>
    </div>
  );
}
