import Hero from "components/landing/hero/Hero";
import Mentor from "components/landing/mentor/Mentor";
import Vids from "components/landing/vids/Vids";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blast - To-the-point web dev stuff</title>
        <meta
          name="description"
          content="Hey, I'm Tom! I write code and talk about it. I have a newsletter called Frontend Fridays. Every week I send out tips, tools & jobs for early career web devs. It's free!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Vids />
        <Mentor />
      </main>
    </>
  );
}
