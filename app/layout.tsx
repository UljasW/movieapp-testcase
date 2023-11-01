import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "./ui/sections/top/topBar";
import NavBar from "./ui/sections/nav/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CompileIt testcase",
  description: "CompileIt testcase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar />
          <section className="w-full">
            <TopBar />
            {children}
          </section>
      </body>
    </html>
  );
}
