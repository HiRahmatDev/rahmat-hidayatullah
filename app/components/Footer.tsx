import { DynamicElapsedTime } from "./DynamicElapsedTime";
import { SINCE_DATE } from "@/config/constants";
import { Socials } from "./Socials";
import { VisualAccent } from "./VisualAccent";

interface FooterProps {
  inReadingMode?: boolean;
}

export function Footer({ inReadingMode = false }: FooterProps) {
  return (
    <footer key="footer" className="bg-light-green">
      <div
        className={
          (inReadingMode ? "max-w-204" : "max-w-300") +
          " mx-auto px-6 sm:px-12 pt-10 pb-10 sm:pb-20 overflow-hidden flex flex-col sm:flex-row gap-8 sm:gap-0 items-start sm:items-end justify-between"
        }
      >
        <div>
          <VisualAccent variant="secondary" />
          <p
            className={
              "font-bold text-2xl/tight sm:text-[28px]/tight mt-4 mb-5 max-w-[320px]" +
              (inReadingMode ? "" : " lg:max-w-[unset]")
            }
          >
            Senang bisa berbagi{" "}
            <span className="text-primary-green">tulisan.</span>
          </p>
          <Socials />
        </div>
        <p className="font-medium text-primary-black/60 text-sm/normal text-left sm:text-right">
          Hasil ngopinya Rahmat selama{" "}
          <DynamicElapsedTime startDate={new Date(SINCE_DATE)} />
          <br />#<em>NulisAjaDulu</em>
        </p>
      </div>
    </footer>
  );
}
