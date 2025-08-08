import React from "react";
import { FaPhoneAlt, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import PhoneNumber from "./phoneNumber";
import EmailLink from "./email";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Dosis } from "next/font/google";

const dosis = Dosis({
  subsets: ["latin"],
  display: "swap",
});
const Footer = () => {
  return (
    <>
      <footer className="bg-[#06163A] text-white pt-24 text-sm w-full">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 pb-4 gap-10">
          {/* Products */}
          <div>
            <h3 className={`text-white tracking-tight ${dosis.className}`}>
              <span className="text-[26px] font-medium">Our</span>
              <span className="text-[26px] font-bold hover:text-black ml-2">
                Products
              </span>
            </h3>
            {/* dotted lines */}
            <div className="flex items-center gap-1 my-5">
              {/* Three red dots */}
              <div className="w-1 h-1 bg-red-700 rounded-full"></div>
              <div className="w-1 h-1 bg-red-700 rounded-full"></div>
              <div className="w-1 h-1 bg-red-700 rounded-full"></div>

              {/* Red horizontal line */}
              <div className="flex-1 h-1 max-w-[7rem] bg-red-700 rounded-2xl"></div>
            </div>
            <ul className="space-y-2 text-gray-300 text-[17px] font-sans">
              <li className="cursor-pointer hover:text-[#EE3131]">
                Desktop / Laptop / Tablet
              </li>
              <li className="cursor-pointer hover:text-[#EE3131]">
                Server / Storage / Workstation
              </li>
              <li className="cursor-pointer hover:text-[#EE3131]">
                Networking Switch, Cables, Convertors
              </li>
              <li className="cursor-pointer hover:text-[#EE3131]">
                Business solution like Antivirus, Firewall
              </li>
              <li className="cursor-pointer hover:text-[#EE3131]">
                Microsoft suite products
              </li>
              <li className="cursor-pointer hover:text-[#EE3131]">
                SCADA / PLC / HMI / VFD
              </li>
              <li className="cursor-pointer hover:text-[#EE3131]">
                IIOT / MES
              </li>
              <li className="cursor-pointer hover:text-[#EE3131]">
                Sensor / Relay / Scanner
              </li>
            </ul>
          </div>

          {/* Solutions & Services */}
          <div>
            <h3 className={`text-white tracking-tight ${dosis.className}`}>
              <span className="text-[26px] font-medium">Our</span>
              <span className="text-[26px] font-bold hover:text-black ml-2">
                Solutions & Services
              </span>
            </h3>
            {/* dotted lines */}
            <div className="flex items-center gap-1 my-5">
              {/* Three red dots */}
              <div className="w-1 h-1 bg-red-700 rounded-full"></div>
              <div className="w-1 h-1 bg-red-700 rounded-full"></div>
              <div className="w-1 h-1 bg-red-700 rounded-full"></div>

              {/* Red horizontal line */}
              <div className="flex-1 h-1 max-w-[14.3rem] bg-red-700 rounded-2xl"></div>
            </div>
            <ul className="space-y-2 text-gray-300 text-[17px] font-sans">
              <li className="cursor-pointer hover:text-[#EE3131]">
                Industrial Automation
              </li>
              <li className="cursor-pointer hover:text-[#EE3131]">
                IIoT & Industry 4.0
              </li>
              <li className="cursor-pointer hover:text-[#EE3131]">
                Traceability Solutions
              </li>
              <li className="cursor-pointer hover:text-[#EE3131]">
                Enterprise Solution
              </li>
              <li className="cursor-pointer hover:text-[#EE3131]">
                IT Managed Services
              </li>
              <li className="cursor-pointer hover:text-[#EE3131]">
                Cyber Security Solutions
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className={`text-white tracking-tight ${dosis.className}`}>
              <span className="text-[26px] font-medium">Contact</span>
              <span className="text-[26px] font-bold hover:text-black ml-2">
                Us
              </span>
            </h3>
            {/* dotted lines */}
            <div className="flex items-center gap-1 my-5">
              {/* Three red dots */}
              <div className="w-1 h-1 bg-red-700 rounded-full"></div>
              <div className="w-1 h-1 bg-red-700 rounded-full"></div>
              <div className="w-1 h-1 bg-red-700 rounded-full"></div>

              {/* Red horizontal line */}
              <div className="flex-1 h-1 max-w-[5.5rem] bg-red-700 rounded-2xl"></div>
            </div>
            <ul className="space-y-4 text-gray-300 text-[17px] font-sans">
              <li className="flex items-start gap-2">
                <FaPhoneAlt className="text-red-600 mt-1" />
                <span>
                  <PhoneNumber />
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdEmail className="text-red-600 mt-1" />
                <EmailLink />
              </li>
              <li className="flex items-start gap-2">
                <MdLocationOn className="text-red-600 mt-1" />
                <a
                  href="https://www.google.com/maps/dir//JD+TECH+Mahadevan+St+State+Bank+Staff+Colony,+Chromepet+Chennai,+Tamil+Nadu+600044/@12.9454196,80.1427087,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a525f017cfabfa5:0xfde0ce3578cb5ac9!2m2!1d80.1427087!2d12.9454196?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-[#EE3131]"
                >
                  <span>
                    No:5, Madhaveam Street, Nehru Nagar, Chromepet,
                    <br />
                    Chennai-600044, TamilNadu, India.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#2F3967]">
          <div className="border-t border-gray-700 mt-8 py-7 w-full px-4 text-center text-gray-400 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
            <p>© Copyright 2023 - {new Date().getFullYear()} by JD TECH</p>

            <div className="flex space-x-4 mt-3 md:mt-0">
              <a href="#" className="text-red-600 hover:text-white">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-red-600 hover:text-white">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
