import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import UseTheme from "../../../hooks/UseTheme";
import { BiLogIn } from "react-icons/bi";

const HoverDropdown = ({ children }) => {
  console.log(children.props.children);
  const tab = children.props.children;
  return (
    <div className="flex  justify-center  px-3 py-12 ">
      <FlyoutLink
        href="#"
        FlyoutContent={
          tab === "Home"
            ? HomeContent
            : tab === "Pages"
            ? PageContent
            : tab === "Team"
            ? TeamContent
            : tab === "Services"
            ? ServicesContent
            : tab === "Blog"
            ? BlogContent
            : ""
        }
      >
        {children}
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const { theme } = UseTheme();
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit "
    >
      <a href={href} className="relative ">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`  ${theme === "dark" ? "text-black" : "text-white"} ${
              children.props.children === "Pages"
                ? "absolute top-12 left-1/2 w-screen -translate-x-1/2 "
                : "absolute top-12 left-0"
            } `}
          >
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Home Dropdown
const HomeContent = () => {
  const { theme } = UseTheme();
  return (
    <div
      className={`w-4xl ${
        theme === "dark" ? "bg-white" : "bg-black "
      } p-6 shadow-xl flex justify-center items-center`}
    >
      <div className="w-1/2">
        {" "}
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">Agency</h3>
          <ul className="space-y-4 *:ml-2">
            <OnHoverTextScaleUp>Digital Marketing</OnHoverTextScaleUp>
            <OnHoverTextScaleUp>Digital Studio</OnHoverTextScaleUp>
            <OnHoverTextScaleUp>Digital Agency</OnHoverTextScaleUp>
            <OnHoverTextScaleUp>Creative Agency</OnHoverTextScaleUp>
            <OnHoverTextScaleUp>Startup Agency</OnHoverTextScaleUp>
            <OnHoverTextScaleUp>Modern Agency</OnHoverTextScaleUp>
            <OnHoverTextScaleUp>Personal Portfolio</OnHoverTextScaleUp>
          </ul>
        </div>
      </div>
      <div className="w-1/2">
        {" "}
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">Agency Dark</h3>
          <ul className="space-y-4 *:ml-2">
            <OnHoverTextScaleUp>Digital Marketing</OnHoverTextScaleUp>
            <OnHoverTextScaleUp>Digital Studio</OnHoverTextScaleUp>
            <OnHoverTextScaleUp>Digital Agency</OnHoverTextScaleUp>
            <OnHoverTextScaleUp>Creative Agency</OnHoverTextScaleUp>
            <OnHoverTextScaleUp>Startup Agency</OnHoverTextScaleUp>
            <OnHoverTextScaleUp>Modern Agency</OnHoverTextScaleUp>
            <OnHoverTextScaleUp>Personal Portfolio</OnHoverTextScaleUp>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Pages Dropdown
const PageContent = () => {
  const { theme } = UseTheme();
  return (
    <div
      className={`w-full max-w-6xl mx-auto ${
        theme === "dark" ? "bg-white" : "bg-black "
      } p-6 shadow-xl grid grid-cols-5`}
    >
      {/* div - 1 */}
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Service</h3>
        <ul className="space-y-4 *:ml-2">
          <OnHoverTextScaleUp>Service</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Service Dark</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Service V2</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Service V2 Dark</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Service V3</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Service V3 Dark</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Service V4</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Service V4 Dark</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Service V5</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Service V5 Dark</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Service V6</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Service V6 Dark</OnHoverTextScaleUp>
        </ul>
      </div>
      {/* div - 2 */}
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Portfolio</h3>
        <ul className="space-y-4 *:ml-2">
          <OnHoverTextScaleUp>Portfolio</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Portfolio Dark</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Portfolio V2</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Portfolio V2 Dark</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Portfolio V3</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Portfolio V3 Dark</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Portfolio V4</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Portfolio V4 Dark</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Portfolio V5</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Portfolio V5 Dark</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Portfolio Details</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Portfolio Details Dark</OnHoverTextScaleUp>
        </ul>
      </div>
      {/* div - 3 */}
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Team</h3>
        <ul className="space-y-4 *:ml-2">
          <OnHoverTextScaleUp>Team</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Team Dark</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Team Details</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Team Details Dark</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Team Career</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Team Career Dark</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Job Details</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Job Details Dark</OnHoverTextScaleUp>
        </ul>
      </div>
      {/* div - 4 */}
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Blog</h3>
        <ul className="space-y-4 *:ml-2">
          <OnHoverTextScaleUp>Blog</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Blog Dark</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Blog V2</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Blog V2 Dark</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Blog Category</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Category Dark</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Blog Details</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Blog Details Dark</OnHoverTextScaleUp>
        </ul>
      </div>
      {/* div - 5 */}
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">About</h3>
        <ul className="space-y-4 *:ml-2">
          <OnHoverTextScaleUp>About</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>About Dark</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>FAQs</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>FAQs Dark</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Contact</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>404</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>404 Dark</OnHoverTextScaleUp>
        </ul>
      </div>
    </div>
  );
};
// Team Dropdown
const TeamContent = () => {
  const { theme } = UseTheme();
  return (
    <div
      className={`w-64 ${
        theme === "dark" ? "bg-white" : "bg-black "
      } p-6 shadow-xl`}
    >
      <div className="mb-3 space-y-3">
        <ul className="space-y-4 *:ml-2">
          <OnHoverTextScaleUp>Team</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Team Details</OnHoverTextScaleUp>
        </ul>
      </div>
    </div>
  );
};
// Services Dropdown
const ServicesContent = () => {
  const { theme } = UseTheme();
  return (
    <div
      className={`w-64 ${
        theme === "dark" ? "bg-white" : "bg-black "
      } p-6 shadow-xl`}
    >
      <div className="mb-3 space-y-3">
        <ul className="space-y-4 *:ml-2">
          <OnHoverTextScaleUp>Service</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Service 2</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Service 3</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Service 4</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Service 5</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Service 6</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Service Details</OnHoverTextScaleUp>
        </ul>
      </div>
    </div>
  );
};
// Blog Dropdown
const BlogContent = () => {
  const { theme } = UseTheme();
  return (
    <div
      className={`w-64 ${
        theme === "dark" ? "bg-white" : "bg-black "
      } p-6 shadow-xl`}
    >
      <div className="mb-3 space-y-3">
        <ul className="space-y-4 *:ml-2">
          <OnHoverTextScaleUp>Blog</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Blog V2</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Category</OnHoverTextScaleUp>
          <OnHoverTextScaleUp>Blog Details</OnHoverTextScaleUp>
        </ul>
      </div>
    </div>
  );
};

// On hover text scale up li
const OnHoverTextScaleUp = ({ children }) => {
  return (
    <>
      <motion.li
        initial={{ scaleX: 1 }}
        whileHover={{ scaleX: 1.1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className=" origin-left text-md"
      >
        {children}
      </motion.li>
    </>
  );
};

export default HoverDropdown;
