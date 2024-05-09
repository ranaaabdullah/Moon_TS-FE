"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isChat } from "../redux/slices/ChatDrawerSlice";
import WishCard from "./WishCard";
import { InputText } from "./inputField";
import { GrSend } from "react-icons/gr";
import {io} from "socket.io-client";

const ChatDrawer = () => {
  const isOpenDrawer = useSelector((state: any) => state?.chat?.isChat);

  const socket = io("http://localhost:3000");

  useEffect(() => {
    socket.on("connection", (socket) => {
      console.log(`User connected hehe ${socket.id}`);

      // We can write our socket event listeners in here...
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const dispatch = useDispatch();
  let id = "2134565";

  const datamessage = [
    {
      id: "2134565",
      message: "jaskjdhkjashdjkhas",
    },
    {
      id: "213456as3242345",
      message: "jaskjdhkjashdjkhaaaaaanmasbdmnbasmndbmasbdnaaaaas",
    },
    {
      id: "2134565",
      message: "jaskjdhkjashdjkhas",
    },
  ];

  return (
    <>
      <div
        id="drawer-right-example"
        className={`fixed top-0 left-0 z-40 h-screen p-6 border border-primary-100 rounded-xl overflow-y-auto  transition-transform ${
          isOpenDrawer ? "" : "hidden"
        }  bg-white w-80 `}
        // tabindex="-1"
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-lg font-semibold text-primary-100"
        >
          Chat Area
        </h5>
        <button
          onClick={() => dispatch(isChat(!isOpenDrawer))}
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

        <div className="border h-[45rem] p-2">
          {datamessage?.map((item) => {
            return (
              <div
                className={`flex flex-col ${
                  item.id === id ? "items-end" : "items-start"
                }`}
                key={item.id}
              >
                <div
                  className={`p-1  my-1 rounded text-wrap ${
                    item.id !== id ? "bg-green-300" : "bg-[#E2D5C5] "
                  }  `}
                >
                  <p
                    className={` break-words overflow-wrap w-56 ${
                      item.id === id ? "text-right" : ""
                    } `}
                  >
                    {item.message}
                  </p>
                  <span className="text-xs flex justify-end">19:00</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-5 right-2">
          <div className="flex items-center gap-2 ">
            <InputText
              placeholder={"Enter your message"}
              className={"p-3 rounded "}
            />
            <div className="rounded-full cursor-pointer p-2 shadow-md border hover:shadow-xl">
              <GrSend size={24} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatDrawer;
