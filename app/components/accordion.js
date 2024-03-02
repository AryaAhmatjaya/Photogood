import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Accordion } from 'react-bootstrap'

export default function MyAccordion() {
    let data = [
        {
            name: "Apa keuntungan kita berlangganan?",
            description: "Dengan berlangganan anda dapat menggunakan fitur - fitur seperti, dapat upload dengan tak terbatas, dapat download foto dengan tak terbatas"
        },

        {
            name: "Apakah gambar yang kita unduh dapat digunakan dengan bebas?",
            description: "Ya, dapat digunakan dengan bebas asalkan tidak digunakan untuk tindak kriminal"
        },

        {
            name: "Bagaimana proses pembayaran saat kita ingin berlangganan?",
            description: "Pertama anda dapat memilih paket mana yang akan diambil, lalu anda akan diarahkan ke web pembayaran, jika pembayaran berhasil anda akan mendapat notif berhasil melakukan pembayaran "
        },
    ]
    return (
        <div className="accordion-container container">
            {
                data.map((item) => (
                    <Accordion className="my-3">
                        <div className="contain-accordion">
                            <Accordion.Header classname="head-accordion">
                                <h5 style={{
                                    fontWeight: 'bold'
                                }}>{item.name}</h5>
                            </Accordion.Header>
                        </div>
                        <Accordion.Body>
                            <h8 
                            >{item.description}</h8>
                        </Accordion.Body>
                    </Accordion>
                ))
            }
        </div >
    )
}
