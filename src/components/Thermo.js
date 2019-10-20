import React from "react";
import Thermometer from 'react-thermometer-component'
import { Card } from 'antd';
const style = {
    position: 'absolute',
    height: '70%',
    left: 25,
    top: 50
};

class Thermo extends React.Component {
    render() {
        return (
            <div style={style}>

                <Thermometer
                    theme="light"
                    value={this.props.temp}
                    max="1.0"
                    steps="0.01"
                    format="°C"
                    size="large"
                />
                <Card style={{ marginTop: 50 }}>
                Carbon Dioxide: {this.props.co2}ppm
                </Card>,
            </div>  
        );
    }
}

export default Thermo;