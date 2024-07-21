"use client"

import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

export const HeroBanner = () => {
   const { user } = useUser();
  //  console.log(user)

  const logo =
    "https://res.cloudinary.com/okorosamuel/image/upload/v1721472360/student-portal-logo_blco2z.jpg";

   

  return (
    <div className="hero-banner hero-banner--blue-aqua">
      <div className="hero-writeup">
        <h2>Welcome to the Student Portal</h2>
        <p>
          we believe in fostering a nurturing and inclusive environment where
          every student can thrive. Our dedicated faculty and comprehensive
          curriculum are designed to inspire and challenge students, preparing
          them for success in academics and beyond.
        </p>
      </div>
      <div className="hero-image">
        <img
          className="hero-banner__image"
          src={
            "https://res.cloudinary.com/okorosamuel/image/upload/v1721538735/students-image_ozvxef.webp"
          }
          alt="hero"
        />
      </div>
      {/* <div className="hero-banner__logo">
        <Image
          className="hero-banner__image"
          src={logo}
          alt="logo"
          height={108}
          width={108}
        />
      </div>
      <h1 className="hero-banner__headline">Hello {user && user.nickname}</h1>
      <p className="hero-banner__description">
        {user
          ? "Welcome to the student portal"
          : "login to access student portal"}
      </p> */}
    </div>
  );
};
