"use client";
import Image from "next/image";
import Santusi from "../assets/images/Cross.png";
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
            <Image src={Santusi} className="img-cross" />
            <p
              style={{
                fontSize: "35px",
                color: "#000000",
                marginBottom: "px",

              }}
            >
              Transaksi Anda Gagal
            </p>
            Pembayaran anda tertunda silahkan coba lagi
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