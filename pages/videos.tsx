import MobileSideBar from "components/navigation/sideBar/MobileSideBar";
import SideBar from "components/navigation/sideBar/SideBar";
import Results from "components/search/results/Results";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Head from "next/head";

export default function Videos() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Blast | Search videos for developers</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        {/* FILTERS */}
        <AnimatePresence initial={false}>
          {isSidebarOpen && (
            <SideBar setIsMobileFiltersOpen={setIsMobileFiltersOpen} />
          )}
        </AnimatePresence>
        <AnimatePresence initial={false}>
          {isMobileFiltersOpen && (
            <MobileSideBar setIsMobileFiltersOpen={setIsMobileFiltersOpen} />
          )}
        </AnimatePresence>

        {/* SEARCH RESULTS */}
        <Results
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isMobileFiltersOpen={isMobileFiltersOpen}
          setIsMobileFiltersOpen={setIsMobileFiltersOpen}
        />
      </div>
    </>
  );
}
