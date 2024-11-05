import Filter from "../../components/filter"
import List from "../../components/list"
import Hero from "./Hero"

const Home = () => {
    return (
        <div >
            <Hero />
            <h1 className="text-[20px] md:text-[26px] lg:text-[30px] xl:text-[36px] mt-[24px] md:mt-[28px] xl:mt-[32px] font-semibold">
                Sana Uygun seçenekler
            </h1>
            <div>
                <Filter />
                <List />
            </div>
        </div>
    )
}

export default Home