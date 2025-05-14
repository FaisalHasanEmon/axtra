import React from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";
import UseTheme from "../../../hooks/UseTheme";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const HomePageNav = () => {
  const { theme, toggleTheme } = UseTheme();
  console.log(theme);
  const tabsForLargeScreen = (
    <>
      <li>
        <FlipLink>Home</FlipLink>
      </li>
      <li>
        <FlipLink>About</FlipLink>
      </li>
      <li>
        <FlipLink>Pages</FlipLink>
      </li>
      <li>
        <FlipLink>Services</FlipLink>
      </li>
      <li>
        <FlipLink>Team</FlipLink>
      </li>
      <li>
        <FlipLink>Blog</FlipLink>
      </li>
      <li>
        <FlipLink>Contact</FlipLink>
      </li>
    </>
  );

  return (
    <div className="w-full  mx-auto fixed z-50 px-10 pt-5 flex  justify-between items-center ">
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
        <div onClick={toggleTheme}>
          <IoSearchSharp size={24} />
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
