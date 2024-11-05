import { useQuery } from "@tanstack/react-query";
import { getShoes } from "../../api";
import Error from "../error";
import Loader from "../loader";
import Card from "./Card";
import { Shoe } from "../../types";

const List = () => {
    const { isLoading, error, data } = useQuery<Shoe[]>({
        queryKey: ["shoes"],
        queryFn: () => getShoes(),
    });
    console.log(data)
    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : error ? (
                <Error info={error.message} />
            ) : (
                data &&
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 md:gap-y-8 xl:gap-y-10">
                    {data.map((item, key) => < Card key={key} item={item} />)}

                </div>
            )}
        </div>
    );
};

export default List;
