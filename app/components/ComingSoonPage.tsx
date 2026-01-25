import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rahmat Hidayatullah | Nulis aja dulu.",
  description:
    "Cerita sederhana, secangkir kopi, dan catatan kecil tentang hidup yang layak disimpan.",
};

export default function ComingSoonPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f0f9f0] text-slate-900 px-6 font-sans">
      <div className="max-w-2xl w-full">
        {/* Header Nama sesuai Desain */}
        <header className="text-left mb-12">
          <h1 className="text-6xl font-bold leading-none tracking-tighter text-[#4a7c2c]">
            Rahmat
            <br />
            <span className="text-[#86c05d]">Hidayatullah</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            {/* Dekorasi Oranye sesuai Desain */}
            <div className="flex gap-1 mb-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-3 h-3 bg-orange-400 rounded-sm"></div>
              ))}
            </div>

            <h2 className="text-xl font-medium text-slate-800 leading-relaxed mb-6">
              Cerita sederhana, secangkir kopi, dan catatan kecil tentang hidup
              yang layak disimpan.
            </h2>

            {/* Status Setup */}
            <p className="text-sm font-mono text-slate-500 bg-white/50 inline-block px-2 py-1 rounded">
              [status: sedang_meracik_kopi_dan_kode]
            </p>
          </div>

          {/* Placeholder Ilustrasi (Kotak Hijau di Desain) */}
          <div className="aspect-square bg-[#cde7be] rounded-2xl flex items-center justify-center border-4 border-white shadow-sm">
            <span className="text-4xl text-[#4a7c2c] opacity-50">☕</span>
          </div>
        </div>

        {/* Footer Minimalis */}
        <footer className="mt-20 pt-8 border-t border-slate-200 flex justify-between items-center">
          <div className="flex space-x-4">
            {/* Icon placeholder sesuai desain */}
            <div className="w-6 h-6 bg-[#4a7c2c] rounded-full opacity-20"></div>
            <div className="w-6 h-6 bg-[#4a7c2c] rounded-full opacity-20"></div>
            <div className="w-6 h-6 bg-[#4a7c2c] rounded-full opacity-20"></div>
          </div>
          <p className="text-xs text-slate-400 font-mono italic">
            v0.0.0
          </p>
        </footer>
      </div>
    </main>
  );
}
