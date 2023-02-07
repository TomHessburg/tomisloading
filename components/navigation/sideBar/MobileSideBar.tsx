import React, { Dispatch, SetStateAction } from "react";
import SideBarContent from "./SideBarContent";
import { motion } from "framer-motion";

export default function MobileSideBar({
  setIsMobileFiltersOpen,
}: {
  setIsMobileFiltersOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <motion.aside
      variants={{
        enter: { marginLeft: 0 },
        exit: { marginLeft: "-100%" },
      }}
      initial="exit"
      animate="enter"
      exit="exit"
      className="bg-white border-r-[1px] border-border p-3 w-full h-[calc(100vh_-_65px)] overflow-y-scroll flex-shrink-0 fixed z-10 top-[65px] block sm:hidden"
    >
      <SideBarContent setIsMobileFiltersOpen={setIsMobileFiltersOpen} />
    </motion.aside>
  );
}
