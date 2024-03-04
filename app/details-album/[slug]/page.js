"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../../components/layout/UserLayout/page";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import {
  MdAddPhotoAlternate,
  MdOutlinePerson,
  MdBookmarkBorder,
  MdOutlineUpload,
} from "react-icons/md";
import { useRouter } from "next/navigation";
import gambar1 from "../../assets/images/bear-8364583_1280.png";
import gambar2 from "../../assets/images/boat-8515980_1280.jpg";
import gambar3 from "../../assets/images/ladybug-8491654_1280.jpg";
import gambar4 from "../../assets/images/winter-8445565_1280.jpg";
import { NavGuest } from "../../components/layout/NavGuest";
import { FaHeart, FaBookmark, FaShareNodes } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";

import client from "../../utils/router";

export default function Home({ params: { slug } }) {
  const router = useRouter();
  console.log("album id", slug);
  const [albumData, setAlbumData] = useState({});

  const fetchAlbumDetail = async () => {
    try {
      const response = await client.get(`v2/show-detail-album/${slug}`);
      // console.log(response?.data, "Response Album Detail RAWRRRRRR");
      setAlbumData(response?.data);
      //   setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAlbumDetail();
  }, [slug]);

  console.log(albumData, "ALBUM DETAIL DATA");

  return (
    <>
      <Navbar />
      <div className="container edit">
        <div class="row" style={{ height: "70vh" }}>
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
              <div
                class="card-header fw-bolda"
                style={{ background: "transparent", textAlign: "center" }}
              >
                <h4>Judul Album</h4>
              </div>
              <div class="card-album">
                {albumData?.bookmark_fotos?.length > 0 ? (
                  albumData?.bookmark_fotos?.map((bookmark, index) => {
                    console.log(bookmark, "isi bookmarks");
                    return (
                      <div className="container-album-profile" key={index}>
                        <Link href={`/details/${bookmark?.foto?.foto_id}`}>
                          <img
                            src={bookmark?.foto?.lokasi_file}
                            className="image-profil-album"
                          />
                        </Link>
                      </div>
                    );
                  })
                ) : (
                  <div
                    className="container-album-profile"
                    style={{ justifyContent: "center" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                      }}
                    >
                      <h5> Album kosong! Tambahkan foto untuk memulai.</h5>
                      <button
                        className="album-button btn btn-md btn-primary"
                        onClick={() => router.push("/homepage")}
                      >
                        Cari foto
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
