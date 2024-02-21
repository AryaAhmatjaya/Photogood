"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { FaHeart, FaBookmark, FaShareNodes } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import gambar1 from "../assets/images/bear-8364583_1280.png"
import gambar2 from "../assets/images/boat-8515980_1280.jpg"
import gambar3 from "../assets/images/ladybug-8491654_1280.jpg"
import gambar4 from "../assets/images/winter-8445565_1280.jpg"
import gifIcon from "../assets/icon/crown.gif"

export default function Home() {
    return (
        <>
            <Navbar />
            <div class="container-xl px-4 mt-4">
                {/* <!-- Account page navigation--> */}
                <nav class="nav nav-borders">
                    <a class="nav-link active ms-0" href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details" target="__blank">Profile</a>
                </nav>
                <hr class="mt-0 mb-4"/>
                    <div class="row">
                        <div class="col-xl-4">
                            {/* <!-- Profile picture card--> */}
                            <div class="card mb-4 mb-xl-0">
                                <div class="card-header">Foto Profil</div>
                                <div class="card-body text-center">
                                    {/* <!-- Profile picture image--> */}
                                    <img class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                                        {/* <!-- Profile picture help block--> */}
                                        <div class="small font-italic text-muted mb-4">JPG or PNG</div>
                                        {/* <!-- Profile picture upload button--> */}
                                        <button class="btn btn-primary" type="button">Unggah foto baru</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8">
                            {/* <!-- Account details card--> */}
                            <div class="card mb-4">
                                <div class="card-header">Rincian Akun</div>
                                <div class="card-body">
                                    <form>
                                        {/* <!-- Form Group (username)--> */}
                                        <div class="mb-3">
                                            <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                                            <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username"/>
                                        </div>
                                        {/* <!-- Form Row--> */}
                                        <div class="row gx-3 mb-3">
                                            {/* <!-- Form Group (first name)--> */}
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputFirstName">First name</label>
                                                <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="Valerie"/>
                                            </div>
                                            {/* <!-- Form Group (last name)--> */}
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputLastName">Last name</label>
                                                <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna"/>
                                            </div>
                                        </div>
                                        {/* <!-- Form Row        --> */}
                                        <div class="row gx-3 mb-3">
                                            {/* <!-- Form Group (organization name)--> */}
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputOrgName">Organization name</label>
                                                <input class="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" value="Start Bootstrap"/>
                                            </div>
                                            {/* <!-- Form Group (location)--> */}
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputLocation">Location</label>
                                                <input class="form-control" id="inputLocation" type="text" placeholder="Enter your location" value="San Francisco, CA"/>
                                            </div>
                                        </div>
                                        {/* <!-- Form Group (email address)--> */}
                                        <div class="mb-3">
                                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                                            <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="name@example.com"/>
                                        </div>
                                        {/* <!-- Form Row--> */}
                                        <div class="row gx-3 mb-3">
                                            {/* <!-- Form Group (phone number)--> */}
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputPhone">Phone number</label>
                                                <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567"/>
                                            </div>
                                            {/* <!-- Form Group (birthday)--> */}
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputBirthday">Birthday</label>
                                                <input class="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="06/10/1988"/>
                                            </div>
                                        </div>
                                        {/* <!-- Save changes button--> */}
                                        <button class="btn btn-primary" type="button">Simpan </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <h1>Nyontohi Sutek</h1>
            <Footer />
        </>
    );
}