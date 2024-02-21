"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { MdOutlineSearch, MdSend } from "react-icons/md";
export default function Home() {
    return (
        <>
            <Navbar />
            <div className="container-chat">
                <div class="row clearfix">
                    <div class="col-lg-12">
                        <div class="card chat-app">
                            <div id="plist" class="people-list">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><MdOutlineSearch style={{ fontSize: '25px' }} /></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Telusuri..." />
                                </div>
                                <ul class="list-unstyled chat-list mt-2 mb-0">
                                    <li class="clearfix" style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_128,ar_1:1/v1584086133/ovagrnkgfjwnonmuqvns.jpg" alt="avatar" />
                                        <div class="about">
                                            <div class="name">Photo Ilmu Padi</div>
                                        </div>
                                    </li>
                                    <li class="clearfix active" style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="https://media.licdn.com/dms/image/C4D03AQFjwCPDySDWFw/profile-displayphoto-shrink_400_400/0/1607407206068?e=2147483647&v=beta&t=cHrXjBRvPcI8RSS02giujlA5851anNIEbIoiOT4qbAY" alt="avatar" />
                                        <div class="about">
                                            <div class="name">Fotografi Pemula</div>
                                        </div>
                                    </li>
                                    <li class="clearfix" style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="https://i.pinimg.com/564x/89/cd/9d/89cd9da430e9caf80d60b9945ea9dbf8.jpg" alt="avatar" />
                                        <div class="about">
                                            <div class="name">Menyala Selalu</div>
                                        </div>
                                    </li>
                                    <li class="clearfix" style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVhPFyHKkMzKSoO_3hB0x7nl7yV2WeJ_aLA&usqp=CAU" alt="avatar" />
                                        <div class="about">
                                            <div class="name">Kasih Tipis-Tipis</div>
                                        </div>
                                    </li>
                                    <li class="clearfix" style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="https://pbs.twimg.com/profile_images/644733495672074240/57R0Twxp_400x400.jpg" alt="avatar" />
                                        <div class="about">
                                            <div class="name">Tetap Merendah</div>
                                        </div>
                                    </li>
                                    <li class="clearfix" style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="https://www.borneonews.co.id/images/upload/wa/2022/05/18/1652883626-futsal.jpg" alt="avatar" />
                                        <div class="about">
                                            <div class="name">Hallo Panutan</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="chat">
                                <div class="chat-header clearfix">
                                    <div class="row">
                                        <div class="col-lg-6" style={{ display: 'flex', alignItems: 'center' }}>
                                            <a href="/homepage" data-toggle="modal" data-target="#view_info">
                                                <img src="https://media.licdn.com/dms/image/C4D03AQFjwCPDySDWFw/profile-displayphoto-shrink_400_400/0/1607407206068?e=2147483647&v=beta&t=cHrXjBRvPcI8RSS02giujlA5851anNIEbIoiOT4qbAY" alt="avatar" />
                                            </a>
                                            <div class="chat-about">
                                                <h6 class="m-b-0">Fotografi Pemula</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-history">
                                    <ul class="m-b-0">
                                        <li class="clearfix">
                                            <div class="message-data" style={{ textAlign: 'right' }}>
                                                <span class="message-data-time">10:10, Hari ini</span>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                                            </div>
                                            <div class="message other-message float-right">Kaisar bapak ramah sekali</div>
                                        </li>
                                        <li class="clearfix">
                                            <div class="message-data" style={{ display: 'flex', flexDirection: 'row', marginLeft: '10px' }}>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                                <span class="message-data-time">10:10, Hari ini</span>
                                            </div>
                                            <div class="message my-message">Tapi kita tidak melawan dengan kebencian</div>
                                        </li>
                                        <li class="clearfix">
                                            <div class="message-data" style={{ display: 'flex', flexDirection: 'row', marginLeft: '10px' }}>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="avatar" />
                                                <span class="message-data-time">10:10, Hari ini</span>
                                            </div>
                                            <div class="message my-message">Lah masalahnya dimana? Wong saya suka kok!</div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="chat-message clearfix">
                                    <div class="input-group mb-0">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><MdSend style={{ fontSize: '25px' }} /></span>
                                        </div>
                                        <input type="text" class="form-control" placeholder="Enter text here..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

// To create routes, you must create new folder, and in the folder add page.js
// example : i want to create profile routes, so i must to create profile folder, and inside profile folder add page.js
