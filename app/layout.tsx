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
      <body className={inter.className + "h-screen w-screen flex bg-background"}>
        <Navbar />
        <main className="w-full h-full overflow-auto p-5 md:p-10 md:pt-10 md:pb-10">
          <TopBar />
          {children}
          <Disclaimer/>
        </main>
      </body>
    </html>
  );
}
