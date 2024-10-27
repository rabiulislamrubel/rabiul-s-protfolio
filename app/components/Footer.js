

export default function Footer() {
    const date = new Date();
    
    return (
        <footer className="h-12 bg-[#95A5A7] 2xl:h-20 center text-shadow font-bold lg:justify-end md:px-16 xl:px-28 2xl:px-40 2xl:text-xl">
            {date.getFullYear()} &copy; Created by Rabiul Islam.
        </footer>
    )
}