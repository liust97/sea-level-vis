import React from "react";
import "./App.css";
import Ocean from "./components/Ocean";
import { Slider, Drawer } from 'antd';
import Linedrawer from "./Linedrawer";
import Thermo from "./components/Thermo";
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
    const bcolor = `hsl(${65 - 70 * this.state.temp}, 100%, 75%)`;
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
      <div className="App container">

        <BgParticles co2={this.state.co2}></BgParticles>
        <Linedrawer/>
        <Slider
          min={1993}
          max={2019}
          defaultValue={initialYear}
          value={this.state.year}
          onChange={this.onYearChange}
          tooltipVisible
        />
        <p className="year">{this.state.year}</p>
        <Thermo temp={this.state.temp} co2={this.state.co2}/>
        <Ocean sealevel={this.state.sealevel} />
      </div>
    );
  }
}

export default App;