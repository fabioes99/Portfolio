"use client";
import Image from "next/image";
import React from "react";
import Socials from "../sub/Socials";
import CustomSelect from "../sub/Select";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[70] px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className=" hidden md:flex">
          <a
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center"
          >
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-spin"
            />

            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Fabio Simoes
            </span>
          </a>
        </div>
       

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="md:hidden">
            <CustomSelect />
          </div>
          
          <div className=" hidden md:flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about" className="cursor-pointer link">
              About me
            </a>
            <a href="#skills" className="cursor-pointer link">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer link">
              Projects
            </a>
          </div>
        </div>

       <Socials />
      </div>
    </div>
  );
};

export default Navbar;