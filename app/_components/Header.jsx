import React, { useContext, useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { cartcontext } from "../_context/CartContext";
import CartApis from "../_utils/CartApis";
import Cart from "../_components/cart";

function Header() {
  const { isSignedIn, user } = useUser();
  const [issign, setissign] = useState(false);
  const { cart, setCart } = useContext(cartcontext);
  const [showcart, setshowcart] = useState(false);

  useEffect(() => {
    setissign(window.location.href.includes("sign-in"));
  }, []);

  useEffect(() => {
    if (user) {
      getCartItems();
    }
  }, [user,cart]);

  const getCartItems = async () => {
    try {
      const res = await CartApis.getUserCartItems(
        user.primaryEmailAddress.emailAddress
      ).then((res) => {
        const cartItems = res?.data?.data.map((citem) => ({
          id: citem.id,
          course: citem?.attributes?.courses?.data[0],
        }));
        setCart(cartItems);
      });
    } catch (error) {
      console.error("Failed to fetch cart items", error);
    }
  };

  return (
    !issign && (
      <header className="bg-white shadow-lg">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link className="block text-teal-600" href="/">
            <span className="sr-only">Home</span>
            <img src="/logo.svg" alt="logo" />
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Explore
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            {!user ? (
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-500"
                    href="/sign-in"
                  >
                    Login
                  </a>
                  <a
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                    href="#"
                  >
                    Register
                  </a>
                </div>
                <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="flex gap-6">
                <h1 className="flex gap-x-2 cursor-pointer">
                  <ShoppingCart onClick={() => setshowcart(!showcart)} />(
                  {cart?.length})
                </h1>
                <UserButton afterSignOutUrl="/" />
                {showcart && <Cart />}
              </div>
            )}
          </div>
        </div>
      </header>
    )
  );
}

export default Header;
