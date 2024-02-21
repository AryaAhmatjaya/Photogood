"use client";
import React, { useState, useEffect } from "react";
import { Footer } from "../components/layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { NavGuest } from "../components/layout/NavGuest";

export default function Home() {
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
                  <span className="text-primary">Seluruh Dunia</span>
                </h1>
                <p style={{ color: "white" }}>
                  Photogood adalah hasil karya kelompok siswa yang ingin
                  menyelesaikan tugas akhir agar lulus. Jadi website ini kami
                  buat dengan pertimbangan guru pengajar kami.
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form className="d-flex flex-column">
                      {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1"
                            >
                              Username
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
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
                        </div>
                      </div>

                      {/* <!-- Email input --> */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Nama Lengkap
                        </label>
                      </div>

                      {/* <!-- Password input --> */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label>
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
                          Daftar
                        </button>
                      </div>

                      {/* <!-- Register buttons --> */}
                      <div className="text-center">
                        <a className="nav-link" href="../../login">
                          Sudah punya akun? <u>Silahkan Login</u>
                        </a>
                        <p>Atau daftar melalui</p>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="icon-size"
                          />
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <FontAwesomeIcon
                            icon={faGoogle}
                            className="icon-size"
                          />
                        </button>
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

// To create routes, you must create new folder, and in the folder add page.js
// example : i want to create profile routes, so i must to create profile folder, and inside profile folder add page.js
