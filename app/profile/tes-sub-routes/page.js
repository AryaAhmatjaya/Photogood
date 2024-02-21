"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/profile/laksa">
        <span>Tes sub routes</span>
      </Link>
    </>
  );
}
