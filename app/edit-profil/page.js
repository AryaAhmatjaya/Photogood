"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import {
  MdAddPhotoAlternate,
  MdOutlinePerson,
  MdBookmarkBorder,
  MdOutlineUpload,
} from "react-icons/md";
import gambar1 from "../assets/images/bear-8364583_1280.png";
import gambar2 from "../assets/images/boat-8515980_1280.jpg";
import gambar3 from "../assets/images/ladybug-8491654_1280.jpg";
import gambar4 from "../assets/images/winter-8445565_1280.jpg";
import logo from "../assets/icon/logo-pg.png";
import gifIcon from "../assets/icon/crown.gif";
import client from "../utils/router";

export default function Home() {
  const [imagePreview, setImagePreview] = useState("");
  const [username, setUsername] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [userData, setUserData] = useState(null);

  console.log(userData?.status);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const fetchUserDetail = async () => {
    try {
      const response = await client.get(`v1/show-user-detail`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user detail:", error);
    }
  };

  const updateUserDetail = async () => {
    try {
      const payload = {
        alamat: address || userData?.alamat,
        email: email || userData?.email,
        username: username || userData?.username,
        nama_lengkap: fullName || userData?.nama_lengkap,
      };

      const response = await client.post(`v1/update-user-detail`, payload);

      // Store foto_profil (if there is an image)
      if (imagePreview) {
        const blob = await fetch(imagePreview).then((res) => res.blob());
        const file = new File([blob], "photo.jpg", { type: "image/jpeg" });

        const imageData = new FormData();
        imageData.append("images", file);

        const responsePhoto = await client.post(
          `/v1/store-user-photo`,
          imageData
        );

        console.log(responsePhoto, "responsePhoto fetch in profile : ");
      }

      alert("Success", "Berhasil update user data!");
      console.log(response.data, "response fetch in profile : ");
    } catch (error) {
      alert(error);
      console.error(error, "error in profile : ");
    }
  };

  useEffect(() => {
    fetchUserDetail();
  }, []);

  const formatStatus = () => {
    if (userData && userData.status === "2") {
      return "Member";
    } else {
      return "User";
    }
  };

  console.log(userData);

  return (
    <>
      <Navbar />
      <div className="container edit">
        <div class="row">
          <div class="col-xl-4">
            <div class="card mb-2 mb-xl-0">
              <div class="card-body">
                <div className="contain-item d-flex px-3">
                  <MdOutlinePerson className="icon-size me-3" />
                  <a href="" className="text-middle pe-5">
                    Rincian Akun
                  </a>
                </div>
                <div className="contain-item d-flex px-3">
                  <MdBookmarkBorder className="icon-size me-3" />
                  <a href="/album" className="text-middle pe-5">
                    Album
                  </a>
                </div>
                <div className="contain-item d-flex px-3">
                  <MdOutlineUpload className="icon-size me-3" />
                  <a href="" className="text-middle pe-5">
                    Postingan
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            <div class="card mb-4">
              <div class="card-header fw-bolda">Rincian Akun</div>
              <div class="card-body">
                <div className="row">
                  <div className="card-body media align-items-center d-flex">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="d-block ui-w-80 h-100 rounded-circle"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                    ) : userData && userData.foto_profil ? (
                      <img
                        src={userData.foto_profil}
                        alt="Foto Profil"
                        className="d-block ui-w-80 h-100 rounded-circle"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                    ) : (
                      <img
                        src="https://pbs.twimg.com/profile_images/591025389549391873/T90qMEQQ_400x400.jpg"
                        alt=""
                        className="d-block ui-w-80 rounded-circle"
                      />
                    )}
                    {/* Input untuk unggah file */}
                    <div className="media-body ml-4">
                      <label className="btn btn-outline-primary mx-3">
                        <MdAddPhotoAlternate /> Unggah Foto Profil Baru
                        <input
                          type="file"
                          className="account-settings-fileinput"
                          onChange={handleFileChange} // Tangani perubahan pada input file
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <form onSubmit={updateUserDetail}>
                  <div class="mb-3">
                    <label class="small mb-1" for="inputUsername">
                      Username
                    </label>
                    <input
                      type="text"
                      value={username}
                      defaultValue={userData?.username}
                      className="form-control"
                      onChange={handleUsernameChange}
                      placeholder="Masukkan username anda"
                    />
                  </div>
                  {/* <!-- Form Row--> */}
                  <div class="row gx-3 mb-3">
                    <div class="col-md">
                      <label class="small mb-1" for="inputFirstName">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        defaultValue={userData?.nama_lengkap}
                        onChange={handleFullNameChange}
                        placeholder="Masukkan nama lengkap anda"
                        className="form-control"
                      />
                    </div>
                  </div>
                  {/* <!-- Form Row        --> */}
                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputOrgName">
                        Alamat Email
                      </label>
                      <input
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                        defaultValue={userData?.email}
                        placeholder="Masukkan alamat email anda"
                        className="form-control"
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLocation">
                        Status
                      </label>
                      <input
                        type="text"
                        defaultValue={userData?.status}
                        placeholder="Masukkan status anda"
                        className="form-control"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Alamat
                    </label>
                    <textarea
                      value={address}
                      defaultValue={userData?.alamat}
                      onChange={handleAddressChange}
                      placeholder="Masukkan alamat anda"
                      className="form-control"
                    ></textarea>
                  </div>
                  <button
                    class="btn btn-primary"
                    type="button"
                    onClick={updateUserDetail}
                  >
                    Simpan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
