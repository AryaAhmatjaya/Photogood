import React from "react";
import Link from "next/link";

export const RenderMasonryVector = ({ gif }) => {
  const getRandomHeight = () => {
    return Math.floor(Math.random() * 100 + 375);
  };

  return (
    <>
      <div className="container-gambar">
        {gif?.map((foto) => (
          <div className="box" key={foto.foto_id}>
            <Link href={`/details`}>
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
    </>
  );
};
