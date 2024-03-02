"use client";
import Image from "next/image";
import React, { useState, useEffect, use } from "react";
import photogood from "../assets/icon/logo-pg.png";
import { Footer } from "../components/layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { NavGuest } from "../components/layout/NavGuest";
import { useRouter } from "next/navigation";
import client from "../utils/router";

export default function Home() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !email || !password || !namaLengkap) {
      alert("An error occurred!", "All fields must be filled!");
      return;
    }

    setIsLoading(true);
    const payload = {
      username: username,
      password: password,
      email: email,
      nama_lengkap: namaLengkap,
      status: 1,
    };

    client
      .post("auth/register", payload)
      .then((response) => {
        setIsLoading(false);
        console.log(response);
        if (response.status === 200) {
          alert("Register Success!", "Account registered successfully");
          router.push("/login");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
        alert(error.response.data.message);
      });
  };

  return (
    <>
      {/* <NavGuest /> */}
      <div className="roedi-image">
        <div className="roedi-content">
          <div className="roedi-content-inner">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-2 display-3 fw-bold ls-tight ">
                  <span className="text-white">Temukan Gambar Dari</span>
                  <br />
                  <span className="text-success">Seluruh Dunia</span>
                </h1>
                <p style={{ color: "white" }}>
                  Photogood adalah hasil karya kelompok siswa yang ingin
                  menyelesaikan tugas akhir agar lulus. Jadi website ini kami
                  buat dengan pertimbangan guru pengajar kami.
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                <div className="logo-login">
                    <Image src={photogood} className="login-logo"></Image>
                    </div>
                  <div className="card-body py-3 px-md-5">
                    <form
                      className="d-flex flex-column"
                      onSubmit={handleRegister}
                    >
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                             <label
                              className="form-label"
                              htmlFor="form3Example1"
                            >
                              Username
                            </label>
                            <input
                              type="text"
                              id="form3Example1"
                              className="form-control"
                              onChange={(e) => setUsername(e.target.value)}
                            />
                           
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline"> 
                          <label
                              className="form-label"
                              htmlFor="form3Example2"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              id="form3Example2"
                              className="form-control"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                           
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          id="form3Example3"
                          className="form-control"
                          onChange={(e) => setNamaLengkap(e.target.value)}
                        />
                        
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        
                      </div>

                      <div
                        className="w-100 "
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <button
                          type="submit"
                          className="btn btn-primary btn-block justify-content-center mb-1 rounded-pill text-white"
                          style={{ width: "250px" }}
                        >
                          Daftar
                        </button>
                      </div>

                      <div className="text-center mt-4">
                        <a className="nav-link" href="../../login">
                          Sudah punya akun? <b><u className="Log"> Login</u></b>
                        </a>
                        
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
