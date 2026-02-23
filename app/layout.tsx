import type { Metadata } from "next";
import { Oswald, Geist_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Underground Fitness | Earned Not Given",
  description: "The First World Class Iron Gym in the Philippines. Largest gym with the lowest prices in the South!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${geistMono.variable} antialiased selection:bg-gray-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
