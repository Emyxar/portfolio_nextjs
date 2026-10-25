import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { siteUrl } from "./lib/site";
import "./globals.css";

const geistSans = JetBrains_Mono({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Меличенков Евгений — Java Backend Developer",
  description:
    "Портфолио Евгения Меличенкова — Java-разработчика. Опыт разработки backend-сервисов на Java и Spring Boot, REST API, Apache Kafka, PostgreSQL и Docker.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
