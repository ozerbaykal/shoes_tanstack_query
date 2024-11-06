type Props = {
    data: string[],

}
const Picture = ({ data }: Props) => {
    return (
        <div className="xl:col-span-2 grid grid-cols-2 gap-4 rounded-[48px] h-fit">
            {data.map((url, i) =>

                <img key={i} src={url} />



            )}

        </div>
    )
}

export default Picture