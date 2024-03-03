"use client";
import React, { useState, useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { MdGifBox, MdCameraAlt, MdBrush } from "react-icons/md";
import { useRouter } from "next/navigation";
import { RenderMasonryGif } from "../components/RenderMasonryGif";
import client from "../utils/router";
import { LoadingSpinnerHome } from "../components/LoadingSpinnerHome";
import Dropdown from "react-bootstrap/Dropdown";

export default function Homepage() {
  // State Fetch Main Data
  const router = useRouter();
  const [imageData, setImageData] = useState([]);
  const [gif, setGIF] = useState([]);
  const [vector, setVector] = useState([]);
  const [photo, setPhoto] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("gif");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await client.get(`/get-all-image`);
      console.log(response?.data);
      setImageData(response?.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(
      `/search-photo?judul_foto=${searchQuery}&category=${selectedCategory}`
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="gambar-beranda">
        <div className="hero-image">
          <div className="hero-content">
            <h3
              style={{
                fontSize: "50px",
                color: "#fff",
                marginTop: "30px",
              }}
            >
              Photogood
            </h3>
            <h1
              style={{
                fontSize: "50px",
                color: "#fff",
                marginTop: "10px",
                marginBottom: "20px",
              }}
            >
              Temukan Gambar Dari Seluruh Dunia
            </h1>
            <p
              style={{
                width: "auto",
                fontSize: "18px",
                fontWeight: "normal",
                color: "#fff",
                lineHeight: "22px",
              }}
            >
              Photogood adalah hasil karya kelompok siswa yang ingin
              menyelesaikan tugas akhir agar lulus. Jadi website ini kami buat
              dengan pertimbangan guru pengajar kami.
            </p>
          </div>
          <form className="search-beranda" onSubmit={handleSearch}>
            <div className="cari">
              <b>
                <label className="search-beranda-label"> Telusuri </label>
              </b>
              <div className="search">
                <input
                  className="input-text"
                  id="cari"
                  name="cari"
                  placeholder="Telusuri berbagai Foto"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="cari">
              <b>
                <label className="search-beranda-label"> Filter </label>
              </b>
              <Dropdown bsPrefix="dropdown custom-dropdown">
                <Dropdown.Toggle className="custom-toggle">
                  Pilih kategori gambar
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-menu">
                  <Dropdown.Item>Foto</Dropdown.Item>
                  <Dropdown.Item>GIF</Dropdown.Item>
                  <Dropdown.Item>Vektor</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="">
              <button type="submit" className="btn btn-lg btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="container-button">
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
      </div> */}
      {loading ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 48,
          }}
        >
          <LoadingSpinnerHome />
        </div>
      ) : (
        <>
          <RenderMasonryGif gif={imageData} />
        </>
      )}
      <Footer />
    </>
  );
}
