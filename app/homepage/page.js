"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { MdGifBox, MdCameraAlt, MdBrush } from "react-icons/md";
import gambar1 from "../assets/images/bear-8364583_1280.png";
import gambar2 from "../assets/images/boat-8515980_1280.jpg";
import gambar3 from "../assets/images/ladybug-8491654_1280.jpg";
import gambar4 from "../assets/images/winter-8445565_1280.jpg";

import { useRouter } from "next/navigation";
import { RenderMasonryGif } from "../components/RenderMasonryGif";
import client from "../utils/router";
import { LoadingSpinnerHome } from "../components/LoadingSpinnerHome";

export default function Homepage() {
  // State Fetch Main Data
  const router = useRouter();
  const [gif, setGIF] = useState([]);
  const [vector, setVector] = useState([]);
  const [photo, setPhoto] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("gif");
  const [loading, setLoading] = useState(true);

  const fetchData = async (category) => {
    try {
      setLoading(true);
      const response = await client.get(`/get-all-${category}`);
      console.log(response?.data);
      if (category === "gif") {
        setGIF(response?.data);
      } else if (category === "photo") {
        setPhoto(response?.data);
      } else if (category === "vector") {
        setVector(response?.data);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Navbar />
      <div className="hero-image">
        <div className="hero-content">
          <div className="hero-content-inner">
            <h1
              style={{ fontSize: "50px", color: "#fff", marginBottom: "20px" }}
            >
              Temukan Gambar Dari Seluruh Dunia
            </h1>
            <p
              style={{
                width: "auto",
                fontSize: "15px",
                fontWeight: "normal",
                color: "#fff",
                lineHeight: "22px",
              }}
            >
              Photogood adalah hasil karya kelompok siswa yang ingin
              menyelesaikan tugas akhir agar lulus. Jadi website ini kami buat
              dengan pertimbangan guru pengajar kami.
            </p>
            <button type="button" className="ini-button">
              Lebih lanjut
            </button>
          </div>
        </div>
      </div>
      <div className="container-button">
        <button
          type="button"
          className={`button-telu ${
            selectedCategory === "gif" ? "active" : ""
          }`}
          onClick={() => handleCategoryChange("gif")}
        >
          <MdGifBox style={{ fontSize: "30px" }} /> Gif
        </button>
        <button
          type="button"
          className={`button-telu ${
            selectedCategory === "photo" ? "active" : ""
          }`}
          onClick={() => handleCategoryChange("photo")}
        >
          <MdCameraAlt style={{ fontSize: "30px" }} /> Foto
        </button>
        <button
          type="button"
          className={`button-telu ${
            selectedCategory === "vector" ? "active" : ""
          }`}
          onClick={() => handleCategoryChange("vector")}
        >
          <MdBrush style={{ fontSize: "30px" }} /> Vektor
        </button>
      </div>
      {loading ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <LoadingSpinnerHome />
        </div>
      ) : (
        <>
          {selectedCategory === "gif" && <RenderMasonryGif gif={gif} />}
          {selectedCategory === "photo" && <RenderMasonryGif gif={photo} />}
          {selectedCategory === "vector" && <RenderMasonryGif gif={vector} />}
        </>
      )}
      <Footer />
    </>
  );
}
