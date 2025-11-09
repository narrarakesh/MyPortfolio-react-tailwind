import React from 'react'
import { GrDownload } from "react-icons/gr";
import resume from '../assets/NarraRakeshResume.pdf'

const About = () => {

  return (
    <section id="about" className="min-h-screen py-26 px-4 bg-[#1a0b2e]">
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
                I bridge the gap between 
                technical implementation and creative vision. I'm constantly learning new technologies and 
                best practices to deliver cutting-edge solutions for my clients and projects.
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