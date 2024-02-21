"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";
import icon from "../assets/icon/cloud-computing.png"

export default function Home() {
  return (
    <UserLayout>
        <div className="upload__Unggah">
          <h1 className="upload__judul-upload">
            Unggah Disini
          </h1>
        </div>
        <div class="container">
          
          <div className="upload__wrapper">
            <div class="container">
              <div class="upload__upload-container" style={{marginTop: '20px'}}>
                <div class="upload__border-container">
                  <div className="upload__icon-container">
                    <Image className="upload__icon-upload" src={icon}></Image>
                  </div>

                  <p>Drag and drop files here, or
                    <a href="#" className="upload__file-browser"> browse</a> your computer.</p>
                </div>
              </div>
              <div className="form-container">
              <div class="mb-4 mt-5">
                <label className="upload__label-form">Masukkan Judul</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Judul anda"></input>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="upload__label-form">Masukkan Deskripsi</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Deskripsi anda" rows="3"></textarea>
              </div>
              <div class="mt-3">
              <button class="upload__upload-button" style={{marginTop: '20px'}}>Unggah</button>
              </div>
              </div>
            </div>
          </div>
        </div>
    </UserLayout>
  );
}
