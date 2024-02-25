import { Poppins } from "next/font/google";
import logo from "../app/assets/images/roedi.jpg";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Photogood",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <link
            rel="shortcut icon"
            href={"/images/favicon.ico"}
            type="image/x-icon"
          />
        </head>
        <body className={poppins.className}>{children}</body>
      </html>
    </>
  );
}
