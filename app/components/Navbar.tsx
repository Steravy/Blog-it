import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";

const Navbar = () => {
    return (
        <header className="bg-slate-800 p-4 sticky top-0 drop-shadow-xl z-10 ">

            <nav className="prose prose-xl mx-auto flex justify-between items-center flex-col sm:flex-row" >
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white">Blog it</Link>
                </h1>

                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-xl lg:text-2xl">
                    <Link className="text-white/90 hover:text-white" href="https://www.youtube.com/@DaveGrayTeachesCode">
                        <FaYoutube />
                    </Link>

                    <Link className="text-white/90 hover:text-white" href="https://courses.davegray.codes/">
                        <FaLaptop />
                    </Link>

                    <Link className="text-white/90 hover:text-white" href="https://github.com/gitdagray">
                        <FaGithub />
                    </Link>

                    <Link className="text-white/90 hover:text-white" href="https://twitter.com/yesdavidgray">
                        <FaTwitter />
                    </Link>
                </div>
            </nav>

        </header>
    )
}

export default Navbar;