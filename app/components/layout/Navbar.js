import React, { useState } from "react";
import roedi from "../../assets/images/Dropdown.jpg";
import sutek from "../../assets/icon/logo-pg.png";
import Image from "next/image";
import "@/styles/globals.scss";
import link from "next/link";
import { NavDropdown } from "react-bootstrap";

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <main>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-navbar">
          {/* Logo di tengah */}
          <div className="mx-0 static">
            <Image
              className="navbar__pglogo"
              href="./homepage"
              src={sutek}
              alt="logo photogood"
            ></Image>
          </div>

          {/* Search di pojok kanan */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
          <div className="navbar-nav">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="#navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-bs-parent="#navbarNav" // Tambahkan data-bs-parent di sini
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbardrop">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/homepage"
                    data-bs-toggle="collapse" // Ubah data-bs-toggle menjadi "collapse"
                    data-bs-target=".navbar-collapse.show" // Atur target collapse sesuai kebutuhan
                  >
                    Beranda
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../../register"
                    data-bs-toggle="collapse" // Ubah data-bs-toggle menjadi "collapse"
                    data-bs-target=".navbar-collapse.show" // Atur target collapse sesuai kebutuhan
                  >
                    Galeri
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/subscribe"
                    data-bs-toggle="collapse" // Ubah data-bs-toggle menjadi "collapse"
                    data-bs-target=".navbar-collapse.show" // Atur target collapse sesuai kebutuhan
                  >
                    Subscribe
                  </a>
                </li>
              </ul>
            {/* Daftar menu */}

              <NavDropdown
                title={
                  <Image
                    src={roedi}
                    alt="Profile"
                    className="profile-img"
                  ></Image>
                }
                id="nav-dropdown"
                show={dropdownOpen}
                onClick={toggleDropdown}
              >
                <NavDropdown.Item href="./profile">Profil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/chat">Chat</NavDropdown.Item>
                <NavDropdown.Item href="/upload">Upload</NavDropdown.Item>
                <NavDropdown.Item href="/edit-profil">Edit Profil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Keluar</NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
        <div className="container">
          <div className="mx-0 static">
            <Image
              className="navbar__pglogo"
              href="./homepage"
              src={sutek}
              alt="logo photogood"
            ></Image>
          </div>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>

          <div className="navbar-nav">
            <a className="nav-link" href="/menu">
              Home
            </a>
            <a className="nav-link" href="/menu">
              Galeri
            </a>
            <a className="nav-link" href="/menu">
              Subcribe
            </a>
          
            <NavDropdown
              title={
                <Image
                  src={roedi}
                  alt="Profile" className="profile-img"
                ></Image>
              }
              id="nav-dropdown"
              show={dropdownOpen}
              onClick={toggleDropdown}
            >
              <NavDropdown.Item href="./profile">Profil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Album Foto</NavDropdown.Item>
              <NavDropdown.Item href="#">Chat</NavDropdown.Item>
              <NavDropdown.Item href="#">Pengaturan</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="../app/page">Keluar</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </nav> */}
    </main>
  );
};

export default Navbar;
