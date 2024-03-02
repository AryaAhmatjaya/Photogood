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
export default function Guestpage() {
  return (
    <>
      <NavGuest />
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
      {/* <div className="container-button">
        <button type="button" className="button-telu">
          <MdGifBox style={{ fontSize: "30px" }} /> Gif
        </button>
        <button type="button" className="button-telu">
          <MdCameraAlt style={{ fontSize: "30px" }} /> Foto
        </button>
        <button type="button" className="button-telu">
          <MdBrush style={{ fontSize: "30px" }} /> Vektor
        </button>
      </div> */}
      <div className="container-gambar">
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
      </div>
      <Footer />
    </>
  );
}
