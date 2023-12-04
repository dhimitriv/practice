import React from "react";
import Typed from "react-typed";
function Head() {
  return (
    <div className="text-white bg-[#0000003f] ">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="font-bold p-2 text-blue-900">
          FIXING ALL KIND OF COMPUTERS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#f3f3f3]">
          Fix it and make fun!
        </h1>
        <div className="flex justify-center items-center gap-1">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-5">
            Fast, flexible for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Repairing", "Hosting", "Selling"]}
            typeSpeed={150}
            backSpeed={150}
            loop
          ></Typed>
        </div>
        <p className="md:text-2xl text-xl font-bold text-blue-900">
          Trust us for anything about computer!
        </p>
        <button className="bg-blue-900 w-[150px] text-white rounded-md my-6 font-medium mx-auto py-3 ">
          Start now!
        </button>
      </div>
    </div>
  );
}

export default Head;
