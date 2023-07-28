import Link from "next/link";
import DarkModeToggle from "./ThemeButton/DarkModeToggle";
import Searchbar from "./Searchbar/Searchbar";
import MyAccountButton from "./MyAccount/MyAccountButton";
import CartButton from "./Cart/CartButton";

export default function Navbar() {
  return (
    <header className="absolute items-center justify-center flex w-full h-24">
      {/* navbar */}
      <div className="w-4/5 h-4/5 m-auto flex justify-around items-center">
        <h1 className="dark:text-white text-zinc-900">STYLED</h1>
        <nav className="flex justify-around items-center">
          <ul>
            <li className="dark:text-white text-zinc-900">
              <Link href="/">Início</Link>
            </li>
          </ul>
          <Searchbar />
          <MyAccountButton />
          <CartButton />
        </nav>
        <DarkModeToggle />
      </div>
    </header>
  );
}
