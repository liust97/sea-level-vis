import React from "react";
import "./App.css";
import Ocean from "./components/Ocean";
import { Slider, Row, Col } from 'antd';
import Linedrawer from "./Linedrawer";
import Dashboard from "./components/Dashboard";
import BgParticles from "./components/BgParticles"

const data = require('./static/nasa_data.json');
const initialYear = 2019
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      year: initialYear,
      co2: parseFloat(data[initialYear]["co2"]),
      temp: parseFloat(data[initialYear]["temp"]),
      arctic: parseFloat(data[initialYear]["arctic"]),
      sealevel: parseFloat(data[initialYear]["sealevel"]),
      greenland: parseFloat(data[initialYear]["greenland"])
    };
    this.setBackgroundColor(initialYear);
    this.onYearChange.bind(this);
    console.log(data)
  }
  setBackgroundColor(value) {
    // h from 200 to 360, 
    const bcolor = `hsl(${65 - 70 * parseFloat(data[value]["temp"])}, 100%, 75%)`;
    document.getElementsByTagName('body')[0].style.backgroundColor = bcolor
  }
  onYearChange = value => {
    this.setState({
      year: value,
      co2: parseFloat(data[value]["co2"]),
      temp: parseFloat(data[value]["temp"]),
      arctic: parseFloat(data[value]["arctic"]),
      sealevel: parseFloat(data[value]["sealevel"]),
      greenland: parseFloat(data[value]["greenland"])
    });
    this.setBackgroundColor(value)
  }
  render() {
    return (
      <div className="App">

        <BgParticles co2={this.state.co2}></BgParticles>
        <div
          className="slider">
          <Slider
            min={1993}
            max={2019}
            defaultValue={initialYear}
            value={this.state.year}
            onChange={this.onYearChange}
          />
        </div>
        <Row type="flex" justify="space-between" >
          <Col span={4}>

            <Dashboard temp={this.state.temp} co2={this.state.co2} />
          </Col>
          <Col span={16}>

            <p className="year">{this.state.year}</p>
          </Col>
          <Col span={4}>

            <Linedrawer />
          </Col>
        </Row>
        <Ocean sealevel={this.state.sealevel} />
      </div>
    );
  }
}

export default App;