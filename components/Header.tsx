import Image from "next/image";
import React from "react";
import sellEaseLogo from "../public/sellease_logo.png";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { FaPlus } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="flex justify-center px-12 border-b-2 py-4 bg-white top-0 sticky z-10">
      <div className="flex flex-1 flex-row items-center justify-between max-w-screen-xl">
        <Link
          href="/"
          className="flex flex-col items-center justify-center gap-2"
        >
          <Image
            src={sellEaseLogo}
            alt="SellEase Logo"
            height={42}
            width={42}
          />
          <h1 className="p-0 m-0 font-bold text-l">SellEase</h1>
        </Link>
        <div className="flex flex-row gap-4 items-center justify-between">
          <MenuItem text="Products" />
          <MenuItem text="Categories" />
          <MenuItem text="Profile" />
          <Link href="new-product" className="cursor-pointer">
            <FaPlus />
          </Link>
        </div>
      </div>
    </header>
  );
}
