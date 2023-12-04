import React from "react";
import Tablet from "../assets/tablet.jpg";
function Body() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <div className="flex flex-col justify-center md:mx-3">
          <p className="text-[#0068df] font-bold py-2 ">REPAIRING</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Repair your Computer with us
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
            asperiores quo mollitia iusto officia natus, cupiditate quos labore
            suscipit necessitatibus dolor. Animi a, unde eveniet nemo inventore
            necessitatibus voluptas incidunt.
          </p>
          <button className="bg-blue-900 w-[150px] text-white rounded-md my-6 font-medium mx-auto py-3 ">
            Start now
          </button>
        </div>
        <img className="w-[500px] " src={Tablet} alt=".." />
      </div>
    </div>
  );
}

export default Body;
