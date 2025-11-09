import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import profilePhoto from '../assets/profilePhoto.jpg'
const Home = () => {


  const handleClick = ()=>{
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section
        id="home"
        className="min-h-screen py-26 bg-[#1a0b2e] flex items-center justify-center relative overflow-hidden"
        // style={{
        //     background: 'linear-gradient(to bottom, #1a0b2e 0%, #0a0118 100%)',
        // }}
        >
        {/* Animated Background Elements (static blur circles now)
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
            <div className="absolute w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div> */}

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            {/* Avatar */}
            <div className="mb-8 transition-transform duration-500 transform hover:scale-105">
            <div className="w-50 h-50 mx-auto border-4 border-[#b9a1f0] rounded-full shadow-lg shadow-[#8b5cf6]/50 overflow-hidden">
                <img
                src={profilePhoto}
                alt="Narra Rakesh"
                className="w-full h-full object-cover"
                />
            </div>
            </div>

            <div className="mb-8 flex justify-center items-baseline gap-2">
                <p className="text-xl md:text-2xl text-gray-300">
                    Hi, I'm
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
                    Rakesh <span className="text-purple-600">Narra</span>
                </h1>
            </div>

            

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
            <span className='text-2xl md:text-3xl font-semibold'>Frontend Web Developer</span> with over 3 years of experience building engaging and responsive web experiences.
            </p>

            {/* Button */}
            <div>
            <button
                
                className="bg-[#8b5cf6] hover:bg-[#8b5cf6]/80 text-white px-4 py-2 md:py-4 rounded-full shadow-lg shadow-[#8b5cf6]/50 hover:shadow-[#8b5cf6]/70 transition-all duration-300 hover:scale-105 flex items-center justify-center mx-auto cursor-pointer"
                onClick={()=> handleClick()}
            >
                View My Work <FaArrowRight className='ml-2 text-xl text-stone-100'/>
            </button>
            </div>
        </div>
        </section>

  )
}

export default Home