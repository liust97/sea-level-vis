import React from "react";
import Thermometer from 'react-thermometer-component'
import { Card } from 'antd';

class Dashboard extends React.Component {
    render() {
        return (
            <div style={{ margin: "2.5em" }}>
                <div style={{ opacity: 0.7 }}>
                    <Thermometer
                        theme="light"
                        value={this.props.temp}
                        max="1.0"
                        steps="0.01"
                        format="°C"
                        size="large"
                    />
                    </div>
                <Card style={{ marginTop: 50, backgroundColor: "rgba(255,255,255,0.5)", width: "9em" }} size="small" title="Carbon Dioxide">
                    <p>{this.props.co2}ppm</p>
                </Card>
            </div>
        );
    }
}

export default Dashboard;