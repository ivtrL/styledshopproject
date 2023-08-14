import Image from "next/image";

import Form from "@src/components/LoginForm";
import ThemeButton from "@src/components/DarkMode/ThemeButton";

const LoginPage = () => {
  return (
    <div className="flex dark:bg-slate-800 bg-gray-200 min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="absolute top-4 right-8">
        <ThemeButton />
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto h-52 w-auto"
          width={208}
          height={208}
          src="/teste.png"
          alt="STYLED.png"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight dark:text-gray-100 text-gray-950">
          FAZER LOGIN
        </h2>
      </div>

      <Form />
    </div>
  );
};

export default LoginPage;
