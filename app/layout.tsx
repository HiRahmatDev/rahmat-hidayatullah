import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const title = `Rahmat Hidayatullah | Nulis aja dulu`;
const description = `Cerita sederhana, secangkir kopi, dan catatan kecil tentang hidup yang layak disimpan.`;
const bodyClassName = `${plusJakartaSans.variable} ${robotoMono.variable} antialiased`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Rahmat Hidayatullah",
    url: "/",
    locale: "id",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={bodyClassName}>{children}</body>
    </html>
  );
}
