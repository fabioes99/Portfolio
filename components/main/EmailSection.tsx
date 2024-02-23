"use client";
import React, { useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Socials from "../sub/Socials";


interface FormData {
  email: string;
  subject: string;
  message: string;
}

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormData = {
      email: e.currentTarget.email.value,
      subject: e.currentTarget.subject.value,
      message: e.currentTarget.message.value,
    };
    
    const JSONdata = JSON.stringify(formData);
    const endpoint = "/api/route";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
    
  };

  return (
    <section
      id="contact"
      className="z-50 grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative px-16"
    >
      <div className="z-10">
        <p className="text-[42px] font-bold my-2 text-transparent  bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text">
          Let&apos;s Connect
        </p>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <Socials />
      </div>
      <div>
        {emailSubmitted ? (
          <div className="Welcome-box px-[15px] py-[4px] z-50 border my-[20px] border-[#7042f88b] opacity-[0.9]">
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
           <h1 className=" text-[20px] text-green-600">Email send Sucessfuly!</h1>
         </div>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-purple-400 block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="text-purple-400 bg-clip-text placeholder-purple-400 border border-[#7042f88b] text-sm rounded-lg block w-full p-2.5"
                placeholder="jondoe@google.com"
              />
               
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-purple-400 block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="text-purple-400  placeholder-purple-400 border border-[#7042f88b] text-sm rounded-lg block w-full p-2.5 bg-clip-text"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-purple-400 block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="text-purple-400  bg-clip-text placeholder-purple-400 border border-[#7042f88b] text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="py-2 w-32 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
              >
                Send Message
              </button>
            </div>
            
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
