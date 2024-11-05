import { useState } from "react"
import Filter from "../../components/filter"
import List from "../../components/list"
import Hero from "./Hero"

const Home = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    return (
        <div >
            <Hero />
            <h1 className="text-[20px] md:text-[26px] lg:text-[30px] xl:text-[36px] mt-[24px] md:mt-[28px] xl:mt-[32px] font-semibold">
                Sana Uygun seçenekler
            </h1>
            <div className="grid grid-cols-4 gap-5">
                <Filter isOpen={isOpen} close={() => setIsOpen(false)} />
                <List />
            </div>
        </div>
    )
}

export default Home