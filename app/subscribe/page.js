"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { MdAddPhotoAlternate } from "react-icons/md";
import gambar1 from "../assets/images/bear-8364583_1280.png"
import gambar2 from "../assets/images/boat-8515980_1280.jpg"
import gambar3 from "../assets/images/ladybug-8491654_1280.jpg"
import gambar4 from "../assets/images/winter-8445565_1280.jpg"
import { FaRegCircleXmark, FaRegCircleCheck } from "react-icons/fa6";
import { HiDocumentCheck, HiMiniBanknotes, HiCursorArrowRays } from "react-icons/hi2";


export default function Home() {
    return (
        <>
            <Navbar />
            <div className="row-judul">
                <h1 className="judul-subs">Berlangganan</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="container col" style={{ display: 'flex' }}>
                        <div className="card w-100">
                            <div className="card-body">
                                <div className="row border-bottom text-center mx-2">
                                    <div className="col-5 "></div>
                                    <div className="col"><span className="text-th">Gratis</span></div>
                                    <div className="col"><span className="text-th">Member</span></div>
                                </div>
                                <div className="row mx-2">
                                    <div className="col-5 my-3">Maksimal download gambar</div>
                                    <div className="col text-center my-3"><span>3</span></div>
                                    <div className="col text-center my-3"><span>Tak terbatas</span></div>
                                </div>
                                <div className="row mx-2">
                                    <div className="col-5 my-3">Maksimal unggah gambar</div>
                                    <div className="col text-center my-3"><span>3</span></div>
                                    <div className="col text-center my-3"><span>Tak terbatas</span></div>
                                </div>
                                <div className="row mx-2">
                                    <div className="col-5 my-3">Penjelajahan bebas iklan</div>
                                    <div className="col text-center my-3"><span><FaRegCircleCheck className="icon-subscribe-kecil" /></span></div>
                                    <div className="col text-center my-3"><span><FaRegCircleXmark className="icon-subscribe-kecil" /></span></div>
                                </div>
                                <div className="row mx-2">
                                    <div className="col-5 my-3">Kualitas download gambar HD</div>
                                    <div className="col text-center my-3"><span><FaRegCircleCheck className="icon-subscribe-kecil" /></span></div>
                                    <div className="col text-center my-3"><span><FaRegCircleXmark className="icon-subscribe-kecil" /></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                <div className="card">
                                    <div className="card-title my-3 mx-3">Penawaran Terbaik</div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <div className="row"><span className="judul-text-subscribe">1 Tahun</span></div>
                                                <div className="col d-flex" style={{ alignItems: 'center' }}>
                                                    <span className="harga-text-subscribe">Rp. 30.000,00</span>
                                                    <span className="bulan-text-subscribe">/Bulan</span>
                                                </div>
                                            </div>
                                            <div className="col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                <div className="container-button">
                                                    <button className="btn btn-secondary" type="button">Berlangganan</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <span className="jumlah-text-subscribe">1 Tahun * RP. 360.000,00</span>
                                        </div>
                                        <div className="row">
                                            <span className="text-subscribe-pajak">*dapat dikenakan biaya tambahan sesuai pajak masing - masing daerah</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <div className="row"><span className="judul-text-subscribe">1 Tahun</span></div>
                                                <div className="col d-flex" style={{ alignItems: 'center' }}>
                                                    <span className="harga-text-subscribe">Rp. 50.000,00</span>
                                                    <span className="bulan-text-subscribe">/Bulan</span>
                                                </div>
                                            </div>
                                            <div className="col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                <div className="container-button">
                                                    <button className="btn btn-secondary" type="button">Berlangganan</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <span className="jumlah-text-subscribe">1 Tahun * RP. 600.000,00</span>
                                        </div>
                                        <div className="row">
                                            <span className="text-subscribe-pajak">*dapat dikenakan biaya tambahan sesuai pajak masing - masing daerah</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{marginTop: '50px'}}>
                <h2 className="sub-judul-subs">Upgrade akun anda sekarang dan nikmati keuntungan seperti</h2>
            </div>
            <div className="container">
                <div className="row my-5" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="col" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <div className="icon-bunder" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="icon-detail-subs"><HiDocumentCheck className="iki-icon-telu" /></div>
                        </div>
                        <div className="container-text">
                            <div className="text-subs-detail">
                                <span className="atas-subs">Berlisensi</span>
                                <span className="bawah-subs">Dapat menggunakan gambar berlisensi penuh tanpa khawatir tentang hak cipta</span>
                            </div>
                        </div>
                    </div>
                    <div className="col" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <div className="icon-bunder" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="icon-detail-subs"><HiMiniBanknotes className="iki-icon-telu" /></div>
                        </div>
                        <div className="container-text">
                            <div className="text-subs-detail">
                                <span className="atas-subs">Premium</span>
                                <span className="bawah-subs">Nikmati konten premium yang berkualitas dan jernih</span>
                            </div>
                        </div>
                    </div>
                    <div className="col" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <div className="icon-bunder" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="icon-detail-subs"><HiCursorArrowRays className="iki-icon-telu" /></div>
                        </div>
                        <div className="container-text">
                            <div className="text-subs-detail">
                                <span className="atas-subs">Tanpa Iklan</span>
                                <span className="bawah-subs">Anda dapat berselancar dengan nyaman tanpa ada iklan yang mengganggu</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}


