import Image from "next/image";
import SmartAttendanceSystem from "../public/images/SmartAttendanceSystem.png"
import Telemedicine from "../public/images/Telemedicine.png"
import MindScan from "../public/images/MindScan.png"
import Taggle from "../public/images/Taggle.png"
import BlogApp from "../public/images/BlogApp.png"
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProjectSection() {
    return (
        <section className="w-full mobile:w-full text-center flex flex-col gap-16 items-center justify-center px-16 mobile:px-0 tablet:px-12 mobile:gap-12">
            <div className="mt-12 mobile:mt-6 flex flex-col laptop:flex-row items-start bg-[#181818] rounded-3xl shadow-inner p-6 gap-8 text-white w-full">
                <Image
                    src={SmartAttendanceSystem}
                    alt="Portfolio"
                    width={450}
                    height={450}
                    className="rounded-xl"
                />

                <div className="flex flex-col items-start text-left gap-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white mobile:text-2xl">Smart Attendance System</h2>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            The <strong>Smart Attendance System</strong> is an <strong>AI-driven</strong> solution that uses <strong>face recognition</strong> for real-time, automated attendance tracking. This project efficiently combines <strong>machine learning</strong>, <strong>computer vision</strong>, and <strong>full-stack web development</strong> to address a real-world need.
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <FaGithub className="text-3xl" />
                        <button className='bg-gray-300 hover:bg-gray-100 transition-colors duration-300 text-[#101010] flex items-center px-3 py-1 rounded-md gap-2 font-semibold text-sm'>Explore <FaArrowRightLong className='font-semibold' /></button>
                    </div>
                </div>
            </div>

            <div className="mt-12 mobile:mt-6 flex laptop:flex-row-reverse flex-col items-start bg-[#181818] rounded-3xl shadow-inner p-6 gap-8 text-white w-full">
                <Image
                    src={Telemedicine}
                    alt="Portfolio"
                    width={450}
                    height={450}
                    className="rounded-xl"
                />

                <div className="flex flex-col items-start text-left gap-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white mobile:text-2xl">Telemedicine</h2>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            This <strong>AI-powered</strong> healthcare system features a <strong>multilingual NLP</strong> interface, a <strong>chatbot</strong> for symptom-based diagnosis, and <strong>automated appointment scheduling</strong>. It offers <strong>secure video consultations</strong>, an <strong>interactive map</strong> for nearby services, and a <strong>medicine recognition model</strong> that suggests alternatives based on images or names.
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <FaGithub className="text-3xl" />
                        <button className='bg-gray-300 hover:bg-gray-100 transition-colors duration-300 text-[#101010] flex items-center px-3 py-1 rounded-md gap-2 font-semibold text-sm'>Explore <FaArrowRightLong className='font-semibold' /></button>
                    </div>
                </div>
            </div>

            <div className="mt-12 mobile:mt-6 flex flex-col laptop:flex-row items-start bg-[#181818] rounded-3xl shadow-inner p-6 gap-8 text-white w-full">
                <Image
                    src={MindScan}
                    alt="Portfolio"
                    width={450}
                    height={450}
                    className="rounded-xl"
                />

                <div className="flex flex-col items-start text-left gap-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white mobile:text-2xl">MindScan</h2>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            <strong>MindScan</strong> is a mental health recommendation system that analyzes <strong>EEG/ECG medical reports</strong> to detect conditions like <strong>anxiety, bipolar disorder, depression, and schizophrenia</strong>. Leveraging machine learning, it provides personalized <strong>Do&apos;s and Don&apos;ts</strong> as recommendations, helping doctors and patients better understand and manage mental well-being.
                        </p>

                    </div>
                    <div className="flex gap-6">
                        <FaGithub className="text-3xl" />
                        <button className='bg-gray-300 hover:bg-gray-100 transition-colors duration-300 text-[#101010] flex items-center px-3 py-1 rounded-md gap-2 font-semibold text-sm'>Explore <FaArrowRightLong className='font-semibold' /></button>
                    </div>
                </div>
            </div>

            <div className="mt-12 mobile:mt-6 flex laptop:flex-row-reverse flex-col items-start bg-[#181818] rounded-3xl shadow-inner p-6 gap-8 text-white w-full">
                <Image
                    src={Taggle}
                    alt="Portfolio"
                    width={450}
                    height={450}
                    className="rounded-xl"
                />

                <div className="flex flex-col items-start text-left gap-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white mobile:text-2xl">Taggle</h2>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Taggle is an <strong>interactive Q&A platform</strong> fostering open knowledge exchange and community interaction. It offers a welcoming environment for users to engage in discussions across diverse subjects, from <strong>technical</strong> to general topics. Notably, users can participate <strong>anonymously</strong> in asking questions, commenting, and liking posts.
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <FaGithub className="text-3xl" />
                        <button className='bg-gray-300 hover:bg-gray-100 transition-colors duration-300 text-[#101010] flex items-center px-3 py-1 rounded-md gap-2 font-semibold text-sm'>Explore <FaArrowRightLong className='font-semibold' /></button>
                    </div>
                </div>
            </div>

            <div className="mt-12 mobile:mt-6 flex flex-col laptop:flex-row items-start bg-[#181818] rounded-3xl shadow-inner p-6 gap-8 text-white w-full">
                <Image
                    src={BlogApp}
                    alt="Portfolio"
                    width={450}
                    height={450}
                    className="rounded-xl"
                />

                <div className="flex flex-col items-start text-left gap-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white mobile:text-2xl">BlogApp</h2>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            <strong>BlogApp</strong> is a full-stack project that allows users to create, update, post, comment, and like blogs. It aims to provide a seamless and engaging experience for users to share their thoughts and ideas.
                        </p>

                    </div>
                    <div className="flex gap-6">
                        <FaGithub className="text-3xl" />
                        <button className='bg-gray-300 hover:bg-gray-100 transition-colors duration-300 text-[#101010] flex items-center px-3 py-1 rounded-md gap-2 font-semibold text-sm'>Explore <FaArrowRightLong className='font-semibold' /></button>
                    </div>
                </div>
            </div>
        </section>
    );
}  