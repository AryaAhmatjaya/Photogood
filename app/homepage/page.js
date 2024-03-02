"use client";
import React, { useState, useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { MdGifBox, MdCameraAlt, MdBrush } from "react-icons/md";
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

            {/* <div className="search-beranda">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-dark" type="submit">
                  Search
                </button>
              </form>
            </div> */}
          </div>
          <div className="search-beranda">
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
                ></input>
              </div>
            </div>
            <div className="cari">
              <b>
                <label className="search-beranda-label"> Filter </label>
              </b>
              <div className="dropdown __web-inspector-hide-shortcut__">
                <button
                  className="btn-filter dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pilih kategori gambar
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Foto
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      GIF
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Fektor
                    </a>
                  </li>
                  \
                </ul>
              </div>
            </div>
            <div className="">
              <button type="submit" className="btn btn-lg btn-primary">
                Search
              </button>
            </div>
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
