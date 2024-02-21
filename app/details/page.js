"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { FaHeart, FaBookmark, FaShareNodes } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import gambar1 from "../assets/images/bear-8364583_1280.png";
import gambar2 from "../assets/images/boat-8515980_1280.jpg";
import gambar3 from "../assets/images/ladybug-8491654_1280.jpg";
import gambar4 from "../assets/images/winter-8445565_1280.jpg";
import gifIcon from "../assets/icon/crown.gif";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container-details">
        <div className="row">
          <div className="col-6">
            <div className="image-container">
              <Image src={gambar1} className="image-detail img-fluid"></Image>
            </div>
          </div>
          <div
            className="col"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              className="card justify-content-center"
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              <div className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="container-judul-gambar">
                    <div className="judul-gambar-detail">Gambar 1</div>
                  </div>
                  <div className="container-deskripsi-gambar">
                    <div className="deskripsi-gambar-detail">
                      Gambar ini adalah gambar pertama yang saya download untuk
                      dimasukkan kedalam assets
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div
                    className="container-button"
                    style={{ marginTop: "20px" }}
                  >
                    <div className="content">
                      <span className="heart">
                        <FaHeart />
                      </span>
                      <span className="like">Suka</span>
                    </div>
                    <div className="content">
                      <span className="bookmark">
                        <FaBookmark />
                      </span>
                      <span className="simpan">Simpan</span>
                    </div>
                    <div className="content">
                      <span className="share">
                        <FaShareNodes />
                      </span>
                      <span className="bagikan">Bagikan</span>
                    </div>
                    <div className="content">
                      <span className="download">
                        <MdFileDownload />
                      </span>
                      <span className="unduh">Unduh</span>
                    </div>
                  </div>
                  <div className="container-detail mt-2">
                    <div className="row" style={{ marginTop: "20px" }}>
                      <div className="col-8">
                        <span className="text-detail-kiri">Download</span>
                        <span className="text-detail-kiri">Suka</span>
                        <span className="text-detail-kiri">Komentar</span>
                        <span className="text-detail-kiri">Tipe Media</span>
                        <span className="text-detail-kiri">
                          Tanggal Publikasi
                        </span>
                      </div>
                      <div className="col">
                        <span className="text-detail-kanan">876</span>
                        <span className="text-detail-kanan">122</span>
                        <span className="text-detail-kanan">1</span>
                        <span className="text-detail-kanan">JPEG</span>
                        <span className="text-detail-kanan">
                          21 Januari 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="container-profil-detail row">
                    <div
                      className="col-2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        marginTop: "20px",
                        marginBottom: "20px",
                      }}
                    >
                      <div className="foto-profil">
                        <Image
                          src={gambar3}
                          alt="foto profil"
                          className="image-foto-profil image-fluid"
                        ></Image>
                      </div>
                    </div>
                    <div
                      className="col"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <div className="row">
                        <span className="text-card-detail">JIDIABD</span>
                      </div>
                      <div className="row">
                        <span className="text-card-detail-bawah">
                          2 Postingan
                        </span>
                      </div>
                    </div>
                    <div
                      className="col"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="container-member">
                        <span className="icon-gelar">
                          <Image src={gifIcon} className="gifIcon"></Image>
                        </span>
                        <span className="text-gelar">Member</span>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container-comment-detail col ">
              <div className="jumlah-comment">1 Komentar</div>
              <div className="container-comment">
                <div className="foto-profil-comment">
                  <Image
                    src={gambar4}
                    alt="foto profil user"
                    className="image-profil-comment"
                  ></Image>
                </div>

                <div className="text-area-comment">
                  <textarea
                    className="text-area"
                    placeholder="Tuliskan komentar anda"
                  ></textarea>
                </div>
                <div class="button-container">
                  <button class="send-button">Kirim</button>
                </div>
              </div>
              <div className="container-comment">
                <div className="foto-profil-comment">
                  <Image
                    src={gambar4}
                    alt="foto profil user"
                    className="image-profil-comment"
                  ></Image>
                </div>
                <div
                  className="container-isi-comment"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "10px",
                  }}
                >
                  <div className="username-text">
                    <span className="username-detail">JIDIABD</span>
                    <span className="tanggal-comment">22 Januari 2024</span>
                  </div>
                  <div className="isi-comment">
                    <span className="detail-isi-comment">
                      Sangar awakmu cak!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
