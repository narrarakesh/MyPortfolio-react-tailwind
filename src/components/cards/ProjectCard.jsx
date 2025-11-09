import React from 'react'
import SkillChips from './SkillChips';
import { IoOpenOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
const ProjectCard = ({project}) => {
  return (
    <div className="mx-auto w-[80%] md:w-full bg-[#311b4e]/50 border border-[#8b5cf6]/20 rounded-2xl hover:border-[#8b5cf6]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#8b5cf6]/50 overflow-hidden hover:-translate-y-4">
        <div className="flex flex-col gap-6">
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          
          <div className="p-6">
            <h4 className="mb-2 text-white">{project.title}</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3 min-h-18">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-[#8b5cf6]/10 text-[#a78bfa] rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                  {...(project?.liveLink
                  ? { href: project.liveLink, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="px-4 py-1.5 rounded-lg flex flex-1 items-center justify-center bg-[#8b5cf6] hover:bg-[#8b5cf6]/80 text-white font-semibold cursor-pointer"
              >
                <IoOpenOutline/>
                <span>Live Demo</span>
              </a>
              <a
                {...(project?.liveLink
                  ? { href: project.liveLink, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="px-4 py-1.5 rounded-lg flex flex-1 items-center justify-center bg-slate-100 border-[#8b5cf6] text-[#8c67fc] hover:bg-[#8b5cf6]/10 hover:text-white font-semibold cursor-pointer"
              >
                <FiGithub/>
                <span>GitHub</span>
              </a>
            </div>
          </div>
          
            
        </div>
    </div>
  )
}

export default ProjectCard