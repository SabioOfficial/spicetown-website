import type { Metadata } from "next";
import { Jua } from "next/font/google";
import "./globals.css";

const juaRegular = Jua({
  variable: "--font-jua",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Spicetown",
  description: "Spice Flavortown up!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${juaRegular.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
