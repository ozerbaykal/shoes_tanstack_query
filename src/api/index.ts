import axios from "axios";
import formatParams from "../utils/formatParams";

const api = axios.create({
    baseURL: "http://localhost:3050",
});

//url'den gelen parametre nesnesi bu şekilde
const urlParams = {
    color: "blue,light-gray",
    gender: "men",
    price: "371",
    size: "40,41",
};

//api'a gönderilecek parametre stringi bu şekilde

const url =
    "?color_like=blue&color_like=light-gray&size_like=40&size_like=41&gender=men&price_lte=371"




//bütün ayakkabı verilerini alan fon
export const getShoes = (params: string) => api.get(`/shoes${params}`).then((res) => res.data);
