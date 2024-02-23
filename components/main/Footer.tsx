import React from "react";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";



const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-[15px]">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px]">
                        <RxGithubLogo />
                        <a href="https://github.com/fabioes99"  >
                            <span className="cursor-pointer link text-[15px] ml-[6px] ">Github</span>    
                        </a>
                    </p>
                    <p className="flex flex-row items-center my-[15px] ">
                        <RxLinkedinLogo />
                        <a href="https://www.linkedin.com/in/fabio-esferra-simoes-9a816a14a"  >
                            <span className="text-[15px] ml-[6px] cursor-pointer link">Linkedin</span>    
                        </a>
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] ">
                     
                        <span className="text-[15px] ml-[6px]">Hire me!</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] ">
                  
                        <span className="text-[15px] ml-[6px]">fabioes.99@outlook.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Fabio Simoes 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer