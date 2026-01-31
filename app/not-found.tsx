import Link from "next/link";
import { ArrowLeft } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="bg-primary-white flex-1 flex flex-col">
        <div className="max-w-300 mx-auto px-4 sm:px-12 pt-10 sm:pt-14 lg:pt-28.5 pb-11 sm:pb-20 lg:pb-30 flex-1 flex flex-col justify-center">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <h1 className="text-[96px]/[0.9] sm:text-[120px]/[0.9] lg:text-[150px]/[0.9] tracking-tight font-bold text-secondary-green mb-6">
              404
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl -tracking-[.5px] font-bold mb-2 sm:mb-3">
              Halaman Tidak Ditemukan
            </h2>
            <p className="text-primary-black/80 text-base sm:text-lg lg:text-xl -tracking-[.1px] font-medium mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
              Sepertinya halaman yang kamu cari sedang ngopi di tempat lain.
              Atau mungkin emang nggak ada. 🤔
            </p>
            <Link
              href="/"
              className="text-primary-green-lighter w-fit flex items-center gap-1 hover:text-primary-green hover:[&_svg]:-translate-x-0.5 active:[&_svg]:translate-x-0"
            >
              <ArrowLeft className="size-4.5 sm:size-5.5 stroke-[2.5] transition-transform duration-400 ease-(--ease-lazy)" />
              <p className="font-bold text-base sm:text-lg">
                Kembali
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
