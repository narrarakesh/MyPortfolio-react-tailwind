import { useState } from "react";
import {HiOutlineMenu, HiOutlineX} from 'react-icons/hi'
const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
    className="sticky top-0 z-50 bg-[#1a0b2e] backdrop-blur-md px-6 py-4 md:px-20 flex justify-between items-center text-white border-b border-purple-600/20" 
    // className="relative bg-[#1a0b2e] px-6 py-4 md:px-20 flex justify-between items-center text-white border-b border-purple-600/20"
    >
      <div className="text-2xl font-semibold text-purple-600">{'<NR />'}</div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (<HiOutlineX className='text-2xl '/>) : <HiOutlineMenu className='text-2xl'/>} 
        </button>
      </div>

      <div
        className={`absolute top-15 left-0 w-full md:w-auto md:static md:flex md:flex-row gap-2 md:gap-6 bg-[#1a0b2e] md:bg-transparent p-4 md:p-0 rounded-b-lg md:rounded-none transition-all duration-300 z-50 ${
          isOpen ? "flex flex-col" : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => {
              const section = document.getElementById(link.id);
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
              isOpen ? setIsOpen(!isOpen):'';
            }}
            className={`block w-full md:w-auto text-left md:text-center font-semibold py-2 px-4 rounded hover:bg-[#341857ac] text-slate-200 hover:text-purple-700 transition-colors cursor-pointer `}

          >
            {link.label}
          </button>
        ))}
      </div>

    </nav>
  );
};

export default Navbar;
