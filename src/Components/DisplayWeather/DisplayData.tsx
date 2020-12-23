import React from 'react';
import {Statistic, Row, Col} from 'antd';
import moment from 'moment';
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/store";

export const DisplayData: React.FC = () => {

    const city = useSelector((state: AppStateType) => state.weatherReducer.city);
    const isCelsius = useSelector((state: AppStateType) => state.weatherReducer.isCelsius);
    const temperatureC = useSelector((state: AppStateType) => state.weatherReducer.temperatureC);
    const temperatureF = useSelector((state: AppStateType) => state.weatherReducer.temperatureF);
    const feelsLikeC = useSelector((state: AppStateType) => state.weatherReducer.feelsLikeC);
    const feelsLikeF = useSelector((state: AppStateType) => state.weatherReducer.feelsLikeF);

    return (
        <>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="City" value={city}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Date" value={moment().format('MMM Do YY')}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Temperature" value={isCelsius ? temperatureC : temperatureF}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Feels like" value={isCelsius ? feelsLikeC : feelsLikeF}/>
                </Col>
            </Row>
        </>
    )
};

