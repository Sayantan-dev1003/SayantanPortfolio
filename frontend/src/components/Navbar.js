'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMenu } from 'react-icons/fi';
import { FaRedditAlien } from 'react-icons/fa';
import '../styles/underline.css';
import "../styles/shake.css"

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-[#101010] px-16 mobile:px-6 tablet:px-8 flex py-7 justify-between items-center mobile:w-full tablet:w-full mobile:py-6">
            <div className="flex items-center space-x-10 mobile:hidden tablet:hidden">
                <Link href="/" className="text-gray-300 font-semibold link transition">
                    Home
                </Link>
                <Link href="/about" className="text-gray-300 font-semibold link transition">
                    About
                </Link>
                <Link href="/skills" className="text-gray-300 font-semibold link transition">
                    Skills
                </Link>
                <Link href="/projects" className="text-gray-300 font-semibold link transition">
                    Projects
                </Link>
            </div>

            <div>
                <p className='protestRevolution tracking-widest text-xl text-gray-300 mobile:text-base cursor-pointer shaking-effect'>&lt;SAYANTAN /&gt;</p>
            </div>

            <div className="flex items-center space-x-6 mobile:hidden tablet:hidden">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500 transition-colors">
                    <FiGithub className="h-5 w-5 shake-icons" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-700 transition-colors">
                    <FiLinkedin className="h-5 w-5 shake-icons" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                    <FiTwitter className="h-5 w-5 shake-icons" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-600  transition-colors">
                    <FiInstagram className="h-5 w-5 shake-icons" />
                </a>
                <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-gray-300  hover:text-orange-600 transition-colors">
                    <FaRedditAlien className="h-5 w-5 shake-icons" />
                </a>
            </div>

            <FiMenu className='text-gray-300 laptop:hidden' />
        </nav>
    );
}