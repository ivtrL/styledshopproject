import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tooltip from "@mui/material/Tooltip";

export default function CartButton() {
  return (
    <Tooltip title={<div>Cart Test</div>}>
      <div className="w-10 h-10 flex items-center justify-center border-2 border-indigo-500 rounded-full">
        <ShoppingCartIcon className="text-slate-800 dark:text-indigo-200 w-8" />
      </div>
    </Tooltip>
  );
}
