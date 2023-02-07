import BaseButton from "components/buttons/BaseButton";
import GhostIconButton from "components/buttons/GhostIconButton";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MdMenu } from "react-icons/md";
import Menu from "./Menu";

export default function NavItems() {
  const router = useRouter();

  return (
    <nav className="ml-4 md:ml-6 items-center flex">
      <Link
        href="/videos"
        className={`mr-6 text-base hidden md:block ${
          router.pathname === "/videos" ? "font-bold" : ""
        }`}
      >
        Videos
      </Link>
      <Link
        href="/playlists"
        className={`mr-6 text-base hidden md:block ${
          router.pathname === "/playlists" ? "font-bold" : ""
        }`}
      >
        Playlists
      </Link>
      <Link
        href="/courses"
        className={`mr-6 text-base hidden md:block ${
          router.pathname === "/about" ? "font-bold" : ""
        }`}
      >
        Courses
      </Link>
      <BaseButton className="mr-3 hidden md:block">Join Newsletter</BaseButton>
      <Menu />
    </nav>
  );
}
