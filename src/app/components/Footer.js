"use client";

import { useState } from "react";
import {
  FacebookIcon,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-gray-100 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-wide">SBX | CARS</h2>
          <p className="text-gray-500 text-sm">SUPERCAR BLONDIE</p>
          <div className="flex space-x-4 mt-4">
            <FacebookIcon className="text-black cursor-pointer" size={24} />
            <Instagram className="text-black cursor-pointer" size={24} />
            <Youtube className="text-black cursor-pointer" size={24} />
            <Twitter className="text-black cursor-pointer" size={24} />
            <Linkedin className="text-black cursor-pointer" size={24} />
          </div>
        </div>

        <div className="mt-6 md:mt-0 text-center md:text-left">
          <p className="text-gray-600">
            Get the latest updates by subscribing to our newsletter
          </p>
          <div className="flex mt-3 border border-gray-300 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 w-full focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-gray-200 px-4 py-2 font-medium hover:bg-gray-300">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-6 md:mt-0 grid grid-cols-2 gap-6 text-gray-600 text-sm text-left">
          <ul className="list-disc pl-5 space-y-2">
            <li>Auctions</li>
            <li>Brands</li>
            <li>Sell your vehicle</li>
            <li>FAQ</li>
            <li>Contact us</li>
            <li>Auction Results</li>
          </ul>
          <ul className="list-disc pl-5 space-y-2">
            <li>About us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Cookie declaration</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t pt-4">
        &copy; Copyright 2025 All rights reserved SB Media USA Inc
      </div>
    </footer>
  );
}
