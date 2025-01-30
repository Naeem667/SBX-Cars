"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-center">
      <div className="flex space-x-4 text-gray-700 text-xs sm:text-sm md:text-base">
        <Link href="#">Auctions</Link>
        <Link href="#">Preview</Link>
        <Link href="#">Results</Link>
        <Link href="#">Sell</Link>
        <Link href="#">FAQ</Link>
        <Link href="#">About</Link>
      </div>
    </nav>
  );
}
