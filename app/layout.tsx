import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import { Theme } from '@radix-ui/themes';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden `}
      >
         <Theme appearance="dark" accentColor="violet" grayColor="slate" radius="full" scaling="105%">
          <Navbar />
          {children}
          <StarsCanvas /> 
        </Theme>
      </body>
    </html>
  );
}