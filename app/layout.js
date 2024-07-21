import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./styles/styles.css";

export const metadata = {
  title: "Student Portal",
  description: "Student portal with fingerprint authentication",
  themeColor: "#f5f5f5",
  icons: {
    shortcut: [
      "https://res.cloudinary.com/okorosamuel/image/upload/v1721476290/student-svgrepo-com_eb3o1c.svg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="shortcut icon mask-icon"
          href="https://res.cloudinary.com/okorosamuel/image/upload/v1721476290/student-svgrepo-com_eb3o1c.svg"
          color="#f5f5f5"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}
