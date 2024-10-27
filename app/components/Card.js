
import Image from "next/image"

export default function Card({image}) {
    return (
        <div className="card">
            <div className="lg:flex lg:justify-center lg:items-center">
                <Image height={270} width={380} src={image} alt="Projects Images" className="max-sm:mb-3" />
            </div>
            <div className="">
                <h1 className="text-3xl font-bold text-shadow mb-1">Project Title</h1>
                <p className="text-shadow font-bold mb-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum necessitatibus quasi nemo voluptatem, sint dolores? Minima dolore excepturi libero illo!</p>
                <button type="button" className="text-shadow font-bold text-xl">Live site link</button>
            </div>
        </div>
    )
}