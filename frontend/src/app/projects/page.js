import "../../styles/shake.css"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import ProjectSection from "../../components/ProjectSection"

export default function About() {
    return (
        <main className="w-full bg-[#101010] min-h-screen">
            <Navbar />
            <section className="w-full min-h-screen flex flex-col gap-16 pb-24 items-center justify-center px-16 mobile:px-6 tablet:px-8 mobile:gap-12">
                <p className="text-gray-300 w-4/5 mobile:w-full pt-36 mobile:pt-16 text-center text-7xl mobile:text-4xl font-bold mb-2 tracking-widest">Building innovative solutions where creativity meets functionality.</p>
                <div className="w-4/5 mobile:w-full flex flex-col justify-center items-center text-center text-gray-300">
                    <h1 className="text-5xl font-extrabold mb-10 tracking-wider mobile:text-3xl relative">
                        My Projects
                        <div className="w-36 mobile:w-24 h-1 absolute -bottom-3 rounded-xl bg-gradient-to-r from-[#5892f0] via-[#9e6bec] to-[#ed8d47] left-1/2 trasnform -translate-x-1/2"></div>
                    </h1>
                    <p>Every project I build is a blend of innovation, functionality, and thoughtful design. From solving real-world problems to exploring new technologies, these works reflect my journey as a developer. Dive in to see how ideas turn into impactful digital experiences.</p>
                </div>
                <ProjectSection />
            </section>
            <Footer />
        </main>
    )
}