"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

type TabContent =
  | "Home"
  | "About"
  | "ProductIT"
  | "ProductOT"
  | "SolutionIT"
  | "SolutionOT"
  | "Contact";

// Create a context-like shared state
const sharedTabState = {
  activeTab: "Home" as TabContent,
  setActiveTab: (tab: TabContent) => {},
};

export function NavContent() {
  const [activeTab, setActiveTab] = useState<TabContent>(
    sharedTabState.activeTab
  );
  const [hasMounted, setHasMounted] = useState(false);

  // Sync with shared state
  useEffect(() => {
    sharedTabState.activeTab = activeTab;
    sharedTabState.setActiveTab = setActiveTab;
  }, [activeTab]);

  useEffect(() => {
    setHasMounted(true);
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) {
      setActiveTab(savedTab as TabContent);
    }
  }, []);

  useEffect(() => {
    if (hasMounted) {
      localStorage.setItem("activeTab", activeTab);
    }
  }, [activeTab, hasMounted]);

  if (!hasMounted) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {activeTab === "Home" && <div>Home Content</div>}
      {activeTab === "About" && <div>About Us Content</div>}
      {activeTab === "ProductIT" && <div>IT Products Content</div>}
      {activeTab === "ProductOT" && <div>OT Products Content</div>}
      {activeTab === "SolutionIT" && <div>IT Solution Content</div>}
      {activeTab === "SolutionOT" && <div>OT Solution Content</div>}
      {activeTab === "Contact" && <div>Contact Content</div>}
    </div>
  );
}

export default function NavItems() {
  const [activeTab, setActiveTab] = useState<TabContent>(
    sharedTabState.activeTab
  );
  const [hasMounted, setHasMounted] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [clickedMenu, setClickedMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Sync with shared state
  useEffect(() => {
    sharedTabState.activeTab = activeTab;
    sharedTabState.setActiveTab = setActiveTab;
  }, [activeTab]);

  // Initialize from localStorage
  useEffect(() => {
    setHasMounted(true);
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) {
      setActiveTab(savedTab as TabContent);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (hasMounted) {
      localStorage.setItem("activeTab", activeTab);
    }
  }, [activeTab, hasMounted]);

  const navItems = [
    { name: "Home", tab: "Home" },
    { name: "About Us", tab: "About" },
    {
      name: "Products",
      icons: <BsFillCaretDownFill className="text-white" />,
      children: [
        { name: "IT PRODUCTS", tab: "ProductIT" },
        { name: "OT PRODUCTS", tab: "ProductOT" },
      ],
    },
    {
      name: "Solution and Services",
      icons: <BsFillCaretDownFill className="text-white" />,
      children: [
        { name: "IT SOLUTION", tab: "SolutionIT" },
        { name: "OT SOLUTION", tab: "SolutionOT" },
      ],
    },
    { name: "Contact", tab: "Contact" },
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

  const isTabActive = (tabName: string) => {
    if (!hasMounted) return false;
    const tabMap: Record<string, TabContent> = {
      Home: "Home",
      "About Us": "About",
      Contact: "Contact",
      "IT PRODUCTS": "ProductIT",
      "OT PRODUCTS": "ProductOT",
      "IT SOLUTION": "SolutionIT",
      "OT SOLUTION": "SolutionOT",
    };
    return activeTab === tabMap[tabName];
  };

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
                  onMouseEnter={() => !clickedMenu && setOpenMenu(item.name)}
                  onMouseLeave={() => !clickedMenu && setOpenMenu(null)}
                >
                  <button
                    onClick={() => {
                      const isSame = clickedMenu === item.name;
                      setClickedMenu(isSame ? null : item.name);
                      setOpenMenu(isSame ? null : item.name);
                    }}
                    className={`
                      text-center text-white relative font-medium py-4
                      after:absolute after:bottom-0 after:left-1/2
                      after:-translate-x-1/2 after:h-[4px] after:w-0
                      after:bg-white after:transition-all after:duration-300
                      after:origin-center group-hover:after:w-full
                      ${openMenu === item.name ? "after:w-full" : ""}
                      ${
                        hasMounted &&
                        item.children.some((child) => isTabActive(child.name))
                          ? "after:w-full"
                          : ""
                      }
                    `}
                  >
                    <div className="flex items-center justify-center text-center gap-2">
                      {item.name}
                      <Image
                        className={`mt-1 transition-transform duration-300 ${
                          openMenu === item.name ? "rotate-180" : ""
                        }`}
                        src="/images/arrow.png"
                        alt="dropdown-arrow"
                        width={12}
                        height={12}
                      />
                    </div>
                  </button>

                  {openMenu === item.name && (
                    <div
                      className={`
                        absolute z-50 w-52 rounded-md shadow-lg bg-white
                        dark:bg-gray-800 ring-opacity-5 transition-all
                        duration-500 ease-in-out transform
                        ${
                          openMenu === item.name
                            ? "opacity-100 scale-100 visible"
                            : "opacity-0 scale-95 invisible pointer-events-none"
                        }
                      `}
                    >
                      <div className="py-1">
                        {item.children.map((child) => (
                          <button
                            key={child.name}
                            onClick={() => {
                              const newTab = child.tab as TabContent;
                              setActiveTab(newTab);
                              sharedTabState.setActiveTab(newTab);
                              setOpenMenu(null);
                              setClickedMenu(null);
                            }}
                            className={`
                              block w-full text-left px-4 py-2 text-sm
                              text-gray-700 dark:text-white hover:bg-[#EE3131]
                              dark:hover:bg-gray-700 transition-all
                              duration-500 ease-in-out
                              ${
                                isTabActive(child.name)
                                  ? "bg-[#EE3131] dark:bg-gray-700"
                                  : ""
                              }
                            `}
                          >
                            {child.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.name}
                  onClick={() => {
                    const newTab = item.tab as TabContent;
                    setActiveTab(newTab);
                    sharedTabState.setActiveTab(newTab);
                  }}
                  className={`
                    text-white relative font-medium py-4
                    after:absolute after:bottom-0 after:left-1/2
                    after:-translate-x-1/2 after:h-[4px] after:w-0
                    after:bg-white after:transition-all after:duration-300
                    after:origin-center hover:after:w-full
                    ${isTabActive(item.name) ? "after:w-full" : ""}
                  `}
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
