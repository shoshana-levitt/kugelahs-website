import Head from "next/head";
import Buy from "@/components/Buy";

export default function BuyPage() {
  return (
    <div className="pagecontainer">
      <Head>
        <title>Kugelas - Buy</title>
      </Head>
      <Buy />
    </div>
  );
}
