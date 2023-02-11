import Head from "next/head";
import React from "react";

export function TikTokHeader({ children }: { children: JSX.Element }) {
  return (
    <>
      <Head>
        <script async src="https://www.tiktok.com/embed.js"></script>
      </Head>
      <div className="bg-black p-8 mb-8 -mx-8 -mt-14">{children}</div>
    </>
  );
}
