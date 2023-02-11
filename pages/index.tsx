import Hero from "components/landing/hero/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blast.dev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
}
