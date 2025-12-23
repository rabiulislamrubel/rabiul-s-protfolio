
import Card from "../components/Card"


export default function Projects() {
    return (
        <main className="min-h-[calc(100vh-112px)] w-full bg-[#95A5A7] md:min-h-[calc(100vh-128px)] 2xl:min-h-[calc(100vh-176px)] relative">

            <div className="container">
                <h1 className="h-36 text-2xl text-shadow font-bold text-center px-2 lg:text-3xl 2xl:text-5xl flex items-center justify-center">You can get here, All my projects Live site and Detail.</h1>

                <section className="w-full grid grid-rows-1 grid-cols-1 gap-4 lg:grid-rows-2 lg:grid-cols-2 lg:gap-3 xl:grid-cols-3 xl:grid-rows-1 xl:gap-4">

                    <Card />

                </section>
            </div>

        </main>
    )
}