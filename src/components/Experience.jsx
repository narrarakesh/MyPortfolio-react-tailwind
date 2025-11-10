import React from 'react'
import { Companies } from '../utils/Data'
import ExpCard from './cards/ExpCard'
import SkillsTabs from './cards/SkillsTabs'

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-25 px-4 bg-[#1e1d27]">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-center text-2xl md:text-4xl mb-12 text-[#a78bfa]">Experience & Skills</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className='flex flex-col  items-center'>
                    <h2 className="mb-8 text-[#a78bfa]">Experience</h2>
                    <div className="space-y-8 relative pl-8 border-l-2 border-[#8b5cf6]/30">
                        
                        {
                            Companies.map((job)=> <ExpCard job ={job}/>)
                        }
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="mb-2 md:mb-8 text-[#a78bfa]">Skills</h2>
                    <div className=" pl-8">
                        <SkillsTabs/>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Experience