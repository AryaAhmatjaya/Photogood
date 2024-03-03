"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import {
  MdAddPhotoAlternate,
  MdOutlinePerson,
  MdBookmarkBorder,
  MdOutlineUpload,
} from "react-icons/md";
import gambar1 from "../assets/images/bear-8364583_1280.png";
import gambar2 from "../assets/images/boat-8515980_1280.jpg";
import gambar3 from "../assets/images/ladybug-8491654_1280.jpg";
import gambar4 from "../assets/images/winter-8445565_1280.jpg";
import { NavGuest } from "../components/layout/NavGuest";
import { FaHeart, FaBookmark, FaShareNodes } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container edit">
        <div class="row">
          <div class="col-xl-4">
            {/* <!--card--> */}
            <div class="card mb-2 mb-xl-0">
              <div class="card-body">
                <div className="contain-item d-flex px-3">
                  <MdOutlinePerson className="icon-size me-3" />
                  <a href="" className="text-middle pe-5">
                    Rincian Akun
                  </a>
                </div>
                <div className="contain-item d-flex px-3">
                  <MdBookmarkBorder className="icon-size me-3" />
                  <a href="/album" className="text-middle pe-5">
                    Album
                  </a>
                </div>
                <div className="contain-item d-flex px-3">
                  <MdOutlineUpload className="icon-size me-3" />
                  <a href="" className="text-middle pe-5">
                    Postingan
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            {/* <!-- Account details card--> */}
            <div class="card mb-4">
              <div class="card-header fw-bolda">
                Judul Album lek iso ndek tengah
              </div>
              <div class="card-album">
                <div className="container-album">
                  <div className="kotak">
                    <div class="gambar-album">
                      <Image src={gambar1} className="image"></Image>
                      <div class="img-title">
                        <p>Judul Foto</p>
                        {/* <p>
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
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="kotak">
                    <div class="gambar-album">
                      <Image src={gambar2} className="image"></Image>
                      <div class="img-title">
                        <p>Judul Foto</p>
                        {/* <p>
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
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="kotak">
                    <div class="gambar-album">
                      <Image src={gambar3} className="image"></Image>
                      <div class="img-title">
                        <p>Judul Foto</p>
                        {/* <p>
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
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="kotak">
                    <div class="gambar-album">
                      <Image src={gambar4} className="image"></Image>
                      <div class="img-title">
                        <p>Judul Foto</p>
                        {/* <p>
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
                        </p> */}
                      </div>
                    </div>
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
