"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function WhatsAppLink() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  }, []);

  const number = "919585558007";
  const message = encodeURIComponent(
    "Hi, I got your contact from website www.JDTech.co.in"
  );

  const handleClick = () => {
    const url = `https://wa.me/${number}?text=${message}`;
    window.open(url, "_blank");
    toast.success("Opening WhatsApp...");
  };

  return (
    <div onClick={handleClick} className="flex w-full cursor-pointer">
      <Image
        className="lg:ml-10 xl:ml-5"
        src="/images/whatsapp.png"
        alt="call-image"
        width={50}
        height={50}
      />
    </div>
  );
}
