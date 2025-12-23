
import Image from "next/image"

const projects = [
    {
        id: "#1",
        title: "Alo Chaya Cine",
        thumb: "/project_card_img.png",
        description: "Alo Chaya Cine is a dynamic and fully responsive movie web application designed for a seamless user experience. The platform allows users to explore, purchase, and manage their favorite movies with intuitive interaction and real-time feedback.",
        link: "https://alo-chaya-cine.vercel.app/"
    },
    {
        id: "#2",
        title: "Weather App",
        thumb: "/project_card_img.png",
        description: "Weather App is a feature-rich, responsive application that delivers real-time weather updates based on the user’s location. Designed with a focus on usability and visual experience, it integrates dynamic weather data and adapts its interface to current weather conditions.",
        link: "https://live-weather-app-snowy.vercel.app/"
    },
    {
        id: "#3",
        title: "React Form Project",
        thumb: "/project_card_img.png",
        description: "Developed a responsive React website using React Hook Form to efficiently manage form state and validation. Focused on clean component structure, reliable form submissions, improved user experience, and maintainable, high-performance front-end code.",
        link: "https://react-hook-form-project-chi.vercel.app/"
    }
]

export default function Card() {
    return (
        <>
            {
                projects.map((item) => (
                    <div key={item.id} className="card">
                        <div className="lg:flex lg:justify-center lg:items-center">
                            <Image height={270} width={380} src={item.thumb} alt="Projects Images" className="max-sm:mb-3" />
                        </div>
                        <div className="">
                            <h1 className="text-3xl font-bold text-shadow mb-1">{item.title}</h1>
                            <p className="text-shadow font-bold mb-1">{item.description}</p>
                            <a target="blank" href={item.link} className="text-shadow font-bold text-xl">Live site link</a>
                        </div>
                    </div>
                ))
            }
        </>

    )
}