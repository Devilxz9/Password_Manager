import React, { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='bg-purple-200 flex h-16 sm:h-20 justify-between sm:justify-around items-center px-4 sm:px-6 relative'>
            <div className='logo font-bold text-xl sm:text-2xl'>
                <span className='text-pink-400'>&lt;</span>
                Pass
                <span className='text-pink-400'>OP/&gt;</span>
            </div>
            
            {/* Hamburger Menu for Mobile */}
            <button 
                className='sm:hidden flex flex-col gap-1 z-50'
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span className={`w-6 h-0.5 bg-pink-400 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-pink-400 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-pink-400 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            {/* Desktop Menu */}
            <ul className='hidden sm:flex gap-8'>
                <a className='hover:font-bold transition-all cursor-pointer' href="#">Home</a>
                <a className='hover:font-bold transition-all cursor-pointer' href="#">About</a>
                <a className='hover:font-bold transition-all cursor-pointer' href="#">Contact</a>
            </ul>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className='sm:hidden absolute top-16 left-0 right-0 bg-purple-200 flex flex-col items-center gap-4 py-6 shadow-lg z-40'>
                    <a className='hover:font-bold transition-all text-lg cursor-pointer' href="#" onClick={() => setMenuOpen(false)}>Home</a>
                    <a className='hover:font-bold transition-all text-lg cursor-pointer' href="#" onClick={() => setMenuOpen(false)}>About</a>
                    <a className='hover:font-bold transition-all text-lg cursor-pointer' href="#" onClick={() => setMenuOpen(false)}>Contact</a>
                </ul>
            )}
        </nav>
    )
}

export default Navbar