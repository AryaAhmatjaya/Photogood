"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import photogood from "../assets/icon/logo-pg.png";
import { useRouter } from "next/navigation";
import client from "../utils/router";

export default function Home() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("All fields must be filled!");
      return;
    }

    setIsLoading(true);
    const payload = {
      username: username,
      password: password,
    };

    // Perform login request
    client
      .post("/auth/login", payload)
      .then(async (response) => {
        setIsLoading(false);
        if (response.status === 200) {
          console.log(response);
          localStorage.setItem("token", response?.data.login_tokens);
          router.push("/homepage");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("An error occured!");
        setIsLoading(false);
      });
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="roedi-image">
        <div className="roedi-content">
          <div className="roedi-content-inner">
            <div>
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
                    <div className="card-body py-1 px-md-5">
                      <form
                        className="d-flex flex-column"
                        onSubmit={handleLogin}
                      >
                        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}

                        <div className="row">
                          <div className="col-md-12 mb-4">
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
                          {/* <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example2"
                                className="form-control"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example2"
                              >
                                Email
                              </label>
                            </div>
                          </div> */}
                        </div>

                        {/* <!-- Password input --> */}
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

                        {/* <!-- Submit button --> */}
                        <div
                          className="w-100 "
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <button
                            type="submit"
                            className="btn btn-primary btn-block justify-content-center mb-1 rounded-pill text-white"
                            style={{ width: "250px" }}
                          >
                            Masuk
                          </button>
                        </div>

                        {/* <!-- Register buttons --> */}
                        <div className="text-center mt-4">
                          <p>
                            <a className="nav-link" href="../../register">
                              Belum punya akun?{" "}
                              <b>
                                <u className="Log"> Register</u>
                              </b>
                            </a>
                          </p>
                        </div>
                      </form>
                    </div>
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
