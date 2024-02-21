"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import sutek from "../../assets/images/bear-8364583_1280.png";
import "./editprofile.css"
export default function Home() {
  return (
    <div className="container-editprof">
      <h1>Edit Profile</h1>
      Kami melindungi privasi anda, informasi yang anda tambahkan <br></br>
      ini akan terlihat pada halaman profil anda
      <div className="row-foto">
        <div>
        foto<br></br>
        <Image className="gambar-stylized"
          src={sutek} 
        />
        </div>
        <div>
        <button class="edit-btn" type="submit">
          Ganti foto
        </button>
        </div>
      </div >
      <div className="formContainer">
      <form>
        <div className="column">
          <label className="label-editprof">Nama</label>
          <input className="input-editprof" type="text"></input>
        </div>
        <div className="column">
          <label className="label-editprof">Nama Lengkap</label>
          <input className="input-editprof" type="text"></input>
        </div>
        <div className="column">
          <label className="label-editprof">Email</label>
          <input className="input-editprof" type="text"></input>
        </div>
        <div className="column">
          <label className="label-editprof">Alamat</label>
          <input className="input-editprof" type="text"></input>
        </div>
        <div>
        <button class="submit-btn" type="submit">
        Kirim
        </button>
        </div>
      </form>
      </div>
    </div>
  );
}
