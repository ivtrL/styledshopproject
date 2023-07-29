import Image from "next/image";
import Link from "next/link";

import DarkModeToggle from "./ThemeButton/DarkModeToggle";
import Searchbar from "./Searchbar/Searchbar";
import SubNavbar from "./SubNavbar/SubNavbar";

export default function Navbar() {
  return (
    <header className="absolute flex flex-col w-full h-fit top-4 gap-2">
      {/* navbar */}
      <div className="w-4/5 h-4/5 m-auto flex justify-around items-center">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image src="/teste.png" alt="" width={32} height={32} />
          <h1 className="dark:text-indigo-200 text-slate-800">STYLED</h1>
        </Link>
        <nav className="flex justify-around items-center gap-6">
          <Searchbar />
        </nav>
        <DarkModeToggle />
      </div>
      <SubNavbar />
    </header>
  );
}
