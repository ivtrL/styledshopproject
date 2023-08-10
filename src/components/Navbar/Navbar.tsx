import Image from "next/image";
import Link from "next/link";

import ThemeButton from "./ThemeButton";
import Searchbar from "./Searchbar/Searchbar";
import SubNavbar from "./SubNavbar/SubNavbar";

export default function Navbar() {
  return (
    <div className="relative z-10 w-full h-fit dark:bg-black/50 bg-white/50 backdrop-blur-xl dark:backdrop-brightness-150 backdrop-brightness-90 backdrop-filter transition-all duration-500">
      {/* navbar */}
      <div className="pt-2 gap-2 h-full px-8 flex flex-col">
        <div className="flex justify-around items-center w-full">
          <Link href="/" className="flex items-center justify-center gap-2">
            <Image src="/teste.png" alt="" width={32} height={32} />
            <h1 className="dark:text-indigo-200 text-slate-800">STYLED</h1>
          </Link>
          <nav className="flex justify-around items-center gap-6">
            <Searchbar />
          </nav>
          <ThemeButton />
        </div>
        <SubNavbar />
      </div>
    </div>
  );
}
