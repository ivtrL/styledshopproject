"use client";

import { useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { ThemeContext } from "../../DarkModeContext/ThemeProvider";

export default function DarkModeToggle() {
  const { toggle, mode } = useContext(ThemeContext);

  function handleToggle() {
    if (typeof toggle === "function") toggle();
  }

  return (
    <div
      className="w-12 h-7 rounded-3xl border-2 border-solid border-indigo-500 p-1 relative"
      onClick={handleToggle}
    >
      <div
        className="flex w-4 h-4 rounded-lg bg-slate-800 dark:bg-indigo-200 items-center justify-center absolute transition-all"
        style={mode === "light" ? {} : { right: "5px" }}
      >
        {mode === "light" ? (
          <LightModeIcon className="text-indigo-200 w-3" />
        ) : (
          <DarkModeIcon className="text-slate-800 w-3" />
        )}
      </div>
    </div>
  );
}
