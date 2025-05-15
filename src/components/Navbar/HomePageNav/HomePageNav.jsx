import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross1, RxDividerVertical } from "react-icons/rx";
import UseTheme from "../../../hooks/UseTheme";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import HoverDropdown from "./HoverDropdown";

const HomePageNav = () => {
  const { theme } = UseTheme();
  const [showSearchButton, SetSearchButton] = useState(true);
  console.log(theme);

  const tabsForLargeScreen = (
    <>
      <li>
        <HoverDropdown>
          <FlipLink>Home</FlipLink>
        </HoverDropdown>
      </li>
      <li>
        <FlipLink>About</FlipLink>
      </li>
      <li>
        <HoverDropdown>
          <FlipLink>Pages</FlipLink>
        </HoverDropdown>
      </li>
      <li>
        <HoverDropdown>
          <FlipLink>Services</FlipLink>
        </HoverDropdown>
      </li>
      <li>
        <HoverDropdown>
          <FlipLink>Team</FlipLink>
        </HoverDropdown>
      </li>
      <li>
        <HoverDropdown>
          <FlipLink>Blog</FlipLink>
        </HoverDropdown>
      </li>
      <li>
        <FlipLink>Contact</FlipLink>
      </li>
    </>
  );

  return (
    <div className="w-full  mx-auto fixed z-50 px-10 backdrop-blur-2xl flex top-0  justify-between items-center ">
      {/* Logo Div */}
      <div className="flex justify-center items-center">
        {theme === "dark" ? (
          <img src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsite-logo-white-2.c8e48a63.png&w=256&q=75"></img>
        ) : (
          <img src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black.f3d0d1c4.png&w=384&q=75"></img>
        )}
      </div>
      {/* Tabs Div */}
      <div className="hidden lg:block">
        <ul className="flex justify-between items-center *:px-10 *:text-[16px] *:uppercase">
          {tabsForLargeScreen}
        </ul>
      </div>
      {/* Menu and search div */}
      <div className="flex justify-center item-center gap-8">
        <div onClick={() => SetSearchButton(!showSearchButton)}>
          <div className="dropdown dropdown-bottom dropdown-center translate-x-0.5 ">
            <div tabIndex={0} role="button">
              {showSearchButton ? (
                <IoSearchSharp size={24} />
              ) : (
                <RxCross1 size={24} />
              )}
            </div>
            <ul
              tabIndex={0}
              className="mt-5 mr-20 dropdown-content menu  bg-gray-100 rounded-box z-1 w-3xs p-3 shadow-sm"
            >
              <input
                type="text"
                className={`${
                  theme === "dark" ? "text-black" : ""
                } w-full h-10 bg-white pl-3`}
                placeholder="Search.."
              />
            </ul>
          </div>
        </div>
        <div>
          <RxDividerVertical size={24} className="text-gray-300" />
        </div>
        <div>
          <CgMenuRight size={24} />
        </div>
      </div>
    </div>
  );
};

// text animation
const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap uppercase cursor-default"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-110%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default HomePageNav;
