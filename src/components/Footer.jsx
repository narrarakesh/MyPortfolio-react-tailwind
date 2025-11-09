import React from 'react'

const Footer = () => {
  return (
    <section id="footer" className="bg-[#1a0b2e]">
        <div className="">
            <hr className='text-purple-600/20'/>
            <div className='flex justify-center p-5 text-gray-500'>
                <h4>© {new Date().getFullYear()} Rakesh Narra. All rights reserved.</h4>
            </div>
        </div>
    </section>
  )
}

export default Footer