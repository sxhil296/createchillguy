import type { Metadata } from "next";

import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";
import Header from "../components/header";

const plexMono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chill Guy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plexMono.className} container mx-auto antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
