"use client";

import { createContext, useState } from "react";

type ThemeContextProps = {
  mode?: "light" | "dark";
  toggle?: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
