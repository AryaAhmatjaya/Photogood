import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <main>
      <footer style={{ backgroundColor: "#F5F5F5", overflow: "hidden" }}>
        {/* <!-- Grid container --> */}
        {/* <!-- Section: Links --> */}
        <section class="mt-5">
          {/* <!-- Grid row--> */}
          <div class="row text-center d-flex justify-content-center ">
            {/* <!-- Grid column --> */}
            <div class="col-md-2">
              <h6 class="text-uppercase fw-bold">
                <a href="#!" class="text-black">
                  Beranda
                </a>
              </h6>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-2">
              <h6 class="text-uppercase fw-bold">
                <a href="#!" class="text-black">
                  Jelajah
                </a>
              </h6>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-2">
              <h6 class="text-uppercase fw-bold">
                <a href="#!" class="text-black">
                  Upload
                </a>
              </h6>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-2">
              <h6 class="text-uppercase fw-bold">
                <a href="#!" class="text-black">
                  FAQ
                </a>
              </h6>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-2">
              <h6 class="text-uppercase fw-bold">
                <a href="#!" class="text-black">
                  Kontak
                </a>
              </h6>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row--> */}
        </section>
        {/* <!-- Section: Links --> */}

        <hr class="my-5" />

        {/* <!-- Section: Text --> */}
        <section class="mb-5">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <p className="text-center">
                Photogood adalah hasil karya kelompok siswa yang ingin
                menyelesaikan tugas akhir agar lulus. Jadi website ini kami buat
                dengan pertimbangan guru pengajar kami.
              </p>
            </div>
          </div>
        </section>
        {/* <!-- Section: Text --> */}

        {/* <!-- Section: Social --> */}
        <section class="text-center mb-5">
          <a href="" class="text-black me-4">
            <FontAwesomeIcon icon={faFacebookF} className="icon-size" />
          </a>
          <a href="" class="text-black me-4">
            <FontAwesomeIcon icon={faTwitter} className="icon-size" />
          </a>
          <a href="" class="text-black me-4">
            <FontAwesomeIcon icon={faGoogle} className="icon-size" />{" "}
          </a>
          <a href="" class="text-black me-4">
            <FontAwesomeIcon icon={faInstagram} className="icon-size" />{" "}
          </a>
        </section>
        {/* <!-- Section: Social --> */}
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          class="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a class="text-black" href="https://mdbootstrap.com/">
            Photogood
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </main>
  );
};
