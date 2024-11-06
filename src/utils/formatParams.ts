
type UrlParams = {
    color?: string;
    gender?: string;
    price?: string;
    size?: string;
};

function formatParams(params: UrlParams): string {
    let urlString = "?";

    for (const [key, value] of Object.entries(params)) {
        if (!value) continue;

        if (key === "color" || key === "size") {
            // Split ile value değerlerini values dizisine al ve bunları foreach ile dönerek _like=value& şekline çevir
            const values = value.split(",");
            values.forEach((v) => {
                urlString += `${key}_like=${encodeURIComponent(v)}&`;
            });
        } else if (key === "price") {
            //  price'a "_lte" ekle
            urlString += `${key}_lte=${encodeURIComponent(value)}&`;
        } else {
            urlString += `${key}=${encodeURIComponent(value)}&`;
        }
    }

    // Son & işaretini kaldrımak için slice kullanıyoruz
    return urlString.slice(0, -1);
}
export default formatParams