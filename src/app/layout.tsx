import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Next.JS template with Tailwind CSS",
  description:
    "A basic and largely un-opinionated starter template using Next.JS and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flow mx-auto max-w-screen-lg text-pretty bg-white px-4 py-6 leading-relaxed text-neutral-500 dark:bg-black">
        <NavBar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
