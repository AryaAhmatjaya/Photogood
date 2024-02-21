import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import "@/styles/globals.scss";

export const AdminLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
