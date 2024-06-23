"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type menuItemProps = {
  text: string;
};

export default function MenuItem({ text }: menuItemProps) {
  const url = usePathname()

  const isActive = url === `/${text.toLowerCase()}`;

  return (
    <Link
      href={`/${text.toLowerCase()}`}
      className={`font-normal- cursor-pointer hover:underline underline-offset-4 ${
        isActive ? `font-bold` : ""
      }`}
    >
      {text}
    </Link>
  );
}
