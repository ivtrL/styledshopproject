import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="mt-10 dark:bg-slate-800 bg-gray-100 sm:mx-auto sm:w-full sm:max-w-md flex flex-col shadow-xl dark:shadow-none p-6 rounded-xl">
      <form action="#" method="POST">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email address..."
          autoComplete="email"
          required
          className="block w-full h-10 rounded-t-lg border-0 pl-2 py-1.5 dark:bg-[#1d2432] text-gray-100 shadow-sm ring-1 ring-inset dark:ring-[#2d3340] ring-gray-300 placeholder:text-gray-400 focus:ring-inset dark:focus:ring-indigo-600 focus:ring-gray-500 sm:text-sm sm:leading-6"
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password..."
          autoComplete="current-password"
          required
          className="block w-full h-10 rounded-b-lg border-0 pl-2 py-1.5 dark:bg-[#1d2432] text-gray-100 shadow-sm ring-1 ring-inset dark:ring-[#2d3340] ring-gray-300 placeholder:text-gray-400 focus:ring-inset dark:focus:ring-indigo-600 focus:ring-gray-500 sm:text-sm sm:leading-6"
        />

        <button
          type="submit"
          className="mt-6 flex w-full h-10 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 ease-in duration-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          ENTRAR
        </button>
      </form>
      <div className="py-6 mx-2 flex justify-center border-b border-gray-500">
        <Link
          className="dark:text-gray-100 text-gray-950 text-sm hover:underline dark:hover:text-blue-400 hover:text-blue-500"
          href="/#"
        >
          Esqueceu a Senha?
        </Link>
      </div>
      <button className="self-center mt-6 flex w-2/4 h-10 justify-center rounded-md bg-violet-600 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-violet-800 ease-in duration-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <Link href="/register">CRIAR UMA CONTA</Link>
      </button>
    </div>
  );
};

export default LoginForm;
