import React from 'react'

const Footer = () => {
    return (
        <footer className="hidden md:block bg-pink-200 text-pink-700 py-6 mt-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
                    
                    {/* Logo */}
                    <div className='logo font-bold text-2xl text-black text-center md:text-left'>
                        <span className='text-pink-400'>&lt;</span>
                        Pass
                        <span className='text-pink-400'>OP/&gt;</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm">
                        <a href="#" className="hover:text-pink-500 transition">Home</a>
                        <a href="#" className="hover:text-pink-500 transition">About</a>
                        <a href="#" className="hover:text-pink-500 transition">Contact</a>
                        <a href="#" className="hover:text-pink-500 transition">Privacy Policy</a>
                    </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer