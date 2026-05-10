import Link from "next/link";

export default function EducationPage() {
  const courses = [
    {
      title: "Belajar Coding Modern",
      slug: "belajar-coding-modern",
      category: "Programming",
    },
    {
      title: "Belajar Bahasa Inggris",
      slug: "belajar-bahasa-inggris",
      category: "Language",
    },
    {
      title: "Content Creator Academy",
      slug: "content-creator-academy",
      category: "Creator",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Asafati
            <span className="text-yellow-400"> Academy</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Platform pembelajaran modern untuk teknologi, bisnis, bahasa,
            kreativitas, dan pengembangan masa depan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/course/${course.slug}`}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 transition"
            >
              <div className="text-yellow-400 text-sm mb-3">
                {course.category}
              </div>

              <h2 className="text-2xl font-bold">{course.title}</h2>

              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                Belajar dengan sistem modern dan pengalaman pembelajaran yang
                profesional.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
