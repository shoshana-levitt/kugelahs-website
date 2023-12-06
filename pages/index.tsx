import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import RootComponent from "@/components/RootComponent";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Kugelahs</title>
      </Head>
      <Navbar />
      <div className="pagecontainer">
        <RootComponent />
      </div>
    </main>
  );
}
