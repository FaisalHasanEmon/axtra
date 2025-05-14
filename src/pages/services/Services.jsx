import React from "react";
import UseTheme from "../../hooks/UseTheme";

const Services = () => {
  const { theme, toggleTheme } = UseTheme();
  return (
    <div>
      <p className="">This is the services page</p>
      <button className="btn border-1" onClick={() => toggleTheme()}>
        Set Mode
      </button>
      <p className="font-kanit">current theme is {theme} </p>
    </div>
  );
};

export default Services;
