type Props = {
    discount?: number,
}
const Badge = ({ discount }: Props) => {
    return (
        <span className={`absolute text-white ${discount ? "bg-yellow" : "bg-blue"} rounded-tl-[12px] rounded-br-[12px] md:rounded-tl-[24px] md:rounded-br-[24px] px-[8px] py-[4px] md:px-[16px] md:py-[14px] `} >
            {discount ? `%${discount} indirim` : "Yeni"}
        </span>
    )
}

export default Badge