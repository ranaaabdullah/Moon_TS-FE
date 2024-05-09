import { isChat } from "@/redux/slices/ChatDrawerSlice";
import React from "react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const ChatButton = () => {
  const isOpenDrawer = useSelector((state: any) => state?.chat?.isChat);

  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(isChat(!isOpenDrawer))}
      className="fixed bg-[#E8D7CA] p-4 bottom-6 right-10 rounded-full z-50 shadow-lg"
    >
      <IoChatboxEllipsesOutline size={24} />
    </div>
  );
};

export default ChatButton;
