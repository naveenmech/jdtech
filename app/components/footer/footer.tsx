import React from "react";
import { FaPhoneAlt, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0a1834] text-white pt-10 pb-6 text-sm w-full">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          {/* Products */}
          <div>
            <h3 className="text-white font-bold mb-4">Our Products</h3>
            <ul className="space-y-1 text-gray-300">
              <li>Desktop / Laptop / Tablet</li>
              <li>Server / Storage / Workstation</li>
              <li>Networking Switch, Cables, Convertors</li>
              <li>Business solution like Antivirus, Firewall</li>
              <li>Microsoft suite products</li>
              <li>SCADA / PLC / HMI / VFD</li>
              <li>IIOT / MES</li>
              <li>Sensor / Relay / Scanner</li>
            </ul>
          </div>

          {/* Solutions & Services */}
          <div>
            <h3 className="text-white font-bold mb-4">
              Our Solutions & Services
            </h3>
            <ul className="space-y-1 text-gray-300">
              <li>Industrial Automation</li>
              <li>IIoT & Industry 4.0</li>
              <li>Traceability Solutions</li>
              <li>Enterprise Solution</li>
              <li>IT Managed Services</li>
              <li>Cyber Security Solutions</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <FaPhoneAlt className="text-red-600 mt-1" />
                <span>+91 95855 58007</span>
              </li>
              <li className="flex items-start gap-2">
                <MdEmail className="text-red-600 mt-1" />
                <a
                  href="mailto:arun.v@jdtech.co.in?subject=Website%20Inquiry&body=Hi, I got your Email from website www.JDTech.co.in"
                  className="hover:underline"
                >
                  arun.v@jdtech.co.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MdLocationOn className="text-red-600 mt-1" />
                <span>
                  No:5, Madhaveam Street, Nehru Nagar, Chromepet,
                  <br />
                  Chennai-600044, TamilNadu, India.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-4 px-4 text-center text-gray-400 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          <p>© Copyright 2023 by JD TECH</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="text-red-600 hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-red-600 hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
