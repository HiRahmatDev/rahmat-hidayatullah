import Link from "next/link";
import { ArrowNarrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="bg-light-green min-h-screen flex flex-col">
      <section className="bg-primary-white flex-1 flex flex-col">
        <div className="max-w-300 mx-auto px-4 sm:px-12 pt-10 sm:pt-14 lg:pt-28.5 pb-11 sm:pb-20 lg:pb-30 flex-1 flex flex-col justify-center">
          <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
            <h1 className="text-[96px]/[0.9] sm:text-[120px]/[0.9] lg:text-[150px]/[0.9] tracking-tighter font-bold text-secondary-green mt-4 mb-6">
              404
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-black mb-2 sm:mb-3">
              Halaman Tidak Ditemukan
            </h2>
            <p className="text-primary-black/80 text-base sm:text-lg lg:text-xl -tracking-[.1px] font-medium mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0">
              Sepertinya halaman yang kamu cari sedang ngopi di tempat lain.
              Atau mungkin memang tidak pernah ada. 🤔
            </p>
            <Link
              href="/"
              className="text-primary-green-lighter w-fit mx-auto lg:mx-0 flex items-center gap-1 hover:text-primary-green hover:[&_svg]:translate-x-0.5 active:[&_svg]:translate-x-0"
            >
              <p className="font-bold text-sm sm:text-base lg:text-lg">
                Kembali ke Beranda
              </p>
              <ArrowNarrowRight className="size-4 sm:size-5 lg:size-6 stroke-[2.5] transition-transform duration-400 ease-(--ease-lazy) mt-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
