import React, { useState } from "react";
import roedi from "../../assets/images/Dropdown.jpg";
import sutek from "../../assets/icon/logo-pg.png";
import Image from "next/image";
import "@/styles/globals.scss";
import link from "next/link";
import { NavDropdown } from "react-bootstrap";
import { useRouter } from "next/navigation";

import placeholderImage from "../../assets/images/placeholder-image-3.png";
import client from "../../utils/router";
import { useEffect } from "react";

export const Navbar = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      fetchUserDetail(token);
    } else {
      setIsLoggedIn(false);
      setUserData({});
    }
  }, [isLoggedIn]);

  const fetchUserDetail = async (token) => {
    try {
      const response = await client.get(`v1/show-user-detail`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user detail:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserData({});
    router.push("/login");
  };

  console.log(userData);

  return (
    <main>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-navbar">
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
                  isLoggedIn ? (
                    userData?.foto_profil ? (
                      <img
                        src={userData?.foto_profil}
                        alt="Profile"
                        className="profile-img"
                      />
                    ) : (
                      <Image
                        src={placeholderImage}
                        alt="Profile"
                        className="profile-img"
                      />
                    )
                  ) : (
                    <span>Guest</span>
                  )
                }
              >
                <NavDropdown.Item href="/profile">Profil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/chat">Chat</NavDropdown.Item>
                <NavDropdown.Item href="/upload">Upload</NavDropdown.Item>
                <NavDropdown.Item href="/edit-profil">
                  Edit Profil
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Keluar
                </NavDropdown.Item>
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
