import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMenu, FiMail } from 'react-icons/fi';
import { FaRedditAlien } from 'react-icons/fa';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'

export default function Footer() {
    return (
        <footer className="w-full bg-[#101010] mt-12 py-10 mobile:pt-20 flex justify-center items-start text-gray-300 border-t border-t-[#323232]">
            <div className="w-full flex flex-col justify-center items-center px-6">
                <h2 className="text-4xl font-semibold mb-2 mobile:text-3xl">Sayantan Halder</h2>
                <p className="text-sm mb-1 w-[40%] text-center mobile:w-full">Full Stack Web Developer | AI/ML & Data Science Enthusiast | Provide AWS Cloud Services | Tech Innovator</p>
                <p className="w-[60%] text-center text-sm mb-6 px-2 mobile:w-full mobile:mt-1">
                    I&apos;m a passionate Full Stack Developer and UI/UX Designer, focused on building intelligent, scalable web solutions powered by machine learning.
                </p>

                <h3 className="text-xl my-4">Connect with me</h3>

                <div className="flex items-center space-x-10 justify-center mobile:space-x-4 tablet:space-x-6">
                    <a href="https://github.com/Sayantan-dev1003" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500 transition-colors">
                        <FiGithub className="h-7 w-7 shake-icons mobile:h-5 mobile:w-5" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-700 transition-colors">
                        <FiLinkedin className="h-7 w-7 shake-icons mobile:h-5 mobile:w-5" />
                    </a>
                    <a href="mailto:sayantanhalder78@gmail.com" className="text-gray-300 hover:text-red-500 transition-colors">
                        <FiMail className="h-7 w-7 shake-icons mobile:h-5 mobile:w-5" />
                    </a>
                    <a href="https://leetcode.com/u/vIkgaPmZuL/" target="_blank" rel="noopener noreferrer" className="text-gray-300  hover:text-orange-500 transition-colors">
                        <SiLeetcode className="h-7 w-7 shake-icons mobile:h-5 mobile:w-5" />
                    </a>
                    <a href="https://www.geeksforgeeks.org/user/sayantanhihnp/" target="_blank" rel="noopener noreferrer" className="text-gray-300  hover:text-green-700 transition-colors">
                        <SiGeeksforgeeks className="h-7 w-7 shake-icons mobile:h-5 mobile:w-5" />
                    </a>
                    <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-gray-300  hover:text-orange-600 transition-colors">
                        <FaRedditAlien className="h-7 w-7 shake-icons mobile:h-5 mobile:w-5" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                        <FiTwitter className="h-7 w-7 shake-icons mobile:h-5 mobile:w-5" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-600  transition-colors">
                        <FiInstagram className="h-7 w-7 shake-icons mobile:h-5 mobile:w-5" />
                    </a>
                </div>

                <p className="text-xs text-gray-500 mt-5">© 2025 Sayantan Halder. All rights reserved.</p>
            </div>
        </footer>
    );
}