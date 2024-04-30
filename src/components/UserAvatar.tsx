'use client'
import React, { useState } from "react";
import avatar from "../../public/assets/home/Avatar.png";

import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../redux/slices/AuthSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";

const UserAvatar = () => {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state:any) => state?.auth?.user?.user);
  return (
    <div>
      <div>
        <Image
          onClick={() => {
            if (user) setIsOpen(!isOpen);
            else {
              navigate.push("/login");
            }
          }}
          id="avatarButton"
        
          data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
          className="w-8 h-8 rounded-full cursor-pointer"
          src={
            user
              ? "https://avatars.mds.yandex.net/i?id=10a790b78034daa5a48dffb837e0ea63aa1182be-9293412-images-thumbs&n=13"
              : avatar
          }
          width={100}
          height={100}
          alt="User dropdown"
        />
        <div
          id="userDropdown"
          className={`z-10 ${
            isOpen && user ? "block" : "hidden"
          } bg-white divide-y divide-gray-100 absolute  border border-primary-100  text-primary-100  rounded-lg shadow w-44 `}
        >
          <div className="px-4 py-3 cursor-pointer   text-sm ">
            <div>{user?.name}</div>
            <div className="font-medium truncate">{user?.email}</div>
          </div>

          <div className="py-1">
            <div
              onClick={() => {
                user ? dispatch(LogoutUser()) : navigate.push("/login");
              }}
              className="block px-4 py-2 text-sm  border-t border-primary-100 cursor-pointer text-primary-100"
            >
              {user ? "Sign Out" : "Login"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAvatar;
