import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="flex justify-between items-center rounded-[12px] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[24px] bg-white-fa p-4 md:p-5 lg:p-6 xl:p-8 mb-6 md:mb-10 lg:mb-15 xl:mb-20 ">
            <nav className=" flex gap-10 font-semibold items-center max-lg:hidden">
                <a>New Drops 🔥 </a>
                <a>Men</a>
                <a>Women</a>

            </nav>
            <button className="lg:hidden" >
                <img src="hamburger.svg" alt="" />
            </button>

            <Link className="w-[16%] max-w-[1280px] max-h-[32px] h-[20px]" to={"/"} >

                <img className="w-full h-full" src="logo.svg" />


            </Link>

            <div className="flex items-center gap-5 lg:gap-10">

                <img className="size-4 md:size-5 lg:size-6 xl:size-7 max-lg:hidden" src="search.svg " />
                <img className="size-4 md:size-5 lg:size-6 xl:size-7" src="user.svg" alt="" />
                <span className="size-6 md:size-7 md:text-lg lg:size-8 xl:size-9 bg-yellow rounded-full grid place-items-center font-open font-semibold ">0</span>


            </div>





        </header>
    )
}

export default Header