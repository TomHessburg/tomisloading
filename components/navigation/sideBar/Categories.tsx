"use client";

import React, { Dispatch, SetStateAction } from "react";
import Option from "./Option";
import { motion } from "framer-motion";

interface Props {
  setSection: Dispatch<SetStateAction<string | null>>;
}

export default function Categories({ setSection }: Props) {
  return (
    <motion.div
      variants={{
        enter: { x: 0 },
        exit: { x: -200 },
      }}
      initial="exit"
      animate="enter"
      exit="exit"
    >
      <Option setSection={setSection} text="Frontend" />
      <Option setSection={setSection} text="Backend" />
      <Option setSection={setSection} text="Algos & DS" />
      <Option setSection={setSection} text="Languages" />
      <Option setSection={setSection} text="Other" />
    </motion.div>
  );
}
