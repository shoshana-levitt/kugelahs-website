import Head from "next/head";
import AboutMe from "@/components/AboutMe";

export default function AboutMePage() {
  return (
    <div className="pagecontainer">
      <Head>
        <title>Kugelas - About Me</title>
      </Head>
      <AboutMe />
    </div>
  );
}

// pt-60 ml-[50px]
