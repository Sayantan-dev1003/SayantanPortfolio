"use client"
import { useState } from 'react';
import { FaJs, FaPython, FaHtml5, FaCss3, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiPostgresql, SiMongodb, SiMysql, SiReact, SiNextdotjs, SiRedux, SiTailwindcss, SiNodedotjs, SiExpress, SiNestjs, SiSocketdotio, SiFlask, SiTensorflow, SiScikitlearn, SiNumpy, SiPandas, SiOpencv, SiGithub, SiJupyter, SiFigma, SiSupabase, SiFastapi } from 'react-icons/si';

const skillsData = {
    Languages: [
        { icon: <FaJs className="w-7 h-7" />, name: 'JavaScript' },
        { icon: <SiTypescript className="w-7 h-7" />, name: 'TypeScript' },
        { icon: <FaPython className="w-7 h-7" />, name: 'Python' },
        { icon: <SiCplusplus className="w-7 h-7" />, name: 'C/C++' },
        { icon: <FaDatabase className="w-7 h-7" />, name: 'SQL' },
        { icon: <FaHtml5 className="w-7 h-7" />, name: 'HTML5' },
        { icon: <FaCss3 className="w-7 h-7" />, name: 'CSS3' },
    ],
    'Libraries & Frameworks': [
        { icon: <SiReact className="w-7 h-7" />, name: 'React.js' },
        { icon: <SiNextdotjs className="w-7 h-7" />, name: 'Next.js' },
        { icon: <SiRedux className="w-7 h-7" />, name: 'Redux' },
        { icon: <SiTailwindcss className="w-7 h-7" />, name: 'Tailwind CSS' },
        { icon: <SiNodedotjs className="w-7 h-7" />, name: 'Node.js' },
        { icon: <SiExpress className="w-7 h-7" />, name: 'Express.js' },
        { icon: <SiNestjs className="w-7 h-7" />, name: 'Nest.js' },
        { icon: <SiFlask className="w-7 h-7" />, name: 'Flask' },
        { icon: <SiFastapi className="w-7 h-7" />, name: 'FastAPI' },
        { icon: <FaDatabase className="w-7 h-7" />, name: 'RESTful API' },
        { icon: <SiSocketdotio className="w-7 h-7" />, name: 'Socket.io' },
        { icon: <FaDatabase className="w-7 h-7" />, name: 'Webhooks' },
    ],
    'Machine Learning': [
        { icon: <FaPython className="w-7 h-7" />, name: 'Python' },
        { icon: <SiNumpy className="w-7 h-7" />, name: 'NumPy' },
        { icon: <SiPandas className="w-7 h-7" />, name: 'Pandas' },
        { icon: <SiScikitlearn className="w-7 h-7" />, name: 'Scikit-learn' },
        { icon: <SiOpencv className="w-7 h-7" />, name: 'OpenCV' },
        { icon: <SiTensorflow className="w-7 h-7" />, name: 'TensorFlow' },
    ],
    'Tools & Platforms': [
        { icon: <SiMongodb className="w-7 h-7" />, name: 'MongoDB' },
        { icon: <SiPostgresql className="w-7 h-7" />, name: 'PostgreSQL' },
        { icon: <SiMysql className="w-7 h-7" />, name: 'MySQL' },
        { icon: <SiGithub className="w-7 h-7" />, name: 'GitHub' },
        { icon: <SiJupyter className="w-7 h-7" />, name: 'Jupyter Notebook' },
        { icon: <SiFigma className="w-7 h-7" />, name: 'Figma' },
        { icon: <SiSupabase className="w-7 h-7" />, name: 'Supabase' },
    ],
};

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState('Languages');

    return (
        <main className="w-full bg-[#101010] pt-24 pb-10 mobile:pt-20 flex justify-center items-start">
            <section className="w-full flex flex-col gap-16 items-center justify-center px-16 mobile:px-6 tablet:px-8 mobile:gap-12">
                <h1 className=" text-gray-300 text-5xl font-extrabold mb-10 tracking-wider mobile:text-3xl relative">
                    Tech Stacks
                    <div className="w-36 mobile:w-24 h-1 absolute -bottom-3 rounded-xl bg-gradient-to-r from-[#5892f0] via-[#9e6bec] to-[#ed8d47] left-1/2 trasnform -translate-x-1/2"></div>
                </h1>

                <div className="flex gap-4 justify-center items-center mobile:flex-wrap ">
                    {Object.keys(skillsData).map((category) => (
                        <button
                            key={category}
                            className={`text-white mobile:text-xs  py-2 px-4 rounded-full ${activeCategory === category ? 'bg-gradient-to-r from-[#5892f0] via-[#9e6bec] to-[#ed8d47]' : 'bg-[#242424]'}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col gap-8">
                    <div className="flex flex-wrap gap-5 justify-center items-center">
                        {skillsData[activeCategory].map((skill, index) => (
                            <div key={index} className="flex flex-col gap-3 bg-[#242424] px-5 pb-2 pt-2.5 rounded-xl justify-center items-center text-white shake-icons cursor-pointer">
                                {skill.icon} <span className='text-xs'>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}