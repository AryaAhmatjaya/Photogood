"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import bernard from "../assets/images/bear-8364583_1280.png";
import roedi from "../assets/images/boat-8515980_1280.jpg";
import kewil from "../assets/images/ladybug-8491654_1280.jpg";
import roewil from "../assets/images/boat-8515980_1280.jpg";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="column-profile">
        <div>
          <Image className="gambar-profile" src={bernard} />
        </div>
        <div>
          <h1> Bernard WIjaya</h1>
        </div>
        <div>
          <h6> 1000 video foto</h6>
        </div>
        <div className="row-btn">
          <div className="row-btn-prof">
            <button className="btn btn-outline-dark" type="submit">
              Edit
            </button>
          </div>
          <div className="row-btn-prof">
            <button className="btn btn-outline-dark" type="submit">
              Chat
            </button>
          </div>
          <div className="row-btn-prof">
            <button className="btn btn-outline-dark" type="submit">
              Upload
            </button>
          </div>
        </div>
        <div className="img-row">
          <div className="img-daftar">
            <Image className="img-post" src={bernard} />
            <h4>Luar biasa</h4>
            23 foto <i>1 hari yang lalu</i>
          </div>
          <div className="img-daftar">
            <Image className="img-post" src={roedi} />
            <h4>Luar biasa</h4>
            23 foto <i>1 hari yang lalu</i>
          </div>
          <div className="img-daftar">
            <Image className="img-post" src={kewil} />
            <h4>Luar biasa</h4>
            23 foto <i>1 hari yang lalu</i>
          </div>
          <div className="img-daftar">
            <Image className="img-post" src={bernard} />
            <h4>Luar biasa</h4>
            23 foto <i>1 hari yang lalu</i>
          </div>
        </div>
        {/* <div class="main-posts">
          <div class="container">
            <div class="row">
              <div class="blog-masonry masonry-true">
                <div class="post-masonry col-md-4 col-sm-6">
                  <div class="post-thumb">
                    <Image src={bernard} />
                    <div class="title-over">
                      <h4>
                        <a href="#">Title one goes here</a>
                      </h4>
                    </div>
                    <div class="post-hover text-center">
                      <div class="inside">
                        <i class="fa fa-plus"></i>
                        <span class="date">25 Jan 2084</span>
                        <h4>
                          <a href="#">Title one goes here</a>
                        </h4>
                        <p>
                          Cum sociis natoque penatibus et magnis dis parturient
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post-masonry col-md-4 col-sm-6">
                  <div class="post-thumb">
                    <Image src={bernard} />
                    <div class="title-over">
                      <h4>
                        <a href="#">Second Image Title</a>
                      </h4>
                    </div>
                    <div class="post-hover text-center">
                      <div class="inside">
                        <i class="fa fa-plus"></i>
                        <span class="date">24 Jan 2084</span>
                        <h4>
                          <a href="#">Second Image Title</a>
                        </h4>
                        <p>
                          Donec venenatis libero sapien, eu condimentum lacus
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post-masonry col-md-4 col-sm-6">
                  <div class="post-thumb">
                    <Image src={bernard} />
                    <div class="title-over">
                      <h4>
                        <a href="#">Image Number Three</a>
                      </h4>
                    </div>
                    <div class="post-hover text-center">
                      <div class="inside">
                        <i class="fa fa-plus"></i>
                        <span class="date">23 Jan 2084</span>
                        <h4>
                          <a href="#">Image Number Three</a>
                        </h4>
                        <p>
                          Sed vitae lacus eget ipsum scelerisque condimentum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post-masonry col-md-4 col-sm-6">
                  <div class="post-thumb">
                    <Image src={bernard} />
                    <div class="title-over">
                      <h4>
                        <a href="#">Aliquam sed magna risus</a>
                      </h4>
                    </div>
                    <div class="post-hover text-center">
                      <div class="inside">
                        <i class="fa fa-plus"></i>
                        <span class="date">22 Jan 2084</span>
                        <h4>
                          <a href="#">Aliquam sed magna risus</a>
                        </h4>
                        <p>Praesent pharetra blandit ex sed imperdiet</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post-masonry col-md-4 col-sm-6">
                  <div class="post-thumb">
                    <Image src={bernard} />
                    <div class="title-over">
                      <h4>
                        <a href="#">Lorem ipsum dolor sit</a>
                      </h4>
                    </div>
                    <div class="post-hover text-center">
                      <div class="inside">
                        <i class="fa fa-plus"></i>
                        <span class="date">21 Jan 2084</span>
                        <h4>
                          <a href="#">Lorem ipsum dolor sit</a>
                        </h4>
                        <p>Vestibulum faucibus lacus ac risus efficitur</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post-masonry col-md-4 col-sm-6">
                  <div class="post-thumb">
                    <Image src={bernard} />
                    <div class="title-over">
                      <h4>
                        <a href="#">Praesent eget lectus mauris</a>
                      </h4>
                    </div>
                    <div class="post-hover text-center">
                      <div class="inside">
                        <i class="fa fa-plus"></i>
                        <span class="date">20 Jan 2084</span>
                        <h4>
                          <a href="#">Praesent eget lectus mauris</a>
                        </h4>
                        <p>
                          Morbi placerat pellentesque tortor, sed auctor dolor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post-masonry col-md-4 col-sm-6">
                  <div class="post-thumb">
                    <Image  src={bernard} />
                    <div class="title-over">
                      <h4>
                        <a href="#">Donec nec metus non</a>
                      </h4>
                    </div>
                    <div class="post-hover text-center">
                      <div class="inside">
                        <i class="fa fa-plus"></i>
                        <span class="date">15 Jan 2084</span>
                        <h4>
                          <a href="#">Donec nec metus non</a>
                        </h4>
                        <p>Phasellus eu sapien sagittis, sodales neque ac</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post-masonry col-md-4 col-sm-6">
                  <div class="post-thumb">
                    <Image src={bernard} />
                    <div class="title-over">
                      <h4>
                        <a href="#">Vestibulum faucibus lacus</a>
                      </h4>
                    </div>
                    <div class="post-hover text-center">
                      <div class="inside">
                        <i class="fa fa-plus"></i>
                        <span class="date">14 Jan 2084</span>
                        <h4>
                          <a href="#">Vestibulum faucibus lacus</a>
                        </h4>
                        <p>
                          In aliquet et tellus in iaculis. Ut fermentum quis
                          tellus
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post-masonry col-md-4 col-sm-6">
                  <div class="post-thumb">
                    <Image src={bernard} />
                    <div class="title-over">
                      <h4>
                        <a href="#">Pellentesque habitant morbi</a>
                      </h4>
                    </div>
                    <div class="post-hover text-center">
                      <div class="inside">
                        <i class="fa fa-plus"></i>
                        <span class="date">13 Jan 2084</span>
                        <h4>
                          <a href="#">Pellentesque habitant morbi</a>
                        </h4>
                        <p>Fusce ullamcorper diam vel arcu scelerisque</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
}

// To create routes, you must create new folder, and in the folder add page.js
// example : i want to create profile routes, so i must to create profile folder, and inside profile folder add page.js
