"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 flex items-center justify-center">
      <div className="md:flex space-x-6 text-gray-700">
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
