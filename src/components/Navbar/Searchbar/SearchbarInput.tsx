"use client";

import { useMemo, useState } from "react";

export default function SearchbarInput() {
  const [search, setSearch] = useState<string>("");

  const handleSearch = useMemo(() => {
    console.log(search);
  }, [search]);

  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      id="search-navbar"
      className="block w-full p-2 pl-10 text-sm text-gray-950 border border-gray-300 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search..."
    />
  );
}
