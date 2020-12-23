import React, {useState} from 'react';
import {AutoComplete, Switch} from 'antd';
import {weatherApi} from "../../Api/weatherApi";
import {useDispatch, useSelector} from 'react-redux'
import {actions} from "../../Redux/weather-reducer";
import {CityType} from "../../Types/types";
import {AppStateType} from "../../Redux/store";

export const Complete: React.FC = React.memo(() => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState<{ value: string }[]>([]);
    let cities: Array<CityType> = [];
    let isCelsius = useSelector((state: AppStateType) => state.weatherReducer.isCelsius);
    const dispatch = useDispatch();
    const onSearch = (searchText: string) => {
        fillAutocomplete(searchText);
    };

    const fillAutocomplete = (text: string) => {
        if (text.length > 0) {
            const data = weatherApi.autocompleteSearch(text);
            data.then(result => {
                if (result !== undefined && result instanceof Array) {
                    result.map((c: { name: string }) => cities.push({'value': c.name}));
                }
            }).then(() => setOptions(
                !text ? [] : cities
            )).catch(err => {
                console.log(err)
            })
        }
    }

    const setCurrentCityInfo = (city: string) => {
        const data = weatherApi.getCurrentCityInfo(city);

        data.then(result => {
            if (result !== undefined) {
                dispatch(actions.setWeather(result.location.tz_id, result.location.name, result.current.temp_c,
                    result.current.temp_f, result.current.feelslike_c, result.current.feelslike_f, isCelsius));

            }
        }).catch(err => {
            console.log('Error dispatching data: ', err);
        })
    }

    const onSelect = (data: string) => {
        setCurrentCityInfo(data);
    };

    const onChange = (data: string) => {
        setValue(data);
    };
    const onChangeSwitch = (value: boolean) => {
        dispatch(actions.setFormat(value));
    }

    return (
        <>
            <div>
                <AutoComplete
                    value={value}
                    options={options}
                    style={{width: 300}}
                    onSelect={onSelect}
                    onSearch={onSearch}
                    onChange={onChange}
                />
            </div>
            <div style={{marginTop: 25}}>
                <Switch checkedChildren="C"
                        unCheckedChildren="F"
                        defaultChecked
                        onChange={onChangeSwitch}/>
            </div>
        </>
    );
})