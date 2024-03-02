import React, { useState } from "react";
import Image from "next/image";
import sutek from "../../assets/icon/logo-pg.png";
import "@/styles/globals.scss";
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
          <div>
          <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/homepage"
                  >
                    Beranda
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/chat"
                  >
                    Chat
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/upload"
                  >
                    Upload
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/subscribe"
                  >
                    Subscribe
                  </a>
                </li>
              </ul>
          </div>
         
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
      
    </main>
  );
};

export default Navbar;
