"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            className="rounded-full shadow-2x1"
            src="/headshotpic.jpg"
            alt="profile photo"
            width={300}
            height={300}
          />
        </div>

        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hey, I&#39;m Ryan!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Full-stack developer{" "}
            </span>
            based in Maryland.
          </p>
          <div className="flex flex-row justify-evenly md:justify-around">
            <a
              href="/Ryan-Hatamosa-Resume-2023.docx.pdf"
              download="RyanHatamosa_CV"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 margin-left: 4px;"
            >
              Download my Resume
            </a>
            <a
              href="mailto:ryan.hatamosa@gmail.com"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 margin-left: 4px;"
            >
              Send me an Email
            </a>
            <div />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
