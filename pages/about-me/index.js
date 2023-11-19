import Head from "next/head";
import AboutMe from "@/components/AboutMe";

export default function AboutMePage() {
  return (
    <div>
      <Head>
        <title>Kugelas - About Me</title>
      </Head>
      <AboutMe />
    </div>
  );
}
