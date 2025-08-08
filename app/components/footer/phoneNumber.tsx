"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function PhoneNumber() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  }, []);

  const phoneNumber = "+91 9585558007";

  const handleClick = () => {
    navigator.clipboard.writeText(phoneNumber);
    toast.success("Phone number copied!");
  };

  return isMobile ? (
    <a
      href={`tel:${phoneNumber}`}
      className="text-[17px] cursor-pointer hover:text-[#EE3131] hover:underline"
    >
      {phoneNumber}
    </a>
  ) : (
    <p
      onClick={handleClick}
      className="cursor-pointer text-[17px] hover:text-[#EE3131] hover:underline"
    >
      {phoneNumber}
    </p>
  );
}
