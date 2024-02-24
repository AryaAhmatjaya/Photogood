import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import "@/styles/globals.scss";

export const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};
