import React, { useEffect, useState } from "react";

import logo from "../../public/assets/home/logo.png";
import search from "../../public/assets/home/Search.png";
import avatar from "../../public/assets/home/Avatar.png";
import heart from "../../public/assets/home/Heart.png";
import cart from "../../public/assets/home/cart.png";

import UserAvatar from "./UserAvatar";
import { useDispatch, useSelector } from "react-redux";
import { IsOpen } from "../redux/slices/WishlistSlice";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.wish.isOpen);

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Shop",
      href: "/shop",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  let icons = [
    {
      img: search,
      href: "/",
      key: "search",
      visible: false,
    },
    {
      img: avatar,
      href: "/",
      key: "avatar",
      visible: false,
    },
    {
      img: heart,
      href: "/",
      key: "heart",
      visible: false,
    },
    {
      img: cart,
      href: "/cart",
      key: "cart",
      visible: true,
    },
  ];

  return (
    <header>
      <nav className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href={"/"}>
            <Image src={logo} alt="" />
          </Link>
          <div className="flex items-center lg:gap-4   lg:order-2">
            {icons.map((item) => {
              if (item.key === "avatar") {
                return <UserAvatar />;
              } else if (item.key === "heart") {
                return (
                  <Image
                    onClick={() => dispatch(IsOpen(!isOpen))}
                    src={item.img}
                    alt=""
                  />
                );
              } else {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${!item.visible ? "hidden" : "block"} lg:block`}
                  >
                    <Image
                      src={item.img}
                      className="w-5 h-5 mr-1"
                      alt=""
                    ></Image>
                  </Link>
                );
              }
            })}

            <button
              onClick={() => setShow(!show)}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden  "
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              show ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {links.map((item) => {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent text-primary-100 lg:p-0 "
                      aria-current="page"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
