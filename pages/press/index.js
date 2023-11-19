import Head from "next/head";
import Press from "@/components/Press";

export default function PressPage() {
  return (
    <div className="pagecontainer">
      <Head>
        <title>Kugelas - Press</title>
      </Head>
      <Press />
    </div>
  );
}
