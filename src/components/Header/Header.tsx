import CartMenu from "../cart/cart-menu";
import { ReactComponent as Logo } from "./../../assets/img/Joom-logo.svg";
import FunctionalIcon from "./functional-icon";
import SearchBar from "./search-bar";
import { useLocalStorage } from "usehooks-ts";
import { ChosenProductType } from "../ui/buttons/buy-now-button";
import * as React from "react";
import useTimeout from "../../hooks/use-timeout";
import { useNavigate } from "react-router-dom";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    before?: number;
  }
}

const Header = () => {
  const [products] = useLocalStorage<ChosenProductType[] | []>("products", []);
  const [isOpenCartMenu, setIsOpenCartMenu] = useLocalStorage(
    "isOpenCartMenu",
    false
  );
  const navigate = useNavigate();

  const timoutFunction = () => {
    setIsOpenCartMenu(false);
  };
  const { reset, clear } = useTimeout(timoutFunction, 3000);

  const numProdInCart = products.length;

  const styleNumOfProductsInCart =
    numProdInCart !== 0
      ? `before:absolute before:w-4 before:h-4 before:bg-red-400
  before:text-white before:content-[attr(before)] before:text-xs before:text-center 
  before:rounded-full before:left-14`
      : "";

  const setMouseLeave = () => {
    reset();
  };

  const openWindow = () => setIsOpenCartMenu(true);

  const setMouseEnter = () => {
    clear();
  };

  const onCLickLogoHandler = () => {
    navigate("/");
  };
  return (
    <div
      className="my-12 lg:flex lg:items-center lg:flex-nowrap
      flex flex-wrap justify-between"
    >
      <div
        className="first-line lg:mr-10 cursor-pointer order-1 lg:order-1
        sm:mb-0 mb-8"
        onClick={onCLickLogoHandler}
      >
        <Logo />
      </div>
      <div className="w-full order-3 lg:order-2">
        <SearchBar />
      </div>

      <div
        className="flex space-x-4 sm:space-x-8 lg:ml-10 order-2 mb-8
          lg:order-3 lg:mb-0"
      >
        <FunctionalIcon text="Notyfications" icon="bell" />
        <FunctionalIcon text="Sign in" icon="person" />
        <FunctionalIcon text="My orders" icon="box" />
        <div
          before={numProdInCart}
          className={`relative ${styleNumOfProductsInCart}`}
          onMouseEnter={openWindow}
          onMouseLeave={setMouseLeave}
        >
          <FunctionalIcon text="Shopping cart" icon="cart" />
          <CartMenu
            windowStatus={isOpenCartMenu}
            handelMouseEnter={setMouseEnter}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
