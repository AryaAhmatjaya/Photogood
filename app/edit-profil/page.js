"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { MdAddPhotoAlternate, MdOutlinePerson, MdBookmarkBorder, MdOutlineUpload  } from "react-icons/md";
import gambar1 from "../assets/images/bear-8364583_1280.png";
import gambar2 from "../assets/images/boat-8515980_1280.jpg";
import gambar3 from "../assets/images/ladybug-8491654_1280.jpg";
import gambar4 from "../assets/images/winter-8445565_1280.jpg";
import logo from "../assets/icon/logo-pg.png"
import gifIcon from "../assets/icon/crown.gif";

export default function Home() {
  return (
    <>
      < Navbar />


      <div className="container edit">
        <div class="row">
          <div class="col-xl-4">
            {/* <!--card--> */}
            <div class="card mb-2 mb-xl-0">
              <div class="card-body">
                <div className="contain-item d-flex px-3">
                  <MdOutlinePerson className="icon-size me-3" />
                  <a href="" className="text-middle pe-5">Rincian Akun</a>
                </div>
                <div className="contain-item d-flex px-3">
                  <MdBookmarkBorder className="icon-size me-3" />
                  <a href="" className="text-middle pe-5">Album</a>
                </div>
                <div className="contain-item d-flex px-3">
                  <MdOutlineUpload  className="icon-size me-3" />
                  <a href="" className="text-middle pe-5">Postingan</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            {/* <!-- Account details card--> */}
            <div class="card mb-4">
              <div class="card-header fw-bolda">Rincian Akun</div>
              <div class="card-body">
                <div className="row">
                  <div class="card-body media align-items-center d-flex">
                    <img src="https://pbs.twimg.com/profile_images/591025389549391873/T90qMEQQ_400x400.jpg" alt="" class="d-block ui-w-80 rounded-circle" />
                    <div class="media-body ml-4">
                      <label class="btn btn-outline-primary mx-3">
                        <MdAddPhotoAlternate /> Unggah Foto Profil Baru
                        <input type="file" class="account-settings-fileinput" />
                      </label>
                    </div>
                  </div>
                </div>
                <form>
                  {/* <!-- Form Group (username)--> */}
                  <div class="mb-3">
                    <label class="small mb-1" for="inputUsername">Username</label>
                    <input class="form-control" id="inputUsername" type="text" placeholder="Masukkan username anda" value="jaya.atmajaya" />
                  </div>
                  {/* <!-- Form Row--> */}
                  <div class="row gx-3 mb-3">
                    {/* <!-- Form Group (first name)--> */}
                    <div class="col-md">
                      <label class="small mb-1" for="inputFirstName">Nama Lengkap</label>
                      <input class="form-control" id="inputFirstName" type="text" placeholder="Masukkan nama lengkap anda" value="Jaya Atmajaya" />
                    </div>
                  </div>
                  {/* <!-- Form Row        --> */}
                  <div class="row gx-3 mb-3">
                    {/* <!-- Form Group (organization name)--> */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputOrgName">Alamat Email</label>
                      <input class="form-control" id="inputOrgName" type="text" placeholder="Masukkan alamat email anda" value="suteknopranowo@gmail.com" />
                    </div>
                    {/* <!-- Form Group (location)--> */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLocation">Status</label>
                      <input class="form-control" id="inputLocation" type="text" value="Member" />
                    </div>
                  </div>
                  {/* <!-- Form Group (email address)--> */}
                  <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Alamat</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                  </div>
                  {/* <!-- Save changes button--> */}
                  <button class="btn btn-primary" type="button">Simpan</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
