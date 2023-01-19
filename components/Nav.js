import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./MiniCart";

function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;

  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <header className="border-b sticky top-0 z-20 bg-neutral-700 border-transparent">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <Image src="/JoBox Tool Co-logo.jpeg" alt="JoBox Tool Company Logo" height="50px" width="100%" />
          </a>
        </Link>
        <a
          className="text-md font-bold cursor-pointer text-orange-400"
          onClick={() => {
            setCartOpen(!cartOpen);
          }}
        >
          Cart ({cartQuantity})
        </a>
        <MiniCart cart={cart} />
      </div>
    </header>
  );
}

export default Nav;
