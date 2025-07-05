'use client';
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer opacity-80 hover:scale-110 transition-transform duration-200">
          <Link href="/">
            <img
              src="/Nlogo.png"
              width={45}
              className="mb-1 border border-white rounded-full"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          {menuOpen ? (
            <X
              className="w-6 h-6 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <Menu
              className="w-6 h-6 cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 font-light opacity-70 items-center">
          <li className="cursor-pointer hover:scale-110 transition-transform duration-200 opacity-65">
            <a href="https://www.linkedin.com/in/nikunjmiglani/" target="_blank" rel="noopener noreferrer">
              Linkedin
            </a>
          </li>
          <li className="cursor-pointer hover:scale-110 transition-transform duration-200 opacity-65">
            <a href="https://github.com/Nikunjmiglani" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li className="cursor-pointer hover:scale-110 transition-transform duration-200 opacity-65">
            <a href="https://x.com/NikunjMiglani28" target="_blank" rel="noopener noreferrer">
              X
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-center gap-4 text-white font-light opacity-80">
            <li>
              <a href="https://www.linkedin.com/in/nikunjmiglani/" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/Nikunjmiglani" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
            <li>
              <a href="https://x.com/NikunjMiglani28" target="_blank" rel="noopener noreferrer">
                X
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

