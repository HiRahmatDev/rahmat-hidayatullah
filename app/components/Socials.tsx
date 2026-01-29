import { YoutubeIcon, InstagramIcon, WhatsappIcon } from "./icons";
import { SOCIAL_LINKS } from "@/config/constants";

const SOCIAL_LINK_CLASS =
  "p-1 select-none active:scale-90 transition-transform ease-[cubic-bezier(0.277,0.836,0,1)] duration-200 hover:[&_svg]:text-primary-green [&_svg]:transition-colors [&_svg]:duration-200";

export function Socials() {
  return (
    <nav
      className="flex gap-5 sm:gap-6 w-fit -mx-1"
      aria-label="Social media links"
    >
      <a
        href={SOCIAL_LINKS.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className={SOCIAL_LINK_CLASS}
        aria-label="Visit my YouTube channel"
      >
        <YoutubeIcon className="text-primary-green-lighter w-[28.77px] h-5.5 sm:w-8 sm:h-6" />
      </a>
      <a
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={SOCIAL_LINK_CLASS}
        aria-label="Follow me on Instagram"
      >
        <InstagramIcon className="text-primary-green-lighter size-5.5 sm:size-6" />
      </a>
      <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={SOCIAL_LINK_CLASS}
        aria-label="Contact me on WhatsApp"
      >
        <WhatsappIcon className="text-primary-green-lighter size-5.5 sm:size-6" />
      </a>
    </nav>
  );
}
