import { placeholderResults } from "../utils/placeholderResults";
import { langsToIcons } from "../utils/langsToIcons";
import { MdTimer } from "react-icons/md";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Result = ({
  id,
  url,
  title,
  langs,
  created,
  length,
}: typeof placeholderResults[0]) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={{
        visible: { scale: 1, opacity: 1 },
        exit: { scale: 0.8, opacity: 0 },
      }}
      initial="exit"
      animate="visible"
      exit="exit"
      layout
      className="cursor-pointer text-white"
    >
      <Link href={`/post/${id}`}>
        <div
          className="relative z-0 overflow-hidden rounded-xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src={url}
            width={400}
            height={225}
            alt={`Background image for article "${title}"`}
            className={`w-full object-cover aspect-video transition-transform ${
              hovered ? "scale-110" : ""
            }`}
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-1 line-clamp-2">{title}</h3>
              <span className="text-xs">{created}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MdTimer size="18px" className="mr-1" />
                <span className="font-thin text-sm">{length}</span>
              </div>
              {langsToIcons(langs)}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
