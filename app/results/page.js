"use client";
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

// import { RenderMasonryGif } from "../components/RenderMasonryGif";
// import client from "../utils/router";
// import { LoadingSpinnerHome } from "../components/LoadingSpinnerHome";

export default function Homepage() {
  // State Fetch Main Data
  // const router = useRouter();
  // const [gif, setGIF] = useState([]);
  // const [vector, setVector] = useState([]);
  // const [photo, setPhoto] = useState([]);

  // const [selectedCategory, setSelectedCategory] = useState("gif");
  // const [loading, setLoading] = useState(true);

  // const fetchData = async (category) => {
  //   try {
  //     setLoading(true);
  //     const response = await client.get(`/get-all-${category}`);
  //     console.log(response?.data);
  //     if (category === "gif") {
  //       setGIF(response?.data);
  //     } else if (category === "photo") {
  //       setPhoto(response?.data);
  //     } else if (category === "vector") {
  //       setVector(response?.data);
  //     }
  //     setLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(selectedCategory);
  // }, [selectedCategory]);

  // const handleCategoryChange = (category) => {
  //   setSelectedCategory(category);
  // };

  return (
    <>
      <Navbar />
      {/* {loading ? (
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
      )} */}
      <div className="search-results">
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
      <div className="hasil">
        <p>
          Hasil pencarian <b className="Log">Bernard</b>
        </p>
      </div>
      <div className="container-gambar-results">
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar1} className="image"></Image>
              <div class="img-title">
                <p>Judul Foto</p>
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar2} className="image"></Image>
              <div class="img-title">
                <p>Judul Foto</p>
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar4} className="image"></Image>
              <div class="img-title">
                <p>Judul Foto</p>
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar1} className="image"></Image>
              <div class="img-title">
                <p>Judul Foto</p>
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar3} className="image"></Image>
              <div class="img-title">
                <p>Judul Foto</p>
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar2} className="image"></Image>
              <div class="img-title">
                <p>Judul Foto</p>
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar2} className="image"></Image>
              <div class="img-title">
                <p>Judul Foto</p>
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar1} className="image"></Image>
              <div class="img-title">
                <p>Judul Foto</p>
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar2} className="image"></Image>
              <div class="img-title">
                <p>Judul Foto</p>
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar3} className="image"></Image>
              <div class="img-title">
                <p>Judul Foto</p>
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="container-gambar-results">
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar1} className="image"></Image>
              <div class="img-title">
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
            <div>
              Bernard<br></br>
              Bernard Anício Caldeira Duarte, better known as Bernard, is a
              Brazilian 
            </div>
          </Link>
        </div>
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar2} className="image"></Image>
              <div class="img-title">
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar4} className="image"></Image>
              <div class="img-title">
                <p>Judul Foto</p>
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar1} className="image"></Image>
              <div class="img-title">
                <p>Judul Foto</p>
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar3} className="image"></Image>
              <div class="img-title">
                <p>Judul Foto</p>
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar2} className="image"></Image>
              <div class="img-title">
                <p>Judul Foto</p>
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar2} className="image"></Image>
              <div class="img-title">
                <p>Judul Foto</p>
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar1} className="image"></Image>
              <div class="img-title">
                <p>Judul Foto</p>
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar2} className="image"></Image>
              <div class="img-title">
                <p>Judul Foto</p>
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link href="/details">
            <div class="card-gambar">
              <Image src={gambar3} className="image"></Image>
              <div class="img-title">
                <p>Judul Foto</p>
                <p>
                  <span className="heart">
                    <FaHeart />{" "}
                  </span>{" "}
                  100K
                  <span className="simpan">
                    <MdFileDownload />
                  </span>{" "}
                  50K{" "}
                  <span className="share">
                    {" "}
                    <FaShareNodes />
                  </span>{" "}
                  200K{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
