import Image from 'next/image'
import Link from 'next/link';
import Navbar from "../components/Navbar"
import { FiArrowRightCircle } from 'react-icons/fi';
import PortFolioImg from "../public/images/PortFolioImg.png"

export default function Home() {
    return (
        <main className="w-full min-h-screen bg-[#101010] ">
            <Navbar />
            <section className="w-full flex items-center px-16 mobile:px-6 tablet:px-8 mobile:flex-col-reverse mobile:gap-12">
                <div className="flex w-[46%] mobile:w-full justify-center items-center">
                    <Image
                        src={PortFolioImg}
                        alt="Portfolio"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="text-gray-300 w-[54%] mobile:w-full tablet:text-center mobile:text-center">
                    <span className='tracking-widest mobile:text-sm'>HEY, I&apos;M</span>
                    <h1 className="text-5xl font-extrabold mb-10 tracking-wider mobile:text-4xl">SAYANTAN HALDER</h1>
                    <h1 className="text-xl font-bold mb-2 tracking-widest tablet:text-lg">Turning Vision Into Reality With Code and Design.</h1>
                    <p className="text-base mb-2">As a passionate <strong>AI Product Developer</strong>, I specialize in crafting intelligent, full-stack solutions that seamlessly integrate user experience with the power of machine learning.</p>
                    <p className="text-base">Explore my projects, where I build solutions that don&apos;t just work - they think, adapt, and deliver values.</p>
                    <div className='flex mt-6 items-center gap-6 tablet:justify-center mobile:justify-center'>
                        <button className='bg-gray-300 hover:bg-gray-100 transition-colors duration-300 text-[#101010] flex items-center px-5 py-2 rounded-md gap-2 font-semibold'>Resume <FiArrowRightCircle className='font-semibold' /></button>
                        <Link href="/contacts" className="text-gray-300 transition link tracking-wide font-medium">
                            Contacts
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}