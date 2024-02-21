import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import "@/styles/globals.scss";

export const GuestLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};
