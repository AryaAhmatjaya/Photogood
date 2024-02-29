import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import logo from "../../assets/icon/logo-pg.png"

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div class="d-flex flex-column gap-4 align-items-center container footer-wrapper mt-4" bis_skin_checked="1">
          <span href="" class="footer-title">Photogood</span>
          <div class="footer-item-wrapper" bis_skin_checked="1">
            <ul class="footer-item ps-0 d-flex gap-3" style={{listStyle: 'none'}}>
              <li>
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li>
                <a class="nav-link" aria-current="page" href="#">Destination</a>
              </li>
              <li>
                <a class="nav-link" aria-current="page" href="#">Blog</a>
              </li>
              <li>
                <a class="nav-link" aria-current="page" href="#">Languange</a>
              </li>
            </ul>
          </div>
          <div class="d-flex gap-4 footer-item-social mb-2" bis_skin_checked="1">
            <a href="#"><FaFacebookSquare className="icon-size" /></a>
            <a href="#"><FaInstagramSquare className="icon-size" /></a>
            <a href="#"><FaTwitterSquare className="icon-size" /></a>
          </div>
        </div>
        <div class="d-flex justify-content-center footer-wrapper-bottom" bis_skin_checked="1">
          © 2024 Photogood. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};
