import Hero from "components/landing/hero/Hero";
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
        <section className="w-full p-4 py-24 lg:py-36 max-w-7xl mx-auto">
          {/* TODO: Add code snippet thing */}
          <h2 className="font-bold text-4xl lg:text-6xl p-2 px-4 w-fit">
            Videos &<br />
            Source Code
          </h2>
          <p className="max-w-sm lg:max-w-lg mt-4 lg:text-lg ml-4 lg:ml-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            sequi blanditiis dolor rem mollitia eaque libero repellendus
            voluptatum voluptatibus impedit?
          </p>
        </section>
        <section className="min-h-[300vh] bg-black"></section>
      </main>
    </>
  );
}
