"use client";

import React from "react";

type TimeUnit = "menit" | "jam" | "hari" | "minggu" | "bulan" | "tahun";

export function DynamicElapsedTime({ startDate }: { startDate: Date }) {
  const [elapsedMilliseconds, setElapsedMilliseconds] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const { elapsedValue, currentUnit } = React.useMemo(() => {
    const minutes = elapsedMilliseconds / (1000 * 60);
    const hours = elapsedMilliseconds / (1000 * 60 * 60);
    const days = elapsedMilliseconds / (1000 * 60 * 60 * 24);
    const weeks = elapsedMilliseconds / (1000 * 60 * 60 * 24 * 7);
    const months = elapsedMilliseconds / (1000 * 60 * 60 * 24 * 30.44);
    const years = elapsedMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    let currentUnit: TimeUnit;
    let value: number;
    let fractionDigits: number = 8;

    if (minutes < 60) {
      if (!loading) fractionDigits = 3;
      currentUnit = "menit";
      value = minutes;
    } else if (days < 1) {
      if (!loading) fractionDigits = 5;
      currentUnit = "jam";
      value = hours;
    } else if (days < 7) {
      if (!loading) fractionDigits = 6;
      currentUnit = "hari";
      value = days;
    } else if (days < 30) {
      if (!loading) fractionDigits = 7;
      currentUnit = "minggu";
      value = weeks;
    } else if (days < 365) {
      if (!loading) fractionDigits = 8;
      currentUnit = "bulan";
      value = months;
    } else {
      if (!loading) fractionDigits = 9;
      currentUnit = "tahun";
      value = years;
    }

    return {
      elapsedValue: value.toFixed(fractionDigits),
      currentUnit,
    };
  }, [elapsedMilliseconds, loading]);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const elapsedMilliseconds = Date.now() - startDate.getTime();
      setElapsedMilliseconds(elapsedMilliseconds);
    }, 60);
    return () => clearInterval(intervalId);
  }, [startDate]);

  return (
    <span
      className={
        "transition-[filter] duration-1000 ease-linear" +
        (loading ? " blur-[2.5px]" : "")
      }
    >
      <span className="text-[13.5px] tracking-tight font-mono font-semibold text-primary-black/70">
        {elapsedValue}
      </span>{" "}
      {currentUnit}
    </span>
  );
}
