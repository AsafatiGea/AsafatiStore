export default function EducationDashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-black">
            Education
            <span className="text-yellow-400"> Dashboard</span>
          </h1>

          <p className="text-gray-400 mt-3">
            Kelola course, instructor, analytics, dan perkembangan platform
            edukasi modern.
          </p>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-3xl font-black text-yellow-400">120+</h2>

            <p className="text-gray-400 mt-2">Total Courses</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-3xl font-black text-yellow-400">15K+</h2>

            <p className="text-gray-400 mt-2">Students</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-3xl font-black text-yellow-400">85+</h2>

            <p className="text-gray-400 mt-2">Instructor</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-3xl font-black text-yellow-400">98%</h2>

            <p className="text-gray-400 mt-2">Positive Rating</p>
          </div>
        </div>

        {/* COURSE MANAGEMENT */}
        <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">Course Management</h2>

          <p className="text-gray-400 leading-relaxed">
            Kelola course belajar coding, bahasa Inggris, bahasa Mandarin,
            konten kreator, bisnis digital, mengemudi mobil, motor, dan berbagai
            edukasi modern lainnya dalam satu dashboard terintegrasi.
          </p>
        </div>
      </div>
    </div>
  );
}
