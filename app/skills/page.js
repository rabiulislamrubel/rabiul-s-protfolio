


export default function Skills() {
    return (
        <main className="w-full bg-[#95A5A7] flex items-center sm:min-h-[calc(100vh-128px)] 2xl:min-h-[calc(100vh-176px)] relative">
            <div className="container">

                <div className="h-full grid grid-cols-3 justify-items-center max-sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-sm:gap-4 md:gap-5">
                    <div className="grid grid-rows-3 justify-items-center">
                        <div className="w-40 h-40 box-shadow rounded-full flex items-center justify-center text-shadow font-bold text-xl">HTML</div>
                        <div className="w-full flex items-center">
                            <div className="w-36 h-36 box-shadow rounded-full flex items-center justify-center text-shadow font-bold text-xl mr-3">CSS</div>
                            <div className="w-36 h-36 box-shadow rounded-full flex items-center justify-center text-shadow font-bold text-xl">Tailwindcss</div>
                        </div>
                        <div className="w-32 h-32 box-shadow rounded-full flex items-center justify-center text-shadow font-bold text-xl">Bootstrap</div>
                    </div>

                    <div className="grid grid-rows-3 justify-items-center">
                        <div className="w-40 h-40 box-shadow rounded-full flex items-center justify-center text-shadow font-bold text-xl">JavaScript</div>
                        <div className="w-full flex items-center">
                            <div className="w-36 h-36 box-shadow rounded-full flex items-center justify-center text-shadow font-bold text-xl mr-3">React.js</div>
                            <div className="w-36 h-36 box-shadow rounded-full flex items-center justify-center text-shadow font-bold text-xl">Next.js</div>
                        </div>
                        <div className="w-32 h-32 box-shadow rounded-full flex items-center justify-center text-shadow font-bold text-xl">Node.js</div>
                    </div>


                    <div className="grid grid-rows-3 justify-items-center">
                        <div className="w-40 h-40 box-shadow rounded-full flex items-center justify-center text-shadow font-bold text-xl">git</div>
                        <div className="w-full flex items-center">
                            <div className="w-36 h-36 box-shadow rounded-full flex items-center justify-center text-shadow font-bold text-xl mr-3">TypeScript</div>
                            <div className="w-36 h-36 box-shadow rounded-full flex items-center justify-center text-shadow font-bold text-xl">Python</div>
                        </div>
                        <div className="w-32 h-32 box-shadow rounded-full flex items-center justify-center text-shadow font-bold text-xl">MongoDB</div>
                    </div>
                </div>

            </div>
        </main>
    )
}