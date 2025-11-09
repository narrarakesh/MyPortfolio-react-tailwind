import React from 'react'

const SkillChips = ({skills}) => {
  return (
    <div className='flex flex-wrap justify-center gap-2'>
        { skills.map((skill)=>{
            return <div key={skill} className='px-2 py-1 text-white bg-[#311b4e]/50 border border-[#8b5cf6]/20 rounded-lg hover:border-[#8b5cf6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#8b5cf6]/20'>{skill}</div>
        })}
    </div>
  )
}

export default SkillChips