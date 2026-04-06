import Link from "next/link";

import { fetchDailyJournals } from "../services/notion/fetchDailyJournals";
import { VisualAccent } from "./VisualAccent";

export async function NulisAjaDulu() {
  const journals = await fetchDailyJournals();

  return (
    <section>
      <div className="max-w-300 mx-auto px-7 sm:px-12 pt-10 sm:pt-14 lg:pt-28.5 pb-14 sm:pb-20 lg:pb-30">
        <VisualAccent variant="secondary" />
        <p className="text-2xl/tight sm:text-4xl/tight -tracking-[.1px] font-bold mt-3 sm:mt-4 mb-4 sm:mb-8">
          <em className="text-primary-green">Nulis</em> aja dulu.
        </p>
        <div className="space-y-4 -mx-4">
          {journals.map((journal) => {
            const publishedDate = new Date(journal.publishedTime);
            const year = publishedDate.getFullYear();
            const month = String(publishedDate.getMonth() + 1).padStart(2, "0");
            const day = String(publishedDate.getDate()).padStart(2, "0");

            return (
              <Link
                key={journal.pageId}
                href={journal.slug ? `/${journal.slug}` : "#"}
                className="bg-light-green/60 hover:bg-light-green p-4 sm:p-8 rounded-3xl flex flex-col sm:flex-row gap-3 sm:gap-8 items-start ease-(--ease-silky) active:scale-[98.75%] md:active:scale-[99%] lg:active:scale-[99.25%] xl:active:scale-[99.45%] transition-transform duration-200"
              >
                <p className="text-primary-green-lighter/40 italic font-bold text-right text-sm/normal sm:text-base/[1] tracking-tight sm:mt-1">
                  <span className="sm:text-[28px] sm:tracking-[-1.5px]">
                    {year}
                  </span>
                  <br className="hidden sm:block" />
                  <span className="inline sm:hidden">/</span>
                  <span className="sm:font-extrabold">
                    {month}/{day}
                  </span>
                </p>
                <div className="flex-1">
                  <h3 className="w-fit font-bold text-lg/normal sm:text-2xl/normal mb-2 sm:mb-2.5">
                    {journal.name}
                  </h3>
                  <p className="text-base/normal sm:text-xl/normal text-primary-black/65 line-clamp-2">
                    {journal.excerpt}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Skeleton() {
  return (
    <section>
      <div className="max-w-300 mx-auto px-7 sm:px-12 pt-10 sm:pt-14 lg:pt-28.5 pb-14 sm:pb-20 lg:pb-30">
        <VisualAccent variant="secondary" />
        <p className="text-2xl/normal sm:text-4xl/normal -tracking-[.1px] font-bold mt-3 sm:mt-4 mb-6 sm:mb-8">
          <em className="text-primary-green">Nulis</em> aja dulu.
        </p>
        <div className="space-y-4 -mx-4">
          {[...Array(3)].map((_, idx) => (
            <div
              key={idx}
              className="bg-light-green p-4 sm:p-8 rounded-3xl flex flex-col sm:flex-row gap-2 sm:gap-8 items-start animate-pulse"
            >
              <div className="w-16 h-8 sm:w-20 sm:h-10 bg-secondary-green/20 rounded mb-2" />
              <div className="flex-1">
                <div className="w-2/3 h-6 sm:h-8 bg-secondary-green/20 rounded mb-2" />
                <div className="w-full h-5 sm:h-6 bg-secondary-green/10 rounded mb-3" />
                <div className="w-24 h-5 bg-primary-green-lighter/20 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

NulisAjaDulu.Skeleton = Skeleton;
