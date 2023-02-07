import React, { Dispatch, SetStateAction } from "react";
import SideBarContent from "./SideBarContent";
import { motion } from "framer-motion";

export default function SideBar({
  setIsMobileFiltersOpen,
}: {
  setIsMobileFiltersOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <motion.aside
      variants={{
        enter: { marginLeft: 0 },
        exit: { marginLeft: -240 },
      }}
      initial="exit"
      animate="enter"
      exit="exit"
      className="bg-white border-r-[1px] border-border p-3 w-[240px] h-[calc(100vh_-_65px)] overflow-y-scroll flex-shrink-0 sticky z-10 top-[65px] hidden sm:block"
    >
      <SideBarContent setIsMobileFiltersOpen={setIsMobileFiltersOpen} />
    </motion.aside>
  );
}
