import Image from "next/image";
import NavItems from "./navItems";
import { NavContent } from "./navItems";
import PhoneNumber from "./phoneNumber";
import EmailLink from "./email";
import WhatsAppLink from "./whatsApp";
import Footer from "../footer/footerMain";

const NavBarMain = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header with logo and contact info */}
      <div className="flex">
        {/* left - logo */}
        <div className="w-[32%]">
          <div className="flex justify-center -ml-20">
            <Image
              alt="company-logo"
              width={180}
              height={180}
              src="/images/Logo_JDTech_red.png"
            />
          </div>
          <div className="flex">
            <div className="border-2 border-dotted border-[#EE3131] w-full h-0 mt-3"></div>
            <div className="-ml-7 -mt-6 w-0 h-0 border-b-[60px] border-b-[#EE3131] border-r-[0px] border-r-[#EE3131] border-l-[60px] border-l-transparent"></div>
          </div>
        </div>
        {/* right - contact info */}
        <div className="w-[68%] flex flex-col">
          <div className="flex mt-7">
            <div className="flex w-full gap-3">
              <div>
                <Image
                  src="/images/Call.png"
                  alt="call-image"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="font-semibold text-sm">Call Us</p>
                <PhoneNumber />
              </div>
            </div>
            <div className="flex w-full gap-3">
              <div>
                <Image
                  src="/images/Mail.png"
                  alt="call-image"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="font-semibold text-sm">Mail Us</p>
                <EmailLink />
              </div>
            </div>
            <div className="flex w-full gap-3">
              <div>
                <Image
                  src="/images/Calendar.png"
                  alt="call-image"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="font-semibold text-sm">We'are Open</p>
                <p className="truncate lg:text-[12px] xl:text-sm hover:text-blue-500 hover:underline">
                  Mon - Sat 09:30 - 18:30
                </p>
              </div>
            </div>
            <WhatsAppLink />
          </div>
          <div className="bg-[#EE3131] h-[60px] mt-3">
            <NavItems />
          </div>
        </div>
      </div>

      {/* Content area - outside the flex container to span full width */}
      <div className="w-full">
        <NavContent />
      </div>

      <Footer />
    </div>
  );
};

export default NavBarMain;
