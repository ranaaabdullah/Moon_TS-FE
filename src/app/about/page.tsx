'use client'
import React from "react";
import image1 from "../../../public/assets/about/banner1.png";
import image2 from "../../../public/assets/about/banner2.png";
import image3 from "../../../public/assets/about/banner3.png";

import {
  AboutCard,
  CardWork,
  Head,
  SectionTeam,
} from "./components";
import { EmailCard } from "../components";

const About = () => {
  return (
    <div>
      <Head />
      <AboutCard
        img={image1}
        heading={"1910"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices."
        }
      />{" "}
      <AboutCard
        img={image2}
        swap={true}
        heading={"1990"}
        desc={
          "Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit "
        }
      />{" "}
      <AboutCard
        img={image3}
        heading={"2010"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices."
        }
      />
      <CardWork />
      <SectionTeam />
      <EmailCard />
    </div>
  );
};

export default About;
