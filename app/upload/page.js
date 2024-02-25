"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { UserLayout } from "../components/layout/UserLayout/page";
import icon from "../assets/icon/cloud-computing.png";
import client from "../utils/router";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [tipeFoto, setTipeFoto] = useState("GIF");
  const [kategoriFoto, setKategoriFoto] = useState("1");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [userData, setUserData] = useState({});
  const [userStatus, setUserStatus] = useState("1");
  const [memberId, setMemberId] = useState(null);

  const fetchUserDetail = async () => {
    try {
      const response = await client.get(`v1/show-user-detail`);
      setUserData(response.data);
      setUserStatus(response?.data.status);
      setMemberId(response?.data?.member?.member_id);
    } catch (error) {
      console.error("Error fetching user detail:", error);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    previewFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileBrowse = (event) => {
    const file = event.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleJudulChange = (event) => {
    setJudul(event.target.value);
  };

  const handleDeskripsiChange = (event) => {
    setDeskripsi(event.target.value);
  };

  const handleTipeFotoChange = (event) => {
    setTipeFoto(event.target.value);
  };

  const handleKategoriFotoChange = (event) => {
    setKategoriFoto(event.target.value);
  };

  // Guest
  const handleUpload = async (e) => {
    e.preventDefault();
    console.log(
      "==================== guest upload ============================"
    );
    if (!previewImage) {
      alert("An error occured! Pilih foto terlebih dahulu!");
      return;
    }

    try {
      const file = await fetch(previewImage).then((res) => res.blob());
      const imageFile = new File([file], "image.jpg", { type: "image/jpeg" });

      const formData = new FormData();
      formData.append("images", imageFile);

      formData.append("judul_foto", judul);
      formData.append("deskripsi_foto", deskripsi);
      formData.append("user_id", userData?.user_id);
      formData.append("kategori_id", kategoriFoto);
      formData.append("type_foto", tipeFoto);
      formData.append("status", "1");

      const responseMember = await client.post(
        "/v1/store-guest-photo",
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("responseMember Upload Photo:", responseMember.data);
      alert("Foto berhasil diunggah");
      router.push("/homepage");
    } catch (error) {
      console.error("Error:", error);
      alert(
        "An error occured: " + error.response?.data?.message || "Unknown error"
      );
    }
  };

  // Member
  const handleMemberUpload = async (e) => {
    e.preventDefault();
    console.log(
      "==================== Member upload ============================"
    );
    if (!previewImage) {
      alert("An error occured! Pilih foto terlebih dahulu!");
      return;
    }

    try {
      const file = await fetch(previewImage).then((res) => res.blob());
      const imageFile = new File([file], "image.jpg", { type: "image/jpeg" });

      const formData = new FormData();
      formData.append("images", imageFile);

      formData.append("judul_foto", judul);
      formData.append("deskripsi_foto", deskripsi);
      formData.append("user_id", userData?.user_id);
      formData.append("member_id", memberId);
      formData.append("kategori_id", kategoriFoto);
      formData.append("type_foto", tipeFoto);
      formData.append("status", "1");

      const responseMember = await client.post(
        "/v2/store-member-photo",
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("responseMember Upload Photo:", responseMember.data);
      alert("Foto berhasil diunggah");
      router.push("/homepage");
    } catch (error) {
      console.error("Error:", error);
      alert(
        "An error occured: " + error.response?.data?.message || "Unknown error"
      );
    }
  };

  useEffect(() => {
    fetchUserDetail();
  }, []);

  console.log("Image : ", previewImage);
  console.log("Judul:", judul);
  console.log("Deskripsi:", deskripsi);
  console.log("Tipe Foto:", tipeFoto);
  console.log("Kategori Foto:", kategoriFoto);
  console.log("User Status Upload", userStatus);

  return (
    <UserLayout>
      <div className="upload__Unggah">
        <h1 className="upload__judul-upload">Unggah Disini</h1>
      </div>
      <div class="container">
        <div className="upload__wrapper">
          <div class="container">
            <div
              class="upload__upload-container"
              style={{ marginTop: "20px" }}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <div class="upload__border-container">
                <div className="upload__icon-container">
                  {previewImage ? (
                    <img
                      className="upload__preview-image"
                      src={previewImage}
                      alt="Preview"
                    />
                  ) : (
                    <Image className="upload__icon-upload" src={icon}></Image>
                  )}
                </div>
                <p>
                  Drag and drop files here,{" "}
                  <label htmlFor="fileInput" className="upload__file-browser">
                    browse
                  </label>{" "}
                  your computer.
                </p>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleFileBrowse}
                />
              </div>
            </div>
            <div className="form-container">
              <div class="mb-4 mt-5">
                <label className="upload__label-form mb-3">
                  Masukkan Judul
                </label>
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
                  Masukkan Deskripsi
                </label>
                <textarea
                  class="form-control"
                  placeholder="Deskripsi anda"
                  rows="3"
                  value={deskripsi}
                  onChange={handleDeskripsiChange}
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="tipeFoto" class="upload__label-form mb-3">
                  Tipe Foto
                </label>
                <select
                  class="form-select"
                  id="tipeFoto"
                  value={tipeFoto}
                  onChange={handleTipeFotoChange}
                >
                  <option value="GIF">GIF</option>
                  <option value="Vector">Vector</option>
                  <option value="Photo">Foto</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="kategoriFoto" class="upload__label-form mb-3">
                  Kategori Foto
                </label>
                <select
                  class="form-select"
                  id="kategoriFoto"
                  value={kategoriFoto}
                  onChange={handleKategoriFotoChange}
                >
                  <option value="1">Hewan</option>
                  <option value="2">Politik</option>
                  <option value="3">Alam</option>
                </select>
              </div>
              <div class="mt-3">
                <button
                  class="upload__upload-button"
                  style={{ marginTop: "20px" }}
                  onClick={
                    userStatus === "2" ? handleMemberUpload : handleUpload
                  }
                >
                  Unggah
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
