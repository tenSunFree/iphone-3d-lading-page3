import { searchPng, tsmcPng } from "../utils";
import { navLists } from "../constants/index";
import React, { useEffect, useRef } from "react";

interface NavbarProps {
  index: number;
  showHero: boolean;
  onMouseEnter: (index: number) => void;
  onMouseLeave: (index: number) => void;
  setNavbarHeight: (height: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  index,
  showHero,
  onMouseEnter,
  onMouseLeave,
  setNavbarHeight,
}) => {
  const navbarRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight((navbarRef.current as HTMLDivElement).offsetHeight);
    }
  }, [setNavbarHeight]);

  console.log("Navbar, showHero: ", showHero);
  console.log("Navbar, index: ", index);
  {
    /* 螢光綠 */
  }
  return (
    <div ref={navbarRef} className="w-full h-[80px] bg-[#9AFF0250]">
      <header
        id="navbar"
        className={`w-full h-full flex justify-between items-center z-50 bg-[#8600FF50] backdrop-blur-xl relative`}
      >
        <nav className="w-full justify-center bg-[#FF580950] h-full">
          <div className="flex flex-1 bg-[#FFFFFFFF] justify-center items-center h-full">
            <img
              className="ml-16 bg-[#FFFFFFFF]"
              src={tsmcPng}
              alt="tsmc"
              width={101 * 0.65}
              height={79 * 0.65}
            />
            <div className="flex-1 flex gap-0 justify-center bg-[#FFFFFFFF] h-full">
              {navLists.map((nav, i) => (
                <div
                  className="relative text-sm cursor-pointer text-[#666666FF]  hover:text-[#666666FF] transition-all bg-[#00EC0000] flex items-center justify-center px-3"
                  onMouseEnter={() => onMouseEnter(i)}
                  onMouseLeave={() => onMouseLeave(i)}
                  key={i}
                >
                  {nav}
                  <div
                    className={`absolute bottom-0 left-4 right-4 h-[5px] bg-red-500 ${
                      i !== index ? "hidden" : ""
                    }`}
                  ></div>
                </div>
              ))}
            </div>
            <img
              className="mr-16 bg-[#FF580950]"
              src={searchPng}
              alt="search"
              width={382 * 0.65}
              height={69 * 0.65}
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
