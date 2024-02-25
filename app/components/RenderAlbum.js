"use client";
import React, { useState, useEffect } from "react";
import placeholderImage from "../assets/images/placeholder-image-3.png";
import Link from "next/link";
import client from "../utils/router";

export const RenderAlbum = ({ data }) => {
  console.log(data);

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("id-ID", options);
  };

  return (
    <div className="img-row">
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <Link
            className="img-daftar"
            href={`/details/${item?.album_id}`}
            key={index}
          >
            <img
              className="img-post"
              src={
                item?.bookmark_fotos[item?.bookmark_fotos?.length - 1]?.foto
                  .lokasi_file
              }
              alt={item?.foto?.judul_foto || "Placeholder"}
            />
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
  );
};
