import {InferActionsTypes} from "./store";
import * as _ from 'lodash';

let initialState = {
    tzId: '-',
    city: '-',
    temperatureC: '-',
    temperatureF: '-',
    feelsLikeC: '-',
    feelsLikeF: '-',
    isCelsius: true
}

const weatherReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case 'WEATHER/SET_WEATHER':
            return _.merge(state, action.payload)
        case 'WEATHER/SET_FORMAT':
            return _.merge(state, action.payload)
        case 'WEATHER/GET_WEATHER':
            return state;
        default:
            return state;
    }
}

export const actions = {
    setWeather: (tzId: string, city: string, temperatureC: number,
                 temperatureF: number, feelsLikeC: number, feelsLikeF: number, isCelsius: boolean) =>
        ({type: 'WEATHER/SET_WEATHER', payload: {tzId, city, temperatureC, temperatureF, feelsLikeC, feelsLikeF, isCelsius}} as const),
    getWeather: () => ({type: 'WEATHER/GET_WEATHER'} as const),
    setFormat: (isCelsius: boolean) => ({type: 'WEATHER/SET_FORMAT', payload: {isCelsius}} as const),
}

export default weatherReducer;
type ActionsTypes = InferActionsTypes<typeof actions>;
type InitialState = typeof initialState;