import axios from "axios";
//https://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=Moscow
export const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://api.weatherapi.com/',
    headers: {
        "key": "1986480656ec490d950204923202611",
    }
});
