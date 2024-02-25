"use client";
import React, { useState, useEffect } from "react";
import placeholderImage from "../assets/images/placeholder-image-3.png";
import Link from "next/link";
import client from "../utils/router";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const RenderSaved = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("id-ID", options);
  };

  return (
    <div className="img-row">
      {loading ? (
        [...Array(data?.length)].map((_, index) => (
          <div className="img-daftar" key={index}>
            <Skeleton height={200} width={200} />
            <Skeleton count={4} />
          </div>
        ))
      ) : (
        <>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <Link
                className="img-daftar"
                href={`/details/${item?.foto_id}`}
                key={index}
              >
                <img
                  className="img-post"
                  src={item?.foto?.lokasi_file || placeholderImage}
                  alt={item?.foto?.judul_foto || "Placeholder"}
                />
                <h4 className="mt-3">{item?.foto?.judul_foto}</h4>
                <p>{formatDate(item?.created_at)}</p>
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
        </>
      )}
    </div>
  );
};
