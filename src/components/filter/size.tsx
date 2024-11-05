import { numbers } from "../../utils/constants"

const Size = () => {
    return (
        <div className="lg:mt-5 ">
            <h2 className="mb-4">Numara</h2>

            <div className="grid grid-cols-5 gap-4">
                {numbers.map((num) => <p className="py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer hover:bg-zinc-400 ">{num}</p>

                )}

            </div>
        </div>
    )
}

export default Size