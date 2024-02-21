"use client";
import Image from "next/image";
import Santoso from "../assets/images/Check.jpg";
import React, { useState, useEffect } from "react";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { FaBold } from "react-icons/fa6";

export default function Home() {
  return (
    <>
    <Navbar/>
      <div className="kewil-content">
        <div className="kewil-isi">
          <div className="">
            <Image src={Santoso} className="img-check" />
            <p
              style={{
                fontSize: "35px",
                color: "#000000",
                marginBottom: "px",

              }}
            >
              Transaksi Anda Berhasil
            </p>
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