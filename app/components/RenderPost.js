"use client";
import React, { useState, useEffect } from "react";
import placeholderImage from "../assets/images/placeholder-image-3.png";
import Link from "next/link";
import client from "../utils/router";

export const RenderPost = ({ data }) => {
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
            href={`/details/${item?.foto_id}`}
            key={index}
          >
            <img
              className="img-post"
              src={item?.lokasi_file || placeholderImage}
              alt={item?.judul_foto || "Placeholder"}
            />
            <h4 className="mt-3">{item?.judul_foto}</h4>
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
          User belum memposting apapun!
        </h3>
      )}
    </div>
  );
};
