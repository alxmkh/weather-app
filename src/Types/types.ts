export type AutoCompleteSearchType = {
    result: Array<AutocompleteItem> | Array<null> | Array<undefined>
}

export  type CityType = {
    value: string
}


export type CurrentCityType = {
    location: Location
    current: CurrentType
}

type AutocompleteItem = {
    id: number,
    name: string | undefined | null,
    region: string,
    country: string,
    lat: number,
    lon: number,
    url: string,
}

type Location = {
    name: string,
    region: string,
    country: string,
    lat: number,
    lon: number,
    tz_id: string,
    localtime_epoch: number,
    localtime: string,
}

type CurrentType = {
    temp_c: number,
    temp_f: number,
    condition: {
        text: string,
        icon: string
    },
    wind_mph: number,
    wind_kph: number,
    wind_degree: number,
    wind_dir: string,
    humidity: number,
    cloud: number,
    feelslike_c: number,
    feelslike_f: number,
    uv: number
}

