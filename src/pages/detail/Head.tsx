import Badge from "../../components/list/Badge"
import Price from "../../components/list/Price"
import { Shoe } from "../../types"

export type DetailProps = {
    data: Shoe
}

const Head = ({ data }: DetailProps) => {
    let price = data.price;
    if (data.discount) {
        price = data.price * (100 - data.discount) / 100

    }
    return (
        <div>
            <Badge discount={data.discount} />
            <h1 className="font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[55px] mt-[60px]"> {data.name}
            </h1>

            <p className="text-[24px] mt-4 ">
                <span className="text-blue">{price}</span>

                {data.discount && <span className="line-through ps-3">{data.price}</span>}
            </p>

        </div>
    )
}

export default Head