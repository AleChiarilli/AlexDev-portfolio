import { Navbar } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Header } from "@/components/Header";

const prosto = Quicksand({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Portfolio AleChiarilli",
  description: "Portfolio animated",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={prosto.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
