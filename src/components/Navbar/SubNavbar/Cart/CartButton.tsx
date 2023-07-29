import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function CartButton() {
  return (
    <div className="flow-root">
      <a href="#" className="group flex items-center p-2">
        <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </a>
    </div>
  );
}
