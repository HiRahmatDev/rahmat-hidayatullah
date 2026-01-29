import Link from "next/link";

import { ArrowNarrowRight } from "./icons";
import { VisualAccent } from "./VisualAccent";

export function NulisAjaDulu() {
  return (
    <section>
      <div className="max-w-300 mx-auto px-4 sm:px-12 pt-10 sm:pt-14 lg:pt-28.5 pb-14 sm:pb-20 lg:pb-30">
        <VisualAccent variant="secondary" />
        <p className="text-3xl/normal sm:text-4xl/normal -tracking-[.1px] font-bold mt-3 sm:mt-4 mb-6 sm:mb-8">
          <em className="text-primary-green">Nulis</em> aja dulu.
        </p>
        <div className="space-y-4">
          <div className="bg-light-green p-4 sm:p-8 rounded-3xl flex flex-col sm:flex-row gap-2 sm:gap-8 items-start">
            <p className="text-secondary-green italic font-bold text-right text-lg/normal sm:text-base/[1] tracking-tight sm:mt-1">
              <span className="sm:text-[28px] sm:tracking-[-1.5px]">2026</span>
              <br className="hidden sm:block" />
              <span className="inline sm:hidden">/</span>
              <span className="sm:font-extrabold">01/26</span>
            </p>
            <div className="flex-1">
              <h3 className="w-fit font-bold text-2xl/tight sm:text-[28px]/tight mb-2">
                Bahaya Mental Feodal
              </h3>
              <p className="font-medium text-lg/normal sm:text-xl/normal text-secondary-black mb-5 line-clamp-2">
                Saya belajar bahwa feodalisme menahan seseorang dari berpikir
                analitis. Berpikir analitis sangat dibutuhkan untuk
                menyelesaikan suatu masalah. Orang tidak bisa berpikir analitis
                kalau dia tidak mampu menerima konsekuensi atau konklusi pikiran
                dia sendiri.
              </p>
              <Link
                href="#"
                className="text-primary-green-lighter w-fit ml-auto flex items-center gap-0.5 hover:text-primary-green hover:[&_svg]:translate-x-0.5 active:[&_svg]:translate-x-0"
              >
                <p className="font-bold text-[18px]/[24px]">Lanjut Baca</p>
                <ArrowNarrowRight className="stroke-[2.5] transition-transform duration-400 ease-(--ease-lazy) mt-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
