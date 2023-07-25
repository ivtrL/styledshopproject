import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="items-center justify-center flex w-full h-24 bg-slate-900">
        {/* navbar */}
        <div className="w-4/5 h-4/5 m-auto">
          <nav className="flex">
            <ul>
              <li className="text-white">
                <Link href="/">Início</Link>
                <Link href="/account">Minha Conta</Link>
                <Link href="/account/orders">Meus Pedidos</Link>
                <Link href="/account/favorites">Favoritos</Link>
                <Link href="/cart">Carrinho</Link>
                <Link href="/login">Login</Link>
                <Link href="/register">Cadastro</Link>
              </li>
            </ul>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* content */}
        <div className=""></div>
      </main>
    </>
  );
}
