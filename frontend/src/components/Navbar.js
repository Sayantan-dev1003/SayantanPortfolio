'use client';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMenu, FiMail } from 'react-icons/fi';
import { FaRedditAlien } from 'react-icons/fa';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'
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
                <Link href="/projects" className="text-gray-300 font-semibold link transition">
                    Projects
                </Link>
                <Link href="/contacts" className="text-gray-300 font-semibold link transition">
                    Contacts
                </Link>
            </div>

            <div>
                <p className='protestRevolution tracking-widest text-xl text-gray-300 mobile:text-base cursor-pointer shaking-effect'>&lt;SAYANTAN /&gt;</p>
            </div>

            <div className="flex items-center space-x-6 mobile:hidden tablet:hidden">
                <a href="https://github.com/Sayantan-dev1003" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500 transition-colors">
                    <FiGithub className="h-5 w-5 shake-icons" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-700 transition-colors">
                    <FiLinkedin className="h-5 w-5 shake-icons" />
                </a>
                <a href="mailto:sayantanhalder78@gmail.com" className="text-gray-300 hover:text-red-500 transition-colors">
                    <FiMail className="h-5 w-5 shake-icons" />
                </a>
                <a href="https://leetcode.com/u/vIkgaPmZuL/" target="_blank" rel="noopener noreferrer" className="text-gray-300  hover:text-orange-500 transition-colors">
                    <SiLeetcode className="h-5 w-5 shake-icons" />
                </a>
                <a href="https://www.geeksforgeeks.org/user/sayantanhihnp/" target="_blank" rel="noopener noreferrer" className="text-gray-300  hover:text-green-700 transition-colors">
                    <SiGeeksforgeeks className="h-6 w-6 shake-icons" />
                </a>
                <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-gray-300  hover:text-orange-600 transition-colors">
                    <FaRedditAlien className="h-5 w-5 shake-icons" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                    <FiTwitter className="h-5 w-5 shake-icons" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-600  transition-colors">
                    <FiInstagram className="h-5 w-5 shake-icons" />
                </a>
            </div>

            <FiMenu className='text-gray-300 laptop:hidden' />
        </nav>
    );
}