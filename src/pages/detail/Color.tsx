import { useState } from "react"
import { colors } from "../../utils/constants"
import { DetailProps } from "./Head"

const Color = ({ data }: DetailProps) => {
    const [scolors, setScolors] = useState<string>("")

    //üzerine tıklanan seçeneği state'de yoksa ekle varsa kaldır
    const toogle = (id: string) => {
        //state zaten seçili olana mı tıklandı
        const same = scolors === id;

        if (!same) {
            setScolors(id)
        } else {
            setScolors("")

        }
    }
    return (
        <div>
            <h2 className="font-semibold mb-3">Renkler</h2>


            <div className="flex gap-5">
                {data.color.split(",").map((id) => {
                    const color = colors.find((i) => i.id == id)
                    const isSelected = scolors === id;


                    return (
                        <div className={`p-1 ${isSelected && "ring ring-blue rounded-full"}`}>
                            <div
                                onClick={() => toogle(id)}
                                style={{ background: color?.code }} className={`size-8 rounded-full cursor-pointer `}>

                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Color