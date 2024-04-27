import React from "react";
import { BannerContact, ContactForm, GetInTouch } from "./components";

const Contact = () => {
  return (
    <div>
      <BannerContact />
       <GetInTouch />
      <ContactForm />
      <div className="pb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19870.73096490016!2d-0.17370906602019723!3d51.49777841146533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ddae95b455%3A0xcd1d64863bc57f40!2sWestminster%2C%20London%2C%20UK!5e0!3m2!1sen!2s!4v1707157614414!5m2!1sen!2s"
          //   width="1520"
          //   height="500"
          className="lg:w-full lg:h-[500px]  "
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> 
    </div>
  );
};

export default Contact;
