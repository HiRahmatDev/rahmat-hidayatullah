"use client";

import React from "react";

type TimeUnit = "menit" | "jam" | "hari" | "minggu" | "bulan" | "tahun";

export function DynamicElapsedTime({ startDate }: { startDate: Date }) {
  const [elapsedMilliseconds, setElapsedMilliseconds] = React.useState(0);

  const { elapsedValue, currentUnit } = React.useMemo(() => {
    const minutes = elapsedMilliseconds / (1000 * 60);
    const hours = elapsedMilliseconds / (1000 * 60 * 60);
    const days = elapsedMilliseconds / (1000 * 60 * 60 * 24);
    const weeks = elapsedMilliseconds / (1000 * 60 * 60 * 24 * 7);
    const months = elapsedMilliseconds / (1000 * 60 * 60 * 24 * 30.44);
    const years = elapsedMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    let currentUnit: TimeUnit;
    let value: number;
    let fractionDigits: number;

    if (minutes < 60) {
      currentUnit = "menit";
      fractionDigits = 3;
      value = minutes;
    } else if (days < 1) {
      currentUnit = "jam";
      fractionDigits = 5;
      value = hours;
    } else if (days < 7) {
      currentUnit = "hari";
      fractionDigits = 6;
      value = days;
    } else if (days < 30) {
      currentUnit = "minggu";
      fractionDigits = 7;
      value = weeks;
    } else if (days < 365) {
      currentUnit = "bulan";
      fractionDigits = 8;
      value = months;
    } else {
      currentUnit = "tahun";
      fractionDigits = 9;
      value = years;
    }
    return {
      elapsedValue: value.toFixed(fractionDigits),
      currentUnit,
    };
  }, [elapsedMilliseconds]);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const elapsedMilliseconds = Date.now() - startDate.getTime();
      setElapsedMilliseconds(elapsedMilliseconds);
    }, 60);

    return () => clearInterval(intervalId);
  }, [startDate]);

  return (
    <>
      <span className="text-[13.5px] tracking-tight font-mono font-semibold">
        {elapsedValue}
      </span>{" "}
      {currentUnit}
    </>
  );
}
