"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../..//components/layout/Footer";
import { FaHeart, FaBookmark, FaShareNodes } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import gifIcon from "../../assets/icon/crown.gif";
import gambar1 from "../../assets/images/bear-8364583_1280.png";
import gambar2 from "../../assets/images/boat-8515980_1280.jpg";
import gambar3 from "../../assets/images/ladybug-8491654_1280.jpg";
import gambar4 from "../../assets/images/winter-8445565_1280.jpg";
import placeholderImage from "../../assets/images/placeholder-image-3.png";

import client from "../../utils/router";

export default function Home({ params: { slug } }) {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [gifData, setGifData] = useState({});
  const [userData, setUserData] = useState({});
  const [commentValue, setCommentValue] = useState("");

  const fetchGIFData = async () => {
    setLoading(true);
    try {
      const response = await client.get(`get-photo/${slug}`);
      setGifData(response?.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const tokenLocal = localStorage.getItem("token");
    if (tokenLocal) {
      fetchUserDetail(tokenLocal);
      setToken(tokenLocal);
    }
    fetchGIFData();
  }, [slug]);

  const fetchUserDetail = async (tokenLocal) => {
    try {
      const response = await client.get(
        `v1/show-user-detail?token=${tokenLocal}`
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user detail:", error);
    }
  };

  const {
    judul_foto,
    deskripsi_foto,
    download,
    like,
    user,
    comment,
    lokasi_file,
    created_at,
    foto_id,
  } = gifData;

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("id-ID", options);
  };

  function formatTime(createdAt) {
    const currentTime = new Date();
    const commentTime = new Date(createdAt);
    const timeDifference = currentTime - commentTime;

    if (timeDifference > 7 * 24 * 3600 * 1000) {
      return commentTime.toLocaleDateString();
    } else if (timeDifference > 24 * 3600 * 1000) {
      return Math.floor(timeDifference / (24 * 3600 * 1000)) + " h";
    } else if (timeDifference > 3600 * 1000) {
      return Math.floor(timeDifference / (3600 * 1000)) + " j";
    } else if (timeDifference > 60 * 1000) {
      return Math.floor(timeDifference / (60 * 1000)) + " m";
    } else {
      return "Baru saja";
    }
  }
  const fileExtension = lokasi_file?.split(".").pop().toLowerCase();

  const onRefresh = async () => {
    try {
      await fetchGIFData();
    } catch (error) {
      console.error("Error refreshing user detail:", error);
    }
  };

  const storeUserComment = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        foto_id: String(foto_id),
        user_id: String(userData?.user_id),
        isi_komentar: commentValue,
      };
      const response = await client.post(
        `v1/store-guest-comment?token=${token}`,
        payload
      );
      await onRefresh();
      console.log(response?.data, "COMMENT RESPONSE");
    } catch (error) {
      console.error(error);
    }
  };

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  console.log(gifData);
  console.log(userData);
  console.log(commentValue);
  console.log("token state", token);

  return (
    <>
      <Navbar />

      <div className="container-details">
        <div className="row">
          <div className="col-7">
            <div className="image-container">
              <img src={lokasi_file} className="image-detail"></img>
            </div>
          </div>
          <div className="col-5">
            <div className="card justify-content-center">
              <div className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="container-judul-gambar">
                    <div className="judul-gambar-detail">{judul_foto}</div>
                  </div>
                  <div className="container-deskripsi-gambar">
                    <div className="deskripsi-gambar-detail">
                      {deskripsi_foto}
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
                        <span className="text-detail-kanan">
                          {download?.length}
                        </span>
                        <span className="text-detail-kanan">
                          {like?.length}
                        </span>
                        <span className="text-detail-kanan">
                          {comment?.length}
                        </span>
                        <span className="text-detail-kanan">
                          {fileExtension}
                        </span>
                        <span className="text-detail-kanan">
                          {formatDate(created_at)}
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
                        {user?.foto_profil ? (
                          <img
                            src={user?.foto_profil}
                            alt="foto profil"
                            className="image-foto-profil image-fluid"
                          ></img>
                        ) : (
                          <Image
                            src={placeholderImage}
                            alt="foto profil user"
                            className="image-profil-comment"
                          ></Image>
                        )}
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
                        <span className="text-card-detail">
                          {user?.username}
                        </span>
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
          <div className="container-comment-detail mt-5">
            <div className="jumlah-comment">{comment?.length} Komentar</div>
            <div className="container-comment">
              <div className="foto-profil-comment">
                {/* Change to current user */}
                {userData?.foto_profil ? (
                  <img
                    src={userData?.foto_profil}
                    alt="foto profil user"
                    className="image-profil-comment"
                  ></img>
                ) : (
                  <Image
                    src={placeholderImage}
                    alt="foto profil user"
                    className="image-profil-comment"
                  ></Image>
                )}
              </div>

              <div className="text-area-comment col-6">
                <textarea
                  className="text-area "
                  placeholder="Tuliskan komentar anda"
                  onChange={(e) => setCommentValue(e.target.value)}
                ></textarea>
                <button class="send-button" onClick={storeUserComment}>
                  Kirim
                </button>
              </div>
            </div>

            {comment?.map((comment, index) => (
              <div className="container-comment" key={index}>
                <div className="foto-profil-comment">
                  {comment?.user?.foto_profil ? (
                    <img
                      src={comment?.user?.foto_profil}
                      alt="foto profil user"
                      className="image-profil-comment"
                    ></img>
                  ) : (
                    <Image
                      src={placeholderImage}
                      alt="foto profil user"
                      className="image-profil-comment"
                    ></Image>
                  )}
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
                    <span className="username-detail">
                      {comment?.user.nama_lengkap || comment?.user.username}
                    </span>
                    <span className="tanggal-comment">
                      {formatTime(comment?.created_at)}
                    </span>
                  </div>
                  <div className="isi-comment">
                    <span className="detail-isi-comment">
                      {comment?.isi_komentar}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
