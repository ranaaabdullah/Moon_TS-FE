"use client";
import React, { ChangeEvent, FC, useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal";
import { InputText, SearchInput } from "../inputField";
import image from "../../../public/assets/section1/image1.png";
import image2 from "../../../public/assets/section1/image1.png";
import Image from "next/image";
import { useProductBySearch } from "@/hooks";
import useDebounce from "@/utils/Utility";

interface Props {
  setOpen?: (value: Boolean) => {};
  open: boolean;
}

const SearchModal: FC<Props> = ({ setOpen = () => {}, open }) => {
  const [search, setSearch] = useState<any>("");
  const debounceSearch = useDebounce(search, 1000);
  const { data }: any = useProductBySearch(debounceSearch);


  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Modal
        classNames={{ modal: "customModal" }}
        open={open}
        onClose={() => setOpen(false)}
        center
      >
        <div className="p-5 py-7">
          <SearchInput
            placeholder="Search Here"
            onChange={handleSearchChange}
            className="rounded"
          />

          {data?.length == 0 ? (
            <p className="flex justify-center py-4">No Product found</p>
          ) : (
            <div className="p-4">
              {data?.map((item: any) => {
                return (
                  <div className="flex items-center gap-3 p-2 py-4">
                    <div className="w-14 h-10">
                      <Image src={item?.photos && item.photos[0]} alt=""  height={100} width={100}/>
                    </div>
                    <p className="text-lg ">{item.name}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};
export default SearchModal;
