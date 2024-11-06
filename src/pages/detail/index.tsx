import { useQuery } from "@tanstack/react-query"
import { getShoe } from "../../api"
import { useParams } from "react-router-dom"
import { Shoe } from "../../types"
import Loader from "../../components/loader"
import Error from "../../components/error"
import Picture from "./picture"
import Head from "./Head"
import Color from "./Color"
import Size from "./Size"

const Detail = () => {
    const { id } = useParams()



    const { isLoading, error, data } = useQuery<Shoe>({
        queryKey: ["shoe"],
        queryFn: () => getShoe(id || " ")

    })

    if (isLoading) return <Loader />

    if (error) return <Error info={error.message} />;

    if (!data) return;


    return (
        <section className="mt-8 grid grid-cols md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-4">

            <Picture data={data.picture} />




            <div className="flex flex-col gap-8">
                <Head data={data} />
                <Color data={data} />
                <Size />

            </div>

        </section>
    )
}

export default Detail