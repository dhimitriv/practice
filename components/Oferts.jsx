import React from "react";
import { PiUsersThreeFill } from "react-icons/pi";

import { MdLocalGroceryStore } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { GrCloudSoftware } from "react-icons/gr";

function Oferts() {
  return (
    <div className="w-full py-[10rem] px-4 bg-[url(/src/assets/charger.jpg)]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 text-white bg-[#000000bb]">
          <MdLocalGroceryStore className="text-black w-20 mx-auto mt-[-3rem] h-8 w-8" />
          <p className="text-center text-4xl font-bold">Latest products</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b border-slate-900 mx-8 mt-8">Phones</p>
            <p className="py-2 border-b border-slate-900 mx-8">Acesors</p>
            <p className="py-2 border-b border-slate-900 mx-8">Computers</p>
          </div>
          <button className="bg-blue-900 w-[150px] text-white rounded-md my-6 font-medium mx-auto py-3 ">
            Order now
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  text-white bg-[#000000bb]">
          <GiAutoRepair className="text-black w-20 mx-auto mt-[-3rem] h-8 w-8" />

          <p className="text-center text-4xl font-bold">Repairing devices</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b border-slate-900 mx-8 mt-8">
              Repair phone
            </p>
            <p className="py-2 border-b border-slate-900 mx-8">
              Repair computer
            </p>
            <p className="py-2 border-b border-slate-900 mx-8">
              Repair acesors
            </p>
          </div>
          <button className="bg-blue-900 w-[150px] text-white rounded-md my-6 font-medium mx-auto py-3 ">
            Contact now
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  text-white bg-[#000000bb]">
          <GrCloudSoftware className="text-black w-20 mx-auto mt-[-3rem] h-8 w-8" />

          <p className="text-center text-4xl font-bold">Software development</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b border-slate-900 mx-8 mt-8">Websites</p>
            <p className="py-2 border-b border-slate-900 mx-8">Hosting</p>
            <p className="py-2 border-b border-slate-900 mx-8">
              Cyber security
            </p>
          </div>
          <button className="bg-blue-900 w-[150px] text-white rounded-md my-6 font-medium mx-auto py-3 ">
            Contact now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Oferts;
