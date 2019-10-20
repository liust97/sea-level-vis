import React from "react";  
import "./App.css";
import Ocean from "./components/Ocean";
import Thermometer from "./components/Thermometer";
import { Slider } from 'antd';

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
    const bcolor = `hsl(${26.4-80.6*this.state.temp}, 100%, 67%)`;
    document.getElementsByTagName('body')[0].style.backgroundColor = bcolor
  }
  onYearChange = value => {
    this.setState({year: value,
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
      <div className="App container">
        <Slider
          min={1993}
          max={2019}
          defaultValue={initialYear}
          value={this.state.year}
          onChange={this.onYearChange}
          tooltipVisible
        />
        <Thermometer temp={this.state.temp} />
        <p className="year">{this.state.year}</p>
        <p>{this.state.co2}</p>
        <Ocean sealevel={this.state.sealevel} />
      </div>
    );
  }

}

export default App;