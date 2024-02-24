import React from "react";
import Link from "next/link";

export const RenderMasonryGif = ({ gif }) => {
  const getRandomHeight = () => {
    return Math.floor(Math.random() * 120 + 375);
  };

  return (
    <>
      <div>
        {gif?.length > 0 ? (
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
