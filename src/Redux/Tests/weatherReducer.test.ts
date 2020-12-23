import {actions} from "../weather-reducer";

let state = {
    tzId: "Europe/Moscow",
    city: "Moscow",
    temperatureC: 1,
    temperatureF: 33.8,
    feelsLikeC: -2.8,
    feelsLikeF: 27,
    isCelsius: true
}

describe('Test action creators.', () => {
    it('Set city info to state.', () => {
        const expectedAction = {
            type: 'WEATHER/SET_WEATHER',
            payload: {
                tzId: "Europe/Moscow",
                city: "Moscow",
                temperatureC: 1,
                temperatureF: 33.8,
                feelsLikeC: -2.8,
                feelsLikeF: 27,
                isCelsius: true
            }
        }
        expect(actions.setWeather(state.tzId, state.city, state.temperatureC, state.temperatureF,
            state.feelsLikeC, state.feelsLikeF, state.isCelsius))
            .toEqual(expectedAction)
    })

    it('Get weather current city.', () => {
        actions.setWeather(state.tzId, state.city, state.temperatureC, state.temperatureF,
            state.feelsLikeC, state.feelsLikeF, state.isCelsius)
        const expectedAction = {
            type: 'WEATHER/GET_WEATHER',
        }
        expect(actions.getWeather()).toEqual(expectedAction);
    })

    it('Set format data (C || F).', () => {
        const expectedAction = {
            type: 'WEATHER/SET_FORMAT',
            payload: {
                isCelsius: false
            }
        }
        expect(actions.setFormat(false))
            .toEqual(expectedAction)
    })
})


