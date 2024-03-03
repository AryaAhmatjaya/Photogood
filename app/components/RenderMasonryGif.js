import React, { useState, useEffect } from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const RenderMasonryGif = ({ gif }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const getRandomHeight = () => {
    return Math.floor(Math.random() * 120 + 375);
  };

  return (
    <>
      <div>
        {loading ? (
          <div className="container-gambar">
            {[...Array(gif?.length)].map((_, index) => (
              <div className="box" key={index}>
                <Skeleton height={getRandomHeight()} />
              </div>
            ))}
          </div>
        ) : gif?.length > 0 ? (
          <div className="container-gambar">
            {gif.map((foto, index) => (
              <div className="box" key={index}>
                <Link href={`/details/${foto?.foto_id}`}>
                  <img
                    src={foto.lokasi_file}
                    className="image"
                    style={{
                      height: `${getRandomHeight()}px`,
                    }}
                  />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <h2
            style={{
              width: "100%",
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              marginBottom: 32,
            }}
          >
            Tidak ada gambar
          </h2>
        )}
      </div>
    </>
  );
};
