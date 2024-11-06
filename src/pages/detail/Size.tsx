import { useState } from "react";
import { numbers } from "../../utils/constants";
import { DetailProps } from "./Head";

const Size = ({ data }: DetailProps) => {
    const [selected, setSelected] = useState<string>("")



    //üzerine tıklanan seçeneği state'de yoksa ekle varsa kaldır
    const toogle = (id: string) => {
        //state zaten seçili olana mı tıklandı
        const same = selected === id;

        if (!same) {
            setSelected(id)
        } else {
            setSelected("")

        }
    }
    //mevcut numaralar
    const stockSize = data.size.split(",");

    return (
        <div className="lg:mt-5 ">
            <h2 className="mb-4 font-semibold">Numara</h2>

            <div className="grid grid-cols-5 gap-4">

                {numbers.map((num, key) => {
                    //numara seçilimi
                    const found = selected === num
                    //stokta varmı
                    const inStock = stockSize.includes(num)

                    return (
                        <button
                            disabled={!inStock}
                            onClick={() => toogle(num)} key={key} className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer hover:bg-zinc-400 disabled:bg-[#D2D1D3] disabled:text-[#8F8C91] ${found ? "bg-black text-white" : "bg-white"}`}
                        >
                            {num}
                        </button>
                    )

                })}




            </div>
        </div>
    )
}

export default Size