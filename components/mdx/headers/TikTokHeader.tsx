import React from "react";
import Script from "next/script";

export function TikTokHeader({ children }: { children: JSX.Element }) {
  return (
    <>
      <Script async src="https://www.tiktok.com/embed.js" />
      <div>{children}</div>
    </>
  );
}
