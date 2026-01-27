import Image from "next/image";

import { Socials } from "./components/Socials";
import { VisualAccent } from "@/components/VisualAccent";
import heroImage from "@/assets/ilustrasi-cowok-ngopi.png";

export default function Home() {
  return (
    <main>
      <section className="bg-light-green">
        <div className="max-w-300 mx-auto px-4 sm:px-12 pt-10 sm:pt-14 lg:pt-28.5 pb-11 sm:pb-20 lg:pb-30 overflow-hidden">
          <h1 className="text-[57px]/[0.9] sm:text-[96px]/[0.9] lg:text-9xl/[0.9] tracking-tight font-bold text-primary-green -ml-2 sm:-ml-4 lg:-ml-5 mb-7.5 sm:mb-15 lg:mb-18.5">
            Rahmat
            <br />{" "}
            <span className="text-secondary-green ml-2 sm:ml-4 lg:ml-5">
              Hidayatullah
            </span>
          </h1>
          <div className="flex flex-col-reverse lg:flex-row items-end lg:items-center gap-6 sm:gap-10 lg:gap-16">
            <div className="flex flex-col items-end lg:items-start shrink-0 sm:w-131.75 lg:w-103.25 text-right lg:text-left">
              <VisualAccent />
              <p className="text-primary-green text-xl/normal sm:text-2xl/normal -tracking-[.1px] font-semibold mt-3 sm:mt-4 mb-6 sm:mb-8">
                Cerita sederhana, secangkir kopi, dan catatan kecil tentang
                hidup yang layak disimpan.
              </p>
              <Socials />
            </div>
            <div>
              <Image
                src={heroImage}
                alt="Ilustrasi Cowok Ngopi"
                placeholder="blur"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
