import Link from "next/link";
import Image from "next/image";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <Link href="/">
        <Image
          className="nav-bar__logo"
          src="https://res.cloudinary.com/okorosamuel/image/upload/v1721476290/student-svgrepo-com_eb3o1c.svg"
          alt="logo"
          width={122}
          height={36}
        />
      </Link>
    </div>
  );
};
