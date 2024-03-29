import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Kugelahs",
  description: "Kugelahs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
