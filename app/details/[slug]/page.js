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
import { useRouter } from "next/navigation";
import { Modal, Button } from "react-bootstrap";

export default function Home({ params: { slug } }) {
  const [showFloatingHeart, setShowFloatingHeart] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showAlbumModal, setShowAlbumModal] = useState(false);

  const [album, setAlbum] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handleCheckboxChange = (albumID) => {
    setSelectedAlbum(albumID);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openAlbumModal = () => {
    setShowAlbumModal(true);
  };

  const closeAlbumModal = () => {
    setShowAlbumModal(false);
  };

  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [gifData, setGifData] = useState({});
  const [userData, setUserData] = useState({});
  const [commentValue, setCommentValue] = useState("");
  const [displayedComments, setDisplayedComments] = useState(5);

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

  useEffect(() => {
    const tokenLocal = localStorage.getItem("token");
    if (tokenLocal) {
      fetchUserDetail(tokenLocal);
      setToken(tokenLocal);
    }
    fetchGIFData();
  }, [slug]);

  const renderComment = () => {
    const commentsToDisplay = comment?.slice(0, displayedComments);
    return commentsToDisplay?.map((comment, index) => (
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
            <span className="detail-isi-comment">{comment?.isi_komentar}</span>
          </div>
        </div>
      </div>
    ));
  };

  const renderShowMoreButton = () => {
    if (gifData?.comment?.length > displayedComments) {
      return (
        <button
          className="button-comment fw-bold  mt-4 text-center w-50"
          onClick={showMoreComments}
        >
          Show More
        </button>
      );
    } else if (displayedComments > 5) {
      return (
        <button
          className="button-comment fw-bold  mt-4 text-center w-50"
          onClick={showLessComments}
        >
          Show Less
        </button>
      );
    }
  };

  const showMoreComments = () => {
    setDisplayedComments((prev) => prev + 5);
  };

  const showLessComments = () => {
    setDisplayedComments(5);
  };

  const fetchUserDetail = async (tokenLocal) => {
    try {
      const response = await client.get(`v1/show-user-detail`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user detail:", error);
    }
  };

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
      const response = await client.post(`v1/store-guest-comment`, payload);
      await onRefresh();
      console.log(response?.data, "COMMENT RESPONSE");
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMemberAlbum = async () => {
    try {
      const response = await client.get(`v2/show-album`);
      setAlbum(response?.data);
      setLoading(false);
    } catch (error) {
      console.log(error, "Error Album");
    }
  };

  const storeMemberBookmark = async () => {
    try {
      const payload = {
        foto_id: String(foto_id),
        album_id: String(selectedAlbum),
        user_id: String(userData?.user_id),
      };
      const response = await client.post(`v2/store-bookmark`, payload);
      console.log(payload, "PAYLOAD ON MEMBER ALBUM RAWWRR");
      console.log(response?.data, "RESPONSE STORE MEMBER ALBUM RAWWWRR");
      alert("Success!", "Berhasil menambahkan foto ke album!");
    } catch (error) {
      console.error(error);
      alert("An error occured!", `${error?.response?.data.message}`);
    }
  };

  const copyToClipboard = () => {
    const url = window.location.origin + window.location.pathname;
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  const downloadImage = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const urlObject = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = urlObject;
      a.download = "image.jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Hapus URL objek setelah proses unduhan selesai
      window.URL.revokeObjectURL(urlObject);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  const storeUserLike = async () => {
    try {
      const payload = {
        user_id: String(userData?.user_id),
        foto_id: String(foto_id),
      };
      const response = await client.post(`v1/store-guest-like`, payload);
      console.log(response?.data, "LIKE RESPONSE");
      if (response?.status === 200) {
        fetchGIFData();
        setShowFloatingHeart(true);
        setTimeout(() => {
          setShowFloatingHeart(false);
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMemberAlbum();
  }, []);

  console.log(selectedAlbum, "SELECTED ALBUM ID");
  console.log(gifData);
  console.log(userData);
  console.log(commentValue);
  console.log("token state", token);
  console.log(album);

  return (
    <>
      <Navbar />
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Simpan Ke Album</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="album-container">
              {album?.length > 0 ? (
                album.map((album, index) => (
                  <div className="album-card" key={index}>
                    <div className="album-wrap">
                      <div className="album-image">
                        {album?.bookmark_fotos.length > 0 ? (
                          <img
                            className="album-image-preview"
                            src={
                              album?.bookmark_fotos[
                                album?.bookmark_fotos?.length - 1
                              ]?.foto.lokasi_file
                            }
                            alt={album?.foto?.judul_foto || "Placeholder"}
                          />
                        ) : (
                          <Image
                            src={placeholderImage}
                            className="album-image-preview"
                          />
                        )}
                      </div>
                      <div className="album-wrapper">
                        <div className="album-title">{album?.nama_album}</div>
                        <div className="album-subtitle">
                          {album?.deskripsi_album}
                        </div>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      value={album.album_id}
                      onChange={() => handleCheckboxChange(album.album_id)}
                      checked={selectedAlbum === album.album_id}
                      className="album-checkbox"
                    />
                  </div>
                ))
              ) : (
                <div className="album-create">
                  <h5 className="text-center">
                    Anda belum memiliki album, Buat album untuk memulai!
                  </h5>
                  <button
                    className="btn btn-md btn-primary mb-4"
                    onClick={() => router.push("/profile")}
                  >
                    Buat Album
                  </button>
                </div>
              )}
            </div>
            {album?.length > 0 && (
              <button
                className="btn btn-md btn-primary w-100"
                onClick={storeMemberBookmark}
              >
                Simpan
              </button>
            )}
          </div>
        </Modal.Body>
      </Modal>
      <div className="container-details">
        <div className="row">
          <div className="col-7">
            <div className="image-container">
              <img src={lokasi_file} className="image-detail"></img>
            </div>
          </div>
          <div className="col-5">
            <div className="card card-details justify-content-center">
              <div className="list-group list-group-flush">
                <li
                  className="list-group-item"
                  style={{ borderRadius: "24px" }}
                >
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
                    {showFloatingHeart && (
                      <div className="floating-heart">&#10084;</div>
                    )}

                    <div className="content" onClick={storeUserLike}>
                      <span className="heart-icon">
                        <FaHeart />
                      </span>
                      <span className="like-text">Suka</span>
                    </div>
                    <div
                      className="content"
                      onClick={openModal}
                      disabled={userData?.status != "2"}
                    >
                      <span className="bookmark">
                        <FaBookmark />
                      </span>
                      <span className="simpan">Simpan</span>
                    </div>
                    <div
                      className={`content ${
                        isCopied ? "active text-white" : ""
                      }`}
                      onClick={copyToClipboard}
                      disabled={isCopied}
                    >
                      {isCopied ? (
                        "Disalin"
                      ) : (
                        <>
                          <FaShareNodes />
                          <span className="bagikan">Bagikan</span>
                        </>
                      )}
                    </div>
                    {/* <div
                      className="content"
                      onClick={() => downloadImage(lokasi_file)}
                    >
                      <span className="download">
                        <MdFileDownload />
                      </span>
                      <span className="unduh">Unduh</span>
                    </div> */}
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
                <li
                  className="list-group-item"
                  style={{ borderRadius: "24px" }}
                >
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
            {renderComment()}
            {renderShowMoreButton()}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
