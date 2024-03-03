"use client";
import Image from "next/image";
import Santoso from "../assets/images/check1.png";
import React, { useState, useEffect } from "react";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { FaBold } from "react-icons/fa6";

export default function Home() {
  return (
    <>
    <Navbar/>
      <div className="modal-content">
        <div className="modal-isi">
          <div className="">
            <Image src={Santoso} className="img-check" />
            <div className="modal-text"
            >
              Sukses
            </div>
            Pembayaran anda segera kami proses
          </div>
          <div>
            <button type="button" className="button-check">
            Kembali
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}