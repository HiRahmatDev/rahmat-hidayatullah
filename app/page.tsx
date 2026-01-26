import Image from "next/image";

import { Socials } from "./components/Socials";
import { VisualAccent } from "@/components/VisualAccent";
import heroImage from "@/assets/ilustrasi-cowok-ngopi.png";

export default function Home() {
  return (
    <main>
      <section className="bg-light-green">
        <div className="max-w-300 mx-auto pt-28.5 pb-30 space-y-18.5">
          <h1 className="text-9xl/[0.9] tracking-tight font-bold text-primary-green -ml-5">
            Rahmat
            <br />{" "}
            <span className="text-secondary-green ml-5">Hidayatullah</span>
          </h1>
          <div className="flex items-center gap-16">
            <div className="max-w-103.25">
              <VisualAccent />
              <p className="text-primary-green text-2xl/normal -tracking-[.1px] font-semibold mt-4 mb-8">
                Cerita sederhana, secangkir kopi, dan catatan kecil tentang
                hidup yang layak disimpan.
              </p>
              <Socials />
            </div>
            <Image
              src={heroImage}
              alt="Ilustrasi Cowok Ngopi"
              placeholder="blur"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
