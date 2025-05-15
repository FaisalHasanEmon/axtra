import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import UseTheme from "../../hooks/UseTheme";

const Settings = () => {
  const { theme, toggleTheme } = UseTheme();
  const handleTheme = (newTheme) => {
    toggleTheme(newTheme);
  };
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className={`drawer-button fixed top-1/2 right-0 ${
              theme === "dark" ? "bg-white" : "bg-black"
            } p-3`}
          >
            <IoSettingsOutline
              size={26}
              color={`${theme === "dark" ? "black" : "white"}`}
              className="animate-spin [animation-duration:3s]"
            />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul
            className={`menu ${
              theme === "dark" ? "bg-white" : "bg-black"
            }  text-base-content min-h-48 fixed top-64 w-80  p-10 `}
          >
            {/* Sidebar content here */}
            <p
              className={`${
                theme === "dark" ? "text-black" : "text-white"
              } text-2xl text-bold mb-3`}
            >
              Mode
            </p>
            <div className="flex *:text-sm *:font-bold justify-center items-center gap-3">
              <button
                className={`${
                  theme === "dark"
                    ? "text-white bg-black"
                    : "text-black bg-white"
                } py-3 w-1/2`}
                disabled={theme === "light" ? true : false}
                onClick={() => handleTheme("dark")}
              >
                Light
              </button>
              <button
                className={`${
                  theme === "dark"
                    ? "text-white bg-black"
                    : "text-black bg-white"
                } py-3 w-1/2`}
                disabled={theme === "dark" ? true : false}
                onClick={() => handleTheme("light")}
              >
                Dark
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;
