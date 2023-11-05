import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "./ui/sections/top/topbar";
import Navbar from "./ui/sections/nav/navbar";
import Disclaimer from "./ui/sections/disclaimer/disclaimer";

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
        <Navbar />
        <main>
          <TopBar />
          {children}
          <Disclaimer/>
        </main>
      </body>
    </html>
  );
}
