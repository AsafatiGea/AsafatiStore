export default function CategoriesPage() {
  const categories = [
    "Programming",
    "Language",
    "Business",
    "Content Creator",
    "Technology",
    "AI & Automation",
    "Driving",
    "Digital Marketing",
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black">
            Course
            <span className="text-yellow-400"> Categories</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Jelajahi berbagai kategori pembelajaran modern untuk masa depan.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 transition"
            >
              <h2 className="text-2xl font-bold">{category}</h2>

              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                Pembelajaran profesional dengan sistem modern dan fleksibel.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
