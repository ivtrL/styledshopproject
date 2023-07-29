import SearchIcon from "@mui/icons-material/Search";

import SearchbarInput from "./SearchbarInput";

export default function Searchbar() {
  return (
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none w-full">
        <SearchIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        <span className="sr-only">Search icon</span>
      </div>
      <SearchbarInput />
    </div>
  );
}
