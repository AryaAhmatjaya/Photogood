"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import placeholderImage from "../assets/images/placeholder-image-3.png";
import Link from "next/link";
import client from "../utils/router";
import { Modal } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const RenderAlbum = ({ data, fetchData }) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const fetchUserDetail = async () => {
    try {
      const response = await client.get(`v1/show-user-detail`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user detail:", error);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleJudulChange = (event) => {
    setJudul(event.target.value);
  };

  const handleDeskripsiChange = (event) => {
    setDeskripsi(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const storeMemberAlbum = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        user_id: String(userData?.user_id),
        nama_album: judul,
        deskripsi_album: deskripsi,
      };
      const response = await client.post(`v2/store-album`, payload);
      console.log(response?.data, "RESPONSE IN BOTTOM SHEET ALBUM");
      if (response?.status === 200) {
        // onRefresh();
        // alert("Album berhasil ditambahkan!");
        fetchData();
        console.log("berhasil ditambahkan");
      }
    } catch (error) {
      console.error(error);
      // alert(error?.response?.data.message);
    }
  };

  useEffect(() => {
    fetchUserDetail();
  }, []);

  console.log(judul);
  console.log(deskripsi);

  return (
    <>
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Album</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-container">
            <div class="mb-4 mt-2 ">
              <label className="upload__label-form mb-3">Nama Album</label>
              <input
                type="text"
                class="form-control"
                placeholder="Judul anda"
                value={judul}
                onChange={handleJudulChange}
              ></input>
            </div>
            <div class="mb-3">
              <label
                for="exampleFormControlTextarea1"
                class="upload__label-form mb-3"
              >
                Deskripsi Album
              </label>
              <textarea
                class="form-control"
                placeholder="Deskripsi anda"
                rows="3"
                value={deskripsi}
                onChange={handleDeskripsiChange}
              ></textarea>
            </div>
            <button
              className="btn btn-md btn-primary mb-4 w-100 text-white"
              onClick={storeMemberAlbum}
            >
              Buat Album
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <div className="row justify-content-between align-items-end ">
        <form className="col-md-5 d-flex mt-4">
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
        <button
          className="album-button col-md-2 btn btn-md btn-primary"
          onClick={openModal}
        >
          Tambah
        </button>
      </div>

      <div className="img-row">
        {loading ? (
          [...Array(data?.length)].map((_, index) => (
            <div className="img-daftar" key={index}>
              <Skeleton height={200} width={200} />
              <Skeleton count={4} />
            </div>
          ))
        ) : data && data.length > 0 ? (
          data.map((item, index) => (
            <Link
              className="img-daftar"
              href={`/details/${item?.album_id}`}
              key={index}
            >
              {item?.bookmark_fotos.length > 0 ? (
                <img
                  className="img-post"
                  src={
                    item?.bookmark_fotos[item?.bookmark_fotos?.length - 1]?.foto
                      .lokasi_file
                  }
                  alt={item?.foto?.judul_foto || "Placeholder"}
                />
              ) : (
                <Image
                  src={placeholderImage}
                  alt="foto profil user"
                  className="img-post"
                ></Image>
              )}
              <h4
                className="mt-3"
                style={{
                  maxWidth: "250px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item?.nama_album}
              </h4>
              <p>{item?.total_bookmark_data}</p>
            </Link>
          ))
        ) : (
          <h3
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "16px",
            }}
          >
            User belum menyimpan apapun!
          </h3>
        )}
      </div>
    </>
  );
};
