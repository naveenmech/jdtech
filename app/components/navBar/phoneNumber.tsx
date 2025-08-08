"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function PhoneNumber() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  }, []);

  const phoneNumber = "+919585558007";

  const handleClick = () => {
    navigator.clipboard.writeText(phoneNumber);
    toast.success("Phone number copied!");
  };

  return isMobile ? (
    <a
      href={`tel:${phoneNumber}`}
      className="lg:text-[12px] xl:text-sm hover:text-blue-500 hover:underline"
    >
      {phoneNumber}
    </a>
  ) : (
    <p
      onClick={handleClick}
      className="cursor-pointer lg:text-[12px] xl:text-sm hover:text-blue-500 hover:underline"
    >
      {phoneNumber}
    </p>
  );
}
