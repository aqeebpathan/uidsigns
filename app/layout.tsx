// components/Layout.tsx
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UiDsigns - Curated UI/UX Inspirations",
  description:
    "Discover and get inspired by a curated collection of top-notch UI/UX designs from around the globe. Explore creative design ideas and showcase your work on UiDsigns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
