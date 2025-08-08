"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

export default function NavItems() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [clickedMenu, setClickedMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  console.log("openMenu", typeof openMenu);
  console.log("clickedMenu", typeof clickedMenu);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Products",
      icons: <BsFillCaretDownFill />,
      children: [
        { name: "IT PRODUCTS", href: "/product/it" },
        { name: "OT PRODUCTS", href: "/product/ot" },
      ],
    },
    {
      name: "Solution and Services",
      icons: <BsFillCaretDownFill />,
      children: [
        { name: "IT SOLUTION", href: "/solution/it" },
        { name: "OT SOLUTION", href: "/solution/ot" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
        setClickedMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto lg:ml-[8rem] xl:ml-[14rem]">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center" ref={menuRef}>
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => {
                    if (!clickedMenu) setOpenMenu(item.name);
                  }}
                  onMouseLeave={() => {
                    if (!clickedMenu) setOpenMenu(null);
                  }}
                >
                  <button
                    onClick={() => {
                      const isSame = clickedMenu === item.name;
                      setClickedMenu(isSame ? null : item.name);
                      setOpenMenu(isSame ? null : item.name);
                    }}
                    className={`
                      text-center
                      text-white
                      relative font-medium py-4
                      after:absolute
                      after:bottom-0
                      after:left-1/2
                      after:-translate-x-1/2
                      after:h-[4px]
                      after:w-0
                      after:bg-white
                      after:transition-all
                      after:duration-300
                      after:origin-center
                      group-hover:after:w-full
                      ${openMenu === item.name ? "after:w-full" : ""}
                    `}
                  >
                    <div className="flex items-center justify-center text-center gap-2">
                      {item.name}
                      <Image
                        className={`mt-1 transition-transform duration-300 ${
                          openMenu === "Products" ||
                          openMenu === "Solution and Services"
                            ? "rotate-180"
                            : ""
                        } ${
                          openMenu === "Solution and Services"
                            ? "rotate-180 transition-transform duration-300"
                            : ""
                        } `}
                        src="/images/arrow.png"
                        alt="call-image"
                        width={12}
                        height={12}
                      />
                    </div>
                  </button>

                  {openMenu === item.name && (
                    <div
                      className={`
    absolute z-50 w-52 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-opacity-5
    transition-all duration-500 ease-in-out transform
    ${
      openMenu === item.name
        ? "opacity-100 scale-100 visible"
        : "opacity-0 scale-95 invisible pointer-events-none"
    }
  `}
                    >
                      <div className="py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-[#EE3131] dark:hover:bg-gray-700 transition-all duration-500 ease-in-out"
                            onClick={() => {
                              setOpenMenu(null);
                              setClickedMenu(null);
                            }}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    text-white
                    relative font-medium py-4
                    after:absolute
                    after:bottom-0
                    after:left-1/2
                    after:-translate-x-1/2
                    after:h-[4px]
                    after:w-0
                    after:bg-white
                    after:transition-all
                    after:duration-300
                    after:origin-center
                    hover:after:w-full
                    ${pathname === item.href ? "after:w-full" : ""}
                  `}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
