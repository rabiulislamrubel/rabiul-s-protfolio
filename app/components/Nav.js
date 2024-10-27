

import Link from "next/link"

export default function Nav() {
    return (
        <nav className="w-full h-20 bg-[#95A5A7] flex items-center 2xl:h-24">
            <div className="container">
                <div className="h-full center sm:h-20 2xl:h-24 lg:justify-between">
                    <Link href={"/"}><p className="text-shadow text-2xl font-extrabold 2xl:text-3xl cursor-pointer">RABIULS PORTFOLIO</p></Link>
                    <ul className="lg:flex hidden text-xl 2xl:text-2xl">
                        <Link href={"/"}><li className="text-shadow font-bold px-5 py-2 me-1 xl:px-6 xl:me-2 cursor-pointer">Home</li></Link>
                        <Link href={"/projects"}><li className="text-shadow font-bold px-5 py-2 me-1 xl:px-6 xl:me-2 cursor-pointer">Projects</li></Link>
                        <Link href={"/skills"}><li className="text-shadow font-bold px-5 py-2 me-1 xl:px-6 xl:me-2 cursor-pointer">Skills</li></Link>
                        <Link href={"/about"}><li className="text-shadow font-bold px-5 py-2 xl:px-6 cursor-pointer">About</li></Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}