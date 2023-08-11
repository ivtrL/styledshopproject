import Link from "next/link";

const RegisterForm = () => {
  return (
    <div className="mt-10 dark:bg-slate-800 bg-gray-100 sm:mx-auto sm:w-full sm:max-w-xl flex flex-col shadow-xl dark:shadow-none p-6 rounded-xl">
      <form action="#" method="POST">
        <div className="md:flex">
          <input
            id="username"
            name="username"
            type="username"
            placeholder="Nome Completo"
            autoComplete="username"
            required
            className="block w-full h-10 rounded-tl-lg border-0 pl-2 py-1.5 dark:bg-[#1d2432] text-gray-100 shadow-sm ring-1 ring-inset dark:ring-[#2d3340] ring-gray-300 placeholder:text-gray-400 focus:ring-inset dark:focus:ring-indigo-600 focus:ring-gray-500 sm:text-sm sm:leading-6"
          />
          <input
            id="identifier"
            name="identifier"
            type="identifier"
            placeholder="CPF"
            autoComplete="identifier"
            required
            className="block w-full h-10 border-0 pl-2 py-1.5 dark:bg-[#1d2432] text-gray-100 shadow-sm ring-1 ring-inset dark:ring-[#2d3340] ring-gray-300 placeholder:text-gray-400 focus:ring-inset dark:focus:ring-indigo-600 focus:ring-gray-500 sm:text-sm sm:leading-6"
          />
          <input
            id="date"
            name="date"
            type="date"
            placeholder="Data de Nascimento"
            autoComplete="date"
            required
            className="block w-full h-10 invalid: rounded-tr-lg border-0 px-2 py-1.5 dark:bg-[#1d2432] text-gray-100 shadow-sm ring-1 ring-inset dark:ring-[#2d3340] ring-gray-300 placeholder:text-gray-400 focus:ring-inset dark:focus:ring-indigo-600 focus:ring-gray-500 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="md:flex">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            required
            className="block w-full h-10 border-0 pl-2 py-1.5 dark:bg-[#1d2432] text-gray-100 shadow-sm ring-1 ring-inset dark:ring-[#2d3340] ring-gray-300 placeholder:text-gray-400 focus:ring-inset dark:focus:ring-indigo-600 focus:ring-gray-500 sm:text-sm sm:leading-6"
          />
          <input
            id="confirm_email"
            name="confirm_email"
            type="confirm_email"
            placeholder="Confimar Email"
            autoComplete="confirm_email"
            required
            className="block w-full h-10 border-0 pl-2 py-1.5 dark:bg-[#1d2432] text-gray-100 shadow-sm ring-1 ring-inset dark:ring-[#2d3340] ring-gray-300 placeholder:text-gray-400 focus:ring-inset dark:focus:ring-indigo-600 focus:ring-gray-500 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="md:flex">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            autoComplete="password"
            required
            className="block w-full h-10 rounded-bl-lg border-0 pl-2 py-1.5 dark:bg-[#1d2432] text-gray-100 shadow-sm ring-1 ring-inset dark:ring-[#2d3340] ring-gray-300 placeholder:text-gray-400 focus:ring-inset dark:focus:ring-indigo-600 focus:ring-gray-500 sm:text-sm sm:leading-6"
          />
          <input
            id="confirm_password"
            name="confirm_password"
            type="confirm_password"
            placeholder="Confirmar Senha"
            autoComplete="confirm_password"
            required
            className="block w-full h-10 rounded-br-lg border-0 pl-2 py-1.5 dark:bg-[#1d2432] text-gray-100 shadow-sm ring-1 ring-inset dark:ring-[#2d3340] ring-gray-300 placeholder:text-gray-400 focus:ring-inset dark:focus:ring-indigo-600 focus:ring-gray-500 sm:text-sm sm:leading-6"
          />
        </div>

        <button
          type="submit"
          className="mt-6 flex w-full h-10 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 ease-in duration-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          CRIAR CONTA
        </button>
      </form>
      <div className="py-4 mx-2 flex justify-center border-b border-gray-500" />
      <button className="self-center mt-6 flex w-2/4 h-10 justify-center rounded-md bg-violet-600 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-violet-800 ease-in duration-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <Link href="/login">FAZER LOGIN</Link>
      </button>
    </div>
  );
};

export default RegisterForm;
