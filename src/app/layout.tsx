import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import { SpeedInsights } from "@vercel/speed-insights/next";

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
      <body className="leading-relaxed px-4 py-6 mx-auto max-w-screen-lg flow text-pretty bg-stone-100 text-stone-950 dark:bg-zinc-900 dark:text-zinc-50">
        <NavBar />
        {children}
        <Footer />
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
