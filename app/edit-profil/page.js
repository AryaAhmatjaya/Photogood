"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { MdAddPhotoAlternate } from "react-icons/md";
import gambar1 from "../assets/images/bear-8364583_1280.png";
import gambar2 from "../assets/images/boat-8515980_1280.jpg";
import gambar3 from "../assets/images/ladybug-8491654_1280.jpg";
import gambar4 from "../assets/images/winter-8445565_1280.jpg";
import gifIcon from "../assets/icon/crown.gif";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="edit">
        <div class="container light-style flex-grow-1 container-p-y">
          <h2 class="fw-bolder py-3 mb-2">Edit Profil</h2>

          <div class="card overflow-hidden">
            <div class="row no-gutters row-bordered row-border-light">
              <div class="col">
                <div class="tab-content">
                  <div class="tab-pane fade active show" id="account-general">
                    <div class="card-body media align-items-center d-flex">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt=""
                        class="d-block ui-w-80 rounded-circle"
                      />
                      <div class="media-body ml-4">
                        <label class="btn btn-outline-primary mx-3">
                          <MdAddPhotoAlternate /> Unggah Foto Profil Baru
                          <input
                            type="file"
                            class="account-settings-fileinput"
                          />
                        </label>
                      </div>
                    </div>
                    <hr class="border-light m-0" />

                    <div class="card-body row">
                      <div className="row">
                        <div class="form-group col-2 d-flex flex-column">
                          <label className="form-label">Title</label>
                          <div class="input-group">
                            <select
                              class="form-select"
                              id="inputGroupSelect03"
                              aria-label="Example select with button addon"
                            >
                              <option selected>Pilih</option>
                              <option value="1">Mr.</option>
                              <option value="2">Mrs.</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group col">
                          <label class="form-label">Username</label>
                          <input
                            type="text"
                            class="form-control mb-1"
                            placeholder="JIDIABD"
                          />
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div class="form-group">
                          <label class="form-label">Nama Lengkap</label>
                          <input
                            type="text"
                            class="form-control mb-1"
                            placeholder="Arya Atmajaya"
                          />
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div class="form-group">
                          <label class="form-label">E-mail</label>
                          <input
                            type="text"
                            class="form-control mb-1"
                            placeholder="mephistopeles4@gmail.com"
                          />
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlTextarea1"
                            class="form-label"
                          >
                            Alamat
                          </label>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="2"
                          ></textarea>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlTextarea1"
                            class="form-label"
                          >
                            Deskripsi
                          </label>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-right d-flex flex-row-reverse my-3 mx-5">
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                  &nbsp;
                  <button type="button" class="btn btn-default">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
