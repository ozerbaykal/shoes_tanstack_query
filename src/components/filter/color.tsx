import { useSearchParams } from "react-router-dom";
import { FilterProps } from "./size";
import { useEffect } from "react";
import { colors, numbers } from "../../utils/constants";



const Color = ({ selected, setSelected }: FilterProps) => {
    const [params, setParams] = useSearchParams();

    //state her değiştiğinde url'deki parametreleri güncelle
    useEffect(() => {
        if (selected.length > 0) {
            //seçili elemaları url e ekle(,koy)
            params.set("color", selected.join(","))
        } else {
            //seçili numara yoksa parametreyi kaldır
            params.delete("color")
        }
        setParams(params)
    }, [selected])


    //üzerine tıklanan seçeneği state'de yoksa ekle varsa kaldır
    const toogle = (num: string) => {
        const found = selected.includes(num);

        if (!found) {
            setSelected([...selected, num])
        } else {
            setSelected(selected.filter((i) => i !== num))

        }
    }

    return (
        <div className="lg:mt-5 ">
            <h2 className="mb-4">Renk</h2>

            <div className="grid grid-cols-5 gap-4">

                {colors.map((color, key) => {
                    //numara seçilimi
                    const found = selected.includes(color.id)

                    return (
                        <p onClick={() => toogle(color.id)} key={key} style={{ background: color.code }} className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer text-transparent select-none  hover:bg-zinc-400 ${found ? "ring-[4px]" : " "}`}
                        >
                            .
                        </p>
                    )

                })}




            </div>
        </div>
    )
}

export default Color