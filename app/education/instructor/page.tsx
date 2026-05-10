export default function InstructorPage() {
  const instructors = [
    {
      name: "Asafati Gea",
      role: "Technology & Business",
    },
    {
      name: "Professional Mentor",
      role: "Language & Communication",
    },
    {
      name: "Digital Creator",
      role: "Creative Industry",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black">
            Professional
            <span className="text-yellow-400"> Instructors</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Belajar langsung dari mentor dan profesional di bidang teknologi,
            bisnis, bahasa, dan kreativitas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.name}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 transition"
            >
              <div className="w-20 h-20 rounded-full bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center text-3xl mb-6">
                👨‍🏫
              </div>

              <h2 className="text-2xl font-bold">{instructor.name}</h2>

              <p className="text-yellow-400 mt-2">{instructor.role}</p>

              <p className="text-gray-400 mt-5 leading-relaxed text-sm">
                Mentor profesional dengan pengalaman dalam pengembangan skill
                modern dan pembelajaran digital.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
