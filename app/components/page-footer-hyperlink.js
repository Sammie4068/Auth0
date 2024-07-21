import Link from "next/link";

export const PageFooterHyperlink = ({ children, path }) => {
  return (
    <Link
      className="page-footer__hyperlink"
      href={path}
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
};
