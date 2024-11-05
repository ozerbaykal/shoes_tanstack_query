import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3050",
});
//büyün ayakkabı verilerini alan fon
export const getShoes = () =>
    api.get("/shoes").then((res) => res.data);

