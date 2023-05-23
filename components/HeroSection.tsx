import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
const HeroSection = () => {
    return (
        <section id= "home">
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
             <div className="md:mt-2 md:w-1/2">
                <Image/>
                </div>
                <div>

                </div>
            </div>
            </section>
    )
}

export default HeroSection