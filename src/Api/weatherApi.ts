import {instance} from "./api";
import {AutoCompleteSearchType, CurrentCityType} from "../Types/types";

export const weatherApi = {
    async autocompleteSearch(searchString: string) {
        try {
            const result = await instance.get<AutoCompleteSearchType>('v1/search.json?key=1986480656ec490d950204923202611&q=' + searchString);
            return await result.data;
        } catch (err) {
            console.log(err);
        }
    },

    async getCurrentCityInfo(currentCity: string) {
        try {
            const result = await instance.get<CurrentCityType | undefined>('v1/current.json?key=1986480656ec490d950204923202611&q=' + currentCity);
            return await result.data;
        } catch (err) {
            console.log(err);
        }
    }
}

