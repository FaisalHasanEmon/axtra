import React from "react";

const Banner = () => {
  return (
    <div className="h-screen ">
      <div>
        <div className="px-8 md:px-28 space-y-1">
          <p className="text-xl md:text-2xl font-bold md:absolute md:top-[150px]">
            DIGITAL
          </p>
          <h1 className="text-[100px] md:text-[250px] font-bold ">MARK</h1>
        </div>
        <div className="px-8 md:px-28 space-y-0 flex justify-between items-center">
          <p className="  text-gray-500">
            Static and dynamic secure code review <br /> can prevent a day
            before your product <br /> is even release. We can integrate with{" "}
            <br />
            your dev environment
          </p>
          <div className="text-[100px] md:text-[250px] font-bold ">ETING</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
