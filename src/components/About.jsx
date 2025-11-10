import React from 'react'
import { GrDownload } from "react-icons/gr";
import resume from '../assets/NarraRakeshResume.pdf'

const About = () => {

  return (
    <section id="about" className="min-h-screen  flex flex-col justify-center px-4 bg-[#120d20]">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-center text-2xl md:text-4xl mb-12 text-[#a78bfa]">About Me</h1>
            
            <div className=" flex flex-col items-center text-center space-y-6">
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                I'm a passionate Frontend Developer with over 3 years of experience 
                building beautiful, responsive web applications. I specialize in modern JavaScript frameworks 
                like React, and I'm dedicated to creating intuitive user experiences that combine 
                aesthetic appeal with functionality.
              </p>
              
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                I combine creative thinking with technical skills to build clean, user-friendly websites and applications. I’m always learning new technologies to improve my work and deliver better results
              </p>


              <a
                href={resume}
                download="NarraRakesh_Resume.pdf"
                className="flex items-center gap-1 bg-transparent border-2 border-[#8b5cf6] text-[#a78bfa] hover:bg-[#8b5cf6] hover:text-white px-6 py-3 rounded-lg shadow-lg shadow-[#8b5cf6]/30 hover:shadow-[#8b5cf6]/50 transition-all duration-300 cursor-pointer"
                
              >
                <GrDownload className="text-xl" />
                <span>Download Resume</span>
              </a>
            </div>
        </div>
      </section>
  )
}

export default About