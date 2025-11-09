import React from 'react'
import ProjectCard from './cards/ProjectCard';
import { projects } from '../utils/Data';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-25 px-4 bg-[#1a0b2e]">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-center text-2xl md:text-4xl mb-12 text-[#a78bfa]">Projects</h1>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                projects.map((proj, index)=> <ProjectCard key={index} project={proj}/>)
                }

            </div>
        </div>
    </section>
  )
}

export default Projects