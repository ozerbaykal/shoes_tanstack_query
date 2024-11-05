import { Shoe } from "../../types"

type Props = {
    item: Shoe,

}

const Price = ({ item }: Props) => {
    let price = item.price

    if (item.discount) {
        price = item.price * (100 - item.discount) / 100
    }



    return (
        <div className={item.discount ? "text-yellow" : "text-white"}>
            ${price}
            {item.discount && (
                <span className="ps-2 line-through max:xl:hidden">{item.price}</span>
            )

            }

        </div>
    )
}

export default Price