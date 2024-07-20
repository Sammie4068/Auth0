"use client"

import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

export const HeroBanner = () => {
   const { user } = useUser();
  //  console.log(user)

  const logo =
    "https://res.cloudinary.com/okorosamuel/image/upload/v1721472360/student-portal-logo_blco2z.jpg";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
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
      </p>
    </div>
  );
};
