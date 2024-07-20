import Link from "next/link";
import Image from "next/image";

export const MobileNavBarBrand = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <Link href="/">
        <Image
          className="mobile-nav-bar__logo"
          src="https://res.cloudinary.com/okorosamuel/image/upload/v1721476290/student-svgrepo-com_eb3o1c.svg"
          alt="logo"
          width={82}
          height={24}
        />
      </Link>
    </div>
  );
};
