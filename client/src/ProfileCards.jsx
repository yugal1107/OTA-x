import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";


function Cards({ data, reference }) {
  return (
    <>
      <div className="flex items-center justify-evenly h-[18rem] w-[15rem] shadow-2xl shadow-zinc-400 flex-col rounded-2xl ">
        <img className="h-32 w-32 rounded-full border-2 border-blue-700" src={data.img} alt="" />
        <p className="font-bold text-lg"> {data.name} </p>

        <div className="flex items-start justify-center gap-7">
          <span className="flex items-center justify-start">
             <a href={data.linkedin} target="_blank"><FaLinkedin className="w-10 h-10 text-blue-500" /></a>{" "}
          </span>
          <span className="flex items-center justify-start">
          <a href={data.github} target="_blank"><IoLogoGithub className="w-10 h-10" /></a>{" "}
          </span>
        </div>
      </div>
    </>
  );
}

export default Cards;
