import { Menu, Search } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="bg-gray-100 py-2 text-sm text-gray-800 flex justify-center md:justify-start space-x-4 overflow-hidden whitespace-nowrap">
        <div />
        <span className="hidden sm:inline">
          US{" "}
          <a href="tel:+13234078523" className="font-semibold">
            +1 323-407-8523
          </a>
        </span>
        <span className="hidden sm:inline text-gray-400">|</span>

        <span className="hidden md:inline">
          UAE{" "}
          <a href="tel:+97148761764" className="font-semibold">
            +971 4 876 1764
          </a>
        </span>
        <span className="hidden md:inline text-gray-400">|</span>

        <span>
          UK{" "}
          <a href="tel:+442045258014" className="font-semibold">
            +44 20 4525 8014
          </a>
        </span>
        <span className="text-gray-400">|</span>

        <span>
          <a href="mailto:sales@sbxcars.com" className="font-semibold">
            sales@sbxcars.com
          </a>
        </span>
      </div>
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <button className="text-black">
          <Menu size={24} />
        </button>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold tracking-wide">SBX | CARS</h1>
          <p className="text-xs tracking-widest text-gray-500">
            SUPERCAR BLONDIE
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-black">
            <Search />
          </button>
          <button className="text-black">Sign in</button>
        </div>
      </header>
    </>
  );
}
