import { FaCloud, FaLaptop, FaRobot } from "react-icons/fa"
import "../styles/shake.css"

export default function About() {
    return (
        <main className="w-full min-h-screen bg-[#101010] pt-24 mobile:pt-20 flex justify-center items-start">
            <section className="w-full flex flex-col gap-16 items-center justify-center px-16 mobile:px-6 tablet:px-8 mobile:gap-12">
                <div className="w-2/3 mobile:w-full flex flex-col justify-center items-center text-center">
                    <h1 className="text-5xl font-extrabold mb-10 tracking-wider mobile:text-4xl text-gray-300 relative">
                        About Me
                        <div className="w-36 mobile:w-24 h-1 absolute -bottom-3 rounded-xl bg-gradient-to-r from-[#5892f0] via-[#9e6bec] to-[#ed8d47] left-1/2 trasnform -translate-x-1/2"></div>
                    </h1>
                    <p className="text-gray-300">I&apos;m a passionate <strong>Full Stack Developer</strong> and <strong>UI Designer</strong> - building intelligent and scalable solutions with <strong>machine learning</strong> concepts for next-gen web experiences.</p>
                </div>
                <div className="w-full flex flex-col gap-6">
                    <div className="w-[50.25%] mobile:w-full border-l-[6px] border-l-blue-400 ml-auto flex px-10 mobile:px-4">
                        <div className="flex flex-col text-gray-300">
                            <div className="flex items-center text-blue-400 gap-4">
                                <span className="flex justify-center items-center rounded-full p-6 mobile:p-5 bg-blue-400 hover:bg-blue-500 transform transition-colors duration-300 cursor-pointer shake-icons">
                                    <FaLaptop className="text-[#101010] text-lg mobile:text-sm" />
                                </span>
                                <h2 className="text-xl font-semibold">Full-Stack and UI/UX Developer</h2>
                            </div>
                            <p className="text-sm ml-20 mobile:ml-[4.5rem]">Crafting powerful web experiences with the MERN stack, fused with sleek, intuitive UI/UX that leaves a lasting impression.</p>
                        </div>
                    </div>
                    <div className="w-[50.25%] mobile:w-full border-r-[6px] border-r-purple-400 mobile:border-l-[6px] mobile:border-l-purple-400 mobile:border-r-0 flex px-10 mobile:px-4">
                        <div className="flex flex-col text-gray-300">
                            <div className="flex items-center text-purple-400 gap-4">
                                <span className="flex justify-center items-center rounded-full p-6 mobile:p-5 bg-purple-400 hover:bg-purple-500 transform transition-colors duration-300 cursor-pointer shake-icons">
                                    <FaRobot className="text-[#101010] text-lg mobile:text-sm" />
                                </span>
                                <h2 className="text-xl font-semibold">Machine Learning Enthusiast</h2>
                            </div>
                            <p className="text-sm ml-20 mobile:ml-[4.5rem]">Harnessing the intelligence of data to build ML-driven solutions that diagnose, predict, and empower real-world decisions.</p>
                        </div>
                    </div>
                    <div className="w-[50.25%] mobile:w-full border-l-[6px] border-l-orange-400  ml-auto flex px-10 mobile:px-4">
                        <div className="flex flex-col text-gray-300">
                            <div className="flex items-center text-orange-400 gap-4">
                                <span className="flex justify-center items-center rounded-full p-6 mobile:p-5 bg-orange-400 hover:bg-orange-500 transform transition-colors duration-300 cursor-pointer shake-icons">
                                    <FaCloud className="text-[#101010] text-lg mobile:text-sm" />
                                </span>
                                <h2 className="text-xl font-semibold">Cloud Explorer</h2>
                            </div>
                            <p className="text-sm ml-20 mobile:ml-[4.5rem]">Engineering scalable, cloud-native systems on AWS - automated, resilent, and ready for the future.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}