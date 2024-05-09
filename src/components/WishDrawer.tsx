'use client'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IsOpen } from "../redux/slices/WishlistSlice";
import WishCard from "./WishCard";

const WishDrawer = () => {

  const isOpenDrawer = useSelector((state:any) => state.wish.isOpen);
  const drawerData = useSelector((state:any) => state.wish.wishList);
  const cart = useSelector((state:any) => state.cart.cart);

  const dispatch = useDispatch();

  return (
    <>
      <div
        id="drawer-right-example"
        className={`fixed top-0 right-0 z-40 h-screen p-6 border-l border-primary-100 rounded-xl overflow-y-auto  transition-transform ${
          isOpenDrawer ? "" : "hidden"
        }  bg-white w-80 `}
        // tabindex="-1"
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-lg font-semibold text-primary-100"
        >
          Wish List
        </h5>
        <button
          onClick={() => dispatch(IsOpen(!isOpenDrawer))}
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        {drawerData.length < 1 ? (
          <>
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold">O items</p>
            </div>
          </>
        ) : (
          <div>
            {drawerData?.map((product:any) => {
              const exists = cart.find((item:any) => item.id == product.id);
              return <WishCard data={product} exists={exists ? true : false} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default WishDrawer;
