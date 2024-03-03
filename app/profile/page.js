"use client";
import React, { useState, useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { RenderPost } from "../components/RenderPost";
import { RenderAlbum } from "../components/RenderAlbum";
import { RenderSaved } from "../components/RenderSaved";
import { LoadingSpinnerHome } from "../components/LoadingSpinnerHome";
import { LoadingSpinner } from "../components/LoadingSpinner";
import Image from "next/image";
import placeholderImage from "../assets/images/placeholder-image-3.png";
import client from "../utils/router";

export default function Home() {
  const [userData, setUserData] = useState(null);
  const [post, setPost] = useState([]);
  const [saved, setSaved] = useState([]);
  const [album, setAlbum] = useState([]);
  const [activeTab, setActiveTab] = useState("Post");
  const [loading, setLoading] = useState(true);

  const fetchUserDetail = async () => {
    try {
      const response = await client.get(`v1/show-user-detail`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user detail:", error);
    }
  };

  const fetchUserPost = async () => {
    try {
      const response = await client.get(`v1/show-user-post`);
      console.log("upload user post  : ", response?.data);
      setPost(response?.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserBookmark = async () => {
    try {
      const response = await client.get(`v2/show-all-bookmark`);
      console.log("upload user bookmark  : ", response?.data);
      setSaved(response?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
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

  const fetchData = async () => {
    await fetchUserDetail();
    await fetchMemberAlbum();
    await fetchUserBookmark();
    await fetchUserPost();
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  console.log(userData);
  console.log(album);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Navbar />
      <div className="column-profile">
        <div>
          {userData?.foto_profil ? (
            <img
              src={userData?.foto_profil}
              alt="foto profil user"
              className="gambar-profile"
            />
          ) : (
            <Image
              src={placeholderImage}
              alt="foto profil user"
              className="gambar-profile"
            />
          )}
        </div>
        <div>
          <h2 className="mt-3">
            {userData?.nama_lengkap} ({userData?.username})
          </h2>
        </div>
        <div>
          <h6 className="mt-2"> {post?.length} Postingan</h6>
        </div>
        <div className="row-btn gap-2">
          <div className="row-btn-prof">
            <button
              className={`btn btn-outline-dark ${
                activeTab === "Post" && "active"
              }`}
              onClick={() => handleTabChange("Post")}
            >
              Postingan
            </button>
          </div>
          <div className="row-btn-prof">
            <button
              className={`btn btn-outline-dark ${
                activeTab === "Saved" && "active"
              }`}
              onClick={() => handleTabChange("Saved")}
              disabled={userData?.status != "2"}
            >
              Disimpan
            </button>
          </div>
          <div className="row-btn-prof">
            <button
              className={`btn btn-outline-dark ${
                activeTab === "Album" && "active"
              }`}
              onClick={() => handleTabChange("Album")}
              disabled={userData?.status != "2"}
            >
              Album
            </button>
          </div>
        </div>
        {activeTab === "Post" && (
          <div className="postingan-container">
            {post.length > 0 ? (
              <RenderPost data={post} />
            ) : (
              <LoadingSpinnerHome />
            )}
          </div>
        )}
        {activeTab === "Saved" && (
          <div className="disimpan-container">
            {saved.length > 0 ? (
              <RenderSaved data={saved} />
            ) : (
              <div style={{ marginTop: 20 }}>
                <h2>User belum menyimpan apapun!</h2>
              </div>
            )}
          </div>
        )}
        {activeTab === "Album" && (
          <div className="album-container">
            {album.length > 0 ? (
              <RenderAlbum data={album} fetchData={fetchData} />
            ) : (
              <>
                <RenderAlbum data={album} fetchData={fetchData} />
              </>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
