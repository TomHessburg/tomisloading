import BaseButton from "components/buttons/BaseButton";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
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
        href="/courses"
        className={`mr-6 text-base hidden md:block ${
          router.pathname === "/courses" ? "font-bold" : ""
        }`}
      >
        Courses
      </Link>
      <Link
        href="/newsletter"
        className={`mr-6 text-base hidden md:block ${
          router.pathname === "/newsletter" ? "font-bold" : ""
        }`}
      >
        Newsletter
      </Link>
      <Link
        href="/mentor"
        className={`mr-6 text-base hidden md:block ${
          router.pathname === "/mentor" ? "font-bold" : ""
        }`}
      >
        Mentor
      </Link>
      <BaseButton className="mr-3 hidden md:block">Join Newsletter</BaseButton>
      <Menu />
    </nav>
  );
}
