import Head from "next/head";
import Home from "@/components/Home";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Kugelas</title>
      </Head>
      <Home />
    </div>
  );
}