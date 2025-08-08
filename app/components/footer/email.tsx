"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EmailLink() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  }, []);

  const email = "arun.v@jdtech.co.in";
  const subject = encodeURIComponent("Enquiry from Website");
  const body = encodeURIComponent(
    "Hi, I got your Email from website www.JDTech.co.in"
  );

  const handleDesktopClick = () => {
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    toast.success("Opening email app...");
  };

  const handleMobileClick = () => {
    window.location.href = `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`;
    toast.success("Opening Gmail...");
  };

  return (
    <p
      onClick={isMobile ? handleMobileClick : handleDesktopClick}
      className="cursor-pointer hover:text-[#EE3131] hover:underline text-[17px]"
    >
      {email}
    </p>
  );
}
