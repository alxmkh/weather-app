import React from 'react';
import "antd/dist/antd.css";
import {Card, Col, Row, Space} from "antd";
import { Complete } from './Components/InputData/InputData';
import { DisplayData } from './Components/DisplayWeather/DisplayData';
import Title from "antd/lib/typography/Title";

const App: React.FC<any> = () => {
    return (
            <Row>
                <Col span={12} offset={8}>
                    <Space direction="vertical">
                        <Card title={<Title level={3}>WeatherApp</Title>} style={{ width: 400}}>
                            <div style={{paddingBottom:20}}>
                                <Complete />
                            </div>
                            <DisplayData/>
                        </Card>
                    </Space>
                </Col>
            </Row>
    );
}

export default App;
