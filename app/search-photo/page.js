"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { MdGifBox, MdCameraAlt, MdBrush } from "react-icons/md";
import gambar1 from "../assets/images/bear-8364583_1280.png";
import gambar2 from "../assets/images/boat-8515980_1280.jpg";
import gambar3 from "../assets/images/ladybug-8491654_1280.jpg";
import gambar4 from "../assets/images/winter-8445565_1280.jpg";
import { NavGuest } from "../components/layout/NavGuest";
import { FaHeart, FaBookmark, FaShareNodes } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import { RenderMasonryGif } from "../components/RenderMasonryGif";
import Dropdown from "react-bootstrap/Dropdown";
import client from "../utils/router";
import { useRouter } from "next/navigation";

// import { RenderMasonryGif } from "../components/RenderMasonryGif";
// import client from "../utils/router";
// import { LoadingSpinnerHome } from "../components/LoadingSpinnerHome";

export default function Homepage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("gif");
  const [imageData, setImageData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const params = useSearchParams();
  const newParams = params.get("judul_foto");

  console.log(newParams);

  const handleSearchPhoto = async () => {
    try {
      const response = await client.get(
        `/search-photo?judul_foto=${newParams}`
      );
      console.log(response?.data);
      setImageData(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(
      `/search-photo?judul_foto=${searchQuery}&category=${selectedCategory}`
    );
  };

  useEffect(() => {
    handleSearchPhoto();
  }, [newParams]);

  console.log(imageData, "image data from search");

  return (
    <>
      <Navbar />
      <form className="search-results" onSubmit={handleSearch}>
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
              defaultValue={newParams}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="cari">
          <b>
            <label className="search-beranda-label"> Filter </label>
          </b>
          <div className="dropdown __web-inspector-hide-shortcut__">
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
        </div>
        <div className="">
          <button type="submit" className="btn btn-lg btn-primary">
            Search
          </button>
        </div>
      </form>
      <div className="hasil">
        <p style={{ fontSize: "32px" }}>
          Hasil pencarian <b className="Log">"{newParams}"</b>
        </p>
      </div>
      <RenderMasonryGif gif={imageData} />
      <Footer />
    </>
  );
}
