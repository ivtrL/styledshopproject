import CartButton from "./Cart/CartButton";
import CategoriesFlyout from "./Categories/CategoriesFlyout";
import CurrencyButton from "./Currency/CurrencyButton";
import MyAccountButton from "./MyAccount/MyAccountButton";

export default function SubNavbar() {
  return (
    <div className="border-t dark:border-gray-200 border-gray-950 transition-all">
      <div className="flex h-16 items-center">
        <CategoriesFlyout />

        <div className="ml-auto flex items-center gap-2">
          <MyAccountButton />

          <CurrencyButton />

          <CartButton />
        </div>
      </div>
    </div>
  );
}
