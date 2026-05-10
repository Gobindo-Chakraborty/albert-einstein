import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Albert Einstein",
  description: "Einstein portfolio website made by GBC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      data-theme="dark"
    >
      <body className="min-h-full flex flex-col font-normal text-primary-text text-base leading-[150%] bg-primary-bg">
        {children}
      </body>
    </html>
  );
}
