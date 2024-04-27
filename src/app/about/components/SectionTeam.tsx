"use client"
import React from "react";
import image1 from "../../../../public/assets/about/person1.png";
import image2 from "../../../../public/assets/about/person2.png";
import image3 from "../../../../public/assets/about/person3.png";
import image4 from "../../../../public/assets/about/person4.png";
import TeamCard from "./TeamCard";

const SectionTeam = () => {
  const data = [
    { img: image1, name: "Bernie PATTERSON", designation: "CEO & Founder" },
    { img: image2, name: "Ophelia Vase", designation: "Creative Director" },
    { img: image3, name: "CorbiN HOSSAIN", designation: "Artist" },
    { img: image4, name: "Seren Bowl", designation: "Marketing" },
  ];
  return (
    <div className="my-14">
      <div className="container  mx-auto px-4 py-8">
        <h3 className="text-center uppercase text-3xl font-bold mb-4">
          Meet Our Team
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:px-28">
        {data.map((item, index) => (
          <TeamCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SectionTeam;
