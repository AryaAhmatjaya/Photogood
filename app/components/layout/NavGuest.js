import React from "react";
import sutek from "../../assets/icon/logo-pg.png";
import Image from "next/image";
import "@/styles/globals.scss";

export const NavGuest = () => {
  return (
    <main>
      {/* <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
          integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
          crossorigin="anonymous"
        ></script> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-navbar">
          {/* Logo di tengah */}
          <div className="mx-0 static">
          <Image
              className="navbar__pglogo"
              href="../guestpage"
              src={sutek}
              alt="logo photogood"
            ></Image>
          </div>
          <div>
          <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/login"
                  >
                    Beranda
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/login"
                  >
                    Chat
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/login"
                  >
                    Upload
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/login"
                  >
                    Subscribe
                  </a>
                </li>
              </ul>
          </div>
          {/* Search di pojok kanan */}
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form> */}
          <div className="navbar-nav">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav" // Ubah data-bs-target menjadi "#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-bs-parent="#navbarNav" // Tambahkan data-bs-parent di sini
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Daftar menu */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../../register"
                    data-bs-toggle="collapse" // Ubah data-bs-toggle menjadi "collapse"
                    data-bs-target=".navbar-collapse.show" // Atur target collapse sesuai kebutuhan
                  >
                    Daftar
                  </a>
                </li>
                <li className="nav-item">
                  {/* <button className="button-masuk" href="../../login" type="submit">
                    Masuk
                  </button> */}
                  <button type="submit" className="btn btn-lg btn-primary" href="../../login">Login</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="layout__navbar">
        <div>
          <div className="navbar__box-logo">
            <Image
              className="navbar__pglogo"
              href="./homepage"
              src={sutek}
              alt="logo photogood"
            ></Image>
          </div>

          <nav class="navbar navbar-expand-lg bg-body-emphasis position-absolute top-0 end-0">
            <div class="container">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Jelajah
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="./gif">
                          Gif
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="./foto">
                          Foto
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider"></hr>
                      </li>
                      <li>
                        <a class="dropdown-item" href="./vektor">
                          Vektor
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="./login"
                    >
                      Masuk
                    </a>
                  </li>
                  <li class="nav-item">
                    <button
                      type="button"
                      class="btn btn-outline-dark emphasis rounded-pill ms-3 me-3"
                      href="./member"
                    >
                      Gabung
                    </button>
                  </li>
                  <li class="nav-item">
                    <button class="upload__upload-button" href="./upload">
                      Unggah
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div> */}
    </main>
  );
};
