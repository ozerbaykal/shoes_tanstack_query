import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
export type GenderProps = {
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const Gender = ({ selected, setSelected }: GenderProps) => {
    const [params, setParams] = useSearchParams()
    useEffect(() => {
        if (selected) {
            params.set("gender", selected)

        } else {
            params.delete("gender")
        }

        setParams(params)




    }, [selected])
    return (
        <div>
            <h2 className="font-semibold">Cinsiyet</h2>

            <div className="flex items-center gap-3">
                <input
                    checked={params.get("gender") === "men"}
                    onClick={() => setSelected("men")} type="radio" id="men" name="gen" />
                <label htmlFor="men">Erkek</label>
            </div>
            <div className="flex items-center gap-3">
                <input
                    checked={params.get("gender") === "women"}
                    onClick={() => setSelected("women")} type="radio" id="women" name="gen" />
                <label htmlFor="women">Kadın</label>
            </div>
        </div>
    );
};

export default Gender;
