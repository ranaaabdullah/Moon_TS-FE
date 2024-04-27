"use client"
import React, { FC } from "react";

interface Props{
  data:any;
  index:any
}

const TeamCard :FC<Props> = ({ data, index }) => {
  return (
    <div
      key={index}
      className="flex flex-col items-center justify-center gap-1"
    >
      <img src={data.img} alt="" />
      <h2 className="font-semibold uppercase">{data.name}</h2>
      <p className="text-primary-500 text-sm">{data.designation}</p>
    </div>
  );
};

export default TeamCard;
