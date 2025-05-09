import { FaCalendar } from "react-icons/fa";

export default function Experience() {
    return (
        <main className="w-full bg-[#101010] pt-24 pb-10 mobile:pt-20 flex justify-center items-start">
            <section className="w-full flex flex-col gap-16 items-center justify-center px-16 mobile:px-6 tablet:px-8 mobile:gap-12">
                <div className="w-5/6 mobile:w-full flex flex-col text-center">
                    <h1 className="text-5xl font-extrabold mb-10 tracking-wider mobile:text-4xl text-gray-300 relative">
                        Work Experience
                        <div className="w-36 mobile:w-24 h-1 absolute -bottom-3 rounded-xl bg-gradient-to-r from-[#5892f0] via-[#9e6bec] to-[#ed8d47] left-1/2 trasnform -translate-x-1/2"></div>
                    </h1>
                    <div className="mt-12 flex flex-col w-full">
                        <div className="w-full bg-[#242424] p-6 rounded-xl shadow-lg text-gray-300">
                            <div className="w-full flex justify-between items-start mobile:flex-col mobile:text-left mobile:gap-4">
                                <div>
                                    <h1 className="text-xl font-bold text-white">Full Stack Web Developer Intern</h1>
                                    <h2 className="text-sm italic mt-1 text-gray-400 text-left">BlueCore IT • Ahmedabad, Gujarat</h2>
                                </div>
                                <span className="text-xs flex gap-2 items-center bg-gradient-to-r from-[#5892f0] via-[#9e6bec] to-[#ed8d47] text-[#101010] px-4 py-1 rounded-2xl font-semibold shadow-sm">
                                    <FaCalendar /> January 2024 – February 2024
                                </span>
                            </div>
                            <div className="w-5/6 mobile:w-full mt-4 text-sm text-gray-300 leading-relaxed text-left space-y-2">
                                <p>
                                    <strong>Taggle</strong> is a web-based platform that enables users to ask questions, share answers, and engage in thread-based discussions—anonymously and seamlessly. Designed for meaningful interaction, it offers a modern, intuitive user experience.
                                </p>
                                <p>
                                    The platform features real-time engagement metrics, intelligent search powered by Elasticsearch, and secure session management with JWT authentication. Its scalable Node.js/Express backend, coupled with a well-optimized MongoDB database, ensures smooth performance under high traffic.
                                </p>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="bg-[#3f3f3f] text-gray-100 px-3 py-1 rounded-full text-xs font-medium">React.js</span>
                                <span className="bg-[#3f3f3f] text-gray-100 px-3 py-1 rounded-full text-xs font-medium">Tailwind CSS</span>
                                <span className="bg-[#3f3f3f] text-gray-100 px-3 py-1 rounded-full text-xs font-medium">Node.js</span>
                                <span className="bg-[#3f3f3f] text-gray-100 px-3 py-1 rounded-full text-xs font-medium">Express.js</span>
                                <span className="bg-[#3f3f3f] text-gray-100 px-3 py-1 rounded-full text-xs font-medium">MongoDB</span>
                                <span className="bg-[#3f3f3f] text-gray-100 px-3 py-1 rounded-full text-xs font-medium">JWT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}