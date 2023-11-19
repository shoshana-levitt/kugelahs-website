import Head from "next/head";
import Kugels from "@/components/Kugels";

export default function KugelsPage() {
  return (
    <div className="pagecontainer">
      <Head>
        <title>Kugelas - Kugels</title>
      </Head>
      <Kugels />
    </div>
  );
}
