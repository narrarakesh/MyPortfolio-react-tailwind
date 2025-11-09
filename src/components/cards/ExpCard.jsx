import React from 'react'
import { GoBriefcase } from "react-icons/go";

const ExpCard = ({job}) => {
  return (
    <>
        <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-[#8b5cf6] border-4 border-[#0a0118]"></div>
                    
        <div className="p-6 bg-[#311b4e]/50 border border-[#8b5cf6]/20 rounded-lg hover:border-[#8b5cf6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#8b5cf6]/20">
            <div className="flex items-start gap-4 mb-4">
            <div className="p-2 rounded-lg bg-[#8b5cf6]/10">
                <GoBriefcase className="text-[#a78bfa]" size={24} />
            </div>
            <div className="flex-1">
                <h4 className="text-white">{job.position}</h4>
                <p className="text-[#a78bfa]">{job.company}</p>
                <p className="text-sm text-gray-400">{job.duration}</p>
            </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
            {job.description}
            </p>
        </div>
    </>
  )
}

export default ExpCard