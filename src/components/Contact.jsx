import React, { useState } from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import emailjs from '@emailjs/browser';

const Contact = () => {


    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail]= useState("");
    const [message, setMessage]= useState('');
    const socials = [
        {
            icon: <FiGithub />,
            href: "https://github.com/narrarakesh",
            label: "GitHub",
        },
        {
            icon: <LuLinkedin />,
            href: "https://www.linkedin.com/in/narrarakesh",
            label: "LinkedIn",
        },
    ];

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                userName,
                userEmail,
                message,
            },
            {publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,}
            );

            toast.success("Message Sent Successfully");
            setUserName("");
            setUserEmail("");
            setMessage("");
        } catch (error) {
            toast.error("Failed to Send Message");
            console.log("Failed to sedn Message: ",error);
        }
    };

    const handleSubmit = (e)=>{
        if(!userName.trim()) return toast.error("Please enter the name");
        const isValidEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail);
        if (!isValidEmail()) return toast.error("Please enter a valid email address.");

        if(!userEmail.trim()) return toast.error("Please enter the email");
        if(!message.trim()) return toast.error("Please enter the message");

        sendEmail(e);
        
    }

  return (
    <section id="contact" className="min-h-screen py-25 px-4 bg-[#1e1d27]">
        <Toaster position="top-center" toastOptions={{
            success: {
                className:
                    "!bg-[#311b4e]/50 !text-green-300 !border !border-green-500/40 backdrop-blur-md",
            },
            error: {
                className:
                "!bg-[#311b4e]/50  !text-red-500  border !border-red-500/40 backdrop-blur-md",
            },
        }}/>
        <div className="max-w-4xl mx-auto">
            <h1 className="text-center text-2xl md:text-4xl mb-10 text-[#a78bfa]">Get in touch</h1>
            
            <div className=" flex flex-col items-center text-center space-y-6">
                <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                I'd love to hear from you! If you have any questions, comments, or feedback. Please use the form below.
                </p>

                <div className="flex flex-col items-center justify-center border border-[#8b5cf6]/70 rounded-3xl p-6 mt-4 w-[80%] md:w-2/3">
                    <input className="input" type="text" placeholder="Enter Your Name" 
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}
                    />
                    <input className="input" type="email" placeholder="Enter Your Email" 
                        value={userEmail}
                        onChange={(e)=>setUserEmail(e.target.value)}
                    />
                    <textarea className="input" rows="3" placeholder="Enter Your Message"
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                    ></textarea>
                    <button className="px-4 py-1.5 rounded-lg flex flex-1 items-center justify-center bg-[#8b5cf6] hover:bg-[#8b5cf6]/80 text-slate-100 cursor-pointer mt-2"
                        onClick={handleSubmit}
                    >
                    <div className="flex gap-3 justify-center items-center">
                        <MdOutlineMailOutline/>
                        <span>Send Message</span>
                    </div>
                    </button>
                </div>
                
                <div className="mt-2 flex items-center justify-center gap-3">
                    {socials.map(({ icon, href, label }) => (
                        <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-[60px] h-[60px] flex items-center justify-center rounded-full 
                                    bg-[#311b4e]/50 border border-[#8b5cf6]/20 
                                    hover:border-[#8b5cf6]/90 transition-all duration-300 
                                    hover:scale-105 hover:-translate-y-1"
                        >
                        <div className="text-3xl text-[#a78bfa]">{icon}</div>
                        </a>
                    ))}
                </div>


                
            </div>
        </div>
    </section>
  )
}

export default Contact