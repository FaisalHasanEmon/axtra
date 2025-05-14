import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
