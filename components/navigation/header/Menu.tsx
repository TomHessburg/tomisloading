"use client";

import GhostIconButton from "components/buttons/GhostIconButton";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MdMenu,
  MdVideoCameraFront,
  MdSchool,
  MdLightbulb,
  MdContactMail,
  MdHandyman,
  MdMoney,
  MdCode,
  MdMail,
} from "react-icons/md";

import { FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import BaseButton from "components/buttons/BaseButton";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-20"
        ></div>
      )}
      <GhostIconButton onClick={() => setOpen((pv) => !pv)} Icon={MdMenu} />

      <AnimatePresence>
        {open && (
          <motion.div
            variants={{
              enter: { y: 0, opacity: 1, scale: 1 },
              exit: { y: -25, opacity: 0, scale: 0.8 },
            }}
            initial="exit"
            animate="enter"
            exit="exit"
            className="absolute top-10 right-0 z-30 bg-white shadow-lg rounded-lg w-[200px] p-3"
          >
            <Link
              className="w-full p-2 mb-2 text-sm flex md:hidden items-center justify-between transition-colors bg-white hover:bg-light rounded-lg"
              href="/videos"
            >
              <span>Videos</span>
              <MdVideoCameraFront size="22px" />
            </Link>
            <Link
              className="w-full p-2 mb-2 text-sm flex md:hidden items-center justify-between transition-colors bg-white hover:bg-light rounded-lg"
              href="/courses"
            >
              <span>Courses</span>
              <MdSchool size="22px" />
            </Link>
            <Link
              className="w-full p-2 mb-2 text-sm flex md:hidden items-center justify-between transition-colors bg-white hover:bg-light rounded-lg"
              href="/newsletter"
            >
              <span>Newsletter</span>
              <MdMail size="22px" />
            </Link>
            <Link
              className="w-full p-2 mb-2 text-sm flex md:hidden items-center justify-between transition-colors bg-white hover:bg-light rounded-lg"
              href="/mentor"
            >
              <span>Mentor</span>
              <MdCode size="22px" />
            </Link>
            <Link
              className="w-full p-2 mb-2 text-sm flex items-center justify-between transition-colors bg-white hover:bg-light rounded-lg"
              href="/jobs"
            >
              <span>Jobs</span>
              <MdMoney size="22px" />
            </Link>
            <Link
              className="w-full p-2 mb-2 text-sm flex items-center justify-between transition-colors bg-white hover:bg-light rounded-lg"
              href="/tools"
            >
              <span>Tools I Like</span>
              <MdHandyman size="22px" />
            </Link>
            <Link
              className="w-full p-2 mb-2 text-sm flex items-center justify-between transition-colors bg-white hover:bg-light rounded-lg"
              href="/suggest"
            >
              <span>Suggest Idea</span>
              <MdLightbulb size="22px" />
            </Link>
            <Link
              className="w-full p-2 mb-3 text-sm flex items-center justify-between transition-colors bg-white hover:bg-light rounded-lg"
              href="/contact"
            >
              <span>Contact/Sponsor</span>
              <MdContactMail size="22px" />
            </Link>
            <BaseButton className="w-full mb-3">Join Newsletter</BaseButton>
            <Socials />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const Socials = () => {
  return (
    <div className="flex items-end justify-around">
      <Link
        href="https://www.youtube.com/channel/UCQ5JhZ8pS-MXnGBsyyy88MQ"
        target="_blank"
        rel="nofollow"
      >
        <FaYoutube size="28px" />
      </Link>
      <Link
        href="https://www.tiktok.com/@tomisloading"
        target="_blank"
        rel="nofollow"
      >
        <FaTiktok size="28px" />
      </Link>
      <Link
        href="https://www.instagram.com/tomisloading/"
        target="_blank"
        rel="nofollow"
      >
        <FaInstagram size="28px" />
      </Link>
    </div>
  );
};
