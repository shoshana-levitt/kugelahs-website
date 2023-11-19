import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>Kugelahs</title>
      </Head>
      <Navbar />
    </main>
  );
}
