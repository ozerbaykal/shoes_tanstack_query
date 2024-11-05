type Props = {
    info: string
}
const Error = ({ info }: Props) => {
    return (
        <div className="my-20 grid place-items-center ">
            <p>Üzgünüz bir hata oluştu :( </p>

            <p className="bg-red-400 rounded-md my-2 py-2 px-2 ">{info}</p>



        </div>
    )
}

export default Error