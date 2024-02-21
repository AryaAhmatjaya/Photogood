"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { MdGifBox, MdCameraAlt, MdBrush} from "react-icons/md"
import gambar1 from "../assets/images/bear-8364583_1280.png"
import gambar2 from "../assets/images/boat-8515980_1280.jpg"
import gambar3 from "../assets/images/ladybug-8491654_1280.jpg"
import gambar4 from "../assets/images/winter-8445565_1280.jpg"


export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="hero-image">
        <div className="hero-content">
          <div className="hero-content-inner">
            <h1 style={{ fontSize: '50px', color: '#fff', marginBottom: '20px' }}>Temukan Gambar Dari Seluruh Dunia</h1>
            <p style={{ width: 'auto', fontSize: '15px', fontWeight: 'normal', color: '#fff', lineHeight: '22px' }}>Photogood adalah hasil karya kelompok siswa yang ingin
              menyelesaikan tugas akhir agar lulus. Jadi website ini
              kami buat dengan pertimbangan guru pengajar kami.</p>
            <button type="button" className="ini-button">Lebih lanjut</button>
          </div>
        </div>
      </div>
      <div className="container-button">
          <button type="button" className="button-telu"><MdGifBox style={{fontSize: '30px'}}/> Gif</button>
          <button type="button" className="button-telu"><MdCameraAlt style={{fontSize: '30px'}} /> Foto</button>
          <button type="button" className="button-telu"><MdBrush style={{fontSize: '30px'}} /> Vektor</button>
      </div>
      <div className="container-gambar">
        <div className="box"><Image src={gambar3} className="image"></Image></div>
        <div className="box"><Image src={gambar1} className="image"></Image></div>
        <div className="box"><Image src={gambar4} className="image"></Image></div>
        <div className="box"><Image src={gambar2} className="image"></Image></div>
        <div className="box"><Image src={gambar4} className="image"></Image></div>
        <div className="box"><Image src={gambar2} className="image"></Image></div>
        <div className="box"><Image src={gambar3} className="image"></Image></div>
        <div className="box"><Image src={gambar4} className="image"></Image></div>
        <div className="box"><Image src={gambar2} className="image"></Image></div>
        <div className="box"><Image src={gambar1} className="image"></Image></div>
        <div className="box"><Image src={gambar2} className="image"></Image></div>
        <div className="box"><Image src={gambar1} className="image"></Image></div>
        <div className="box"><Image src={gambar4} className="image"></Image></div>
      </div>
      <Footer />
    </>
  );
}

// To create routes, you must create new folder, and in the folder add page.js
// example : i want to create profile routes, so i must to create profile folder, and inside profile folder add page.js
