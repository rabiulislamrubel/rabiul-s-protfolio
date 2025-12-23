import Button from "./components/Button";

export default function Home() {

    return (
        <main className="w-full bg-[#95A5A7] flex items-center sm:min-h-[calc(100vh-128px)] 2xl:min-h-[calc(100vh-176px)] relative">
            <div className="container">
                <section className="w-full h-full grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
                    <div className="center flex-col lg:items-start">
                        <p className="text-shadow text-5xl font-extrabold mb-1 lg:mb-2 sm:text-6xl lg:text-left 2xl:text-8xl 2xl:mb-3">Rabiul Islam</p>
                        <p className="text-shadow text-[22px] leading-6 font-bold text-center mb-3 lg:mb-4 sm:text-3xl lg:text-left 2xl:text-4xl 2xl:mb-5">A very passionate Front-end Developer.</p>
                        <Button />
                    </div>
                    <div className="flex items-start justify-center lg:items-center">

                        <div className="relative min-w-72 min-h-72">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".7" strokeLinecap="round" strokeLinejoin="round" className="size-36 animate-full-spin absolute top-0 left-[78px]">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".7" strokeLinecap="round" strokeLinejoin="round" className="size-36 animate-reverse-spin absolute left-[133px] top-[83px]">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".7" strokeLinecap="round" strokeLinejoin="round" className="size-36 animate-full-spin absolute left-[51px] top-[140px]">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            </svg>
                        </div>

                    </div>
                </section>

                <section className="absolute w-full h-full top-0 left-0 hidden lg:block">
                    <div className="text-style right-40 top-1/2">HTML</div>
                    <div className="text-style left-1/2 top-1/2 -rotate-45 ">CSS</div>
                    <div className="text-style right-1/4 top-12 rotate-12">JavaScript</div>
                    <div className="text-style top-40 left-1/3 -rotate-12">React.js</div>
                    <div className="text-style bottom-32 right-1/3 -rotate-45">Next.js</div>
                    <div className="text-style bottom-1/4 left-1/4 rotate-45">Node.js</div>
                    <div className="text-style left-40 top-36 rotate-45 xl:left-64">&lt;/&gt;</div>
                    <div className="text-style right-32 bottom-36 xl:right-44">&lt;/&gt;</div>
                    <div className="text-style bottom-1/4 left-36 xl:left-52">{ }</div>
                    <div className="text-style left-1/2 top-12">&lt;/&gt;</div>
                    <div className="text-style right-24 top-32 xl:right-36">{ }</div>
                </section>
            </div>
        </main>
    );
}
