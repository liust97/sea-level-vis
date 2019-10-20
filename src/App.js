import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import Ocean from "./components/Ocean";
import { Slider } from 'antd';

const data = require('./static/nasa_data.json');
const initialYear = 2019
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      year: initialYear,
      co2: parseInt(data[initialYear]["co2"]),
      sealevel: parseInt(data[initialYear]["sealevel"])
    };
    this.setBackgroundColor(initialYear);
    this.onYearChange.bind(this);
    console.log(data)
  }
  setBackgroundColor(value) {
    const bcolor = `hsl(197, 71%, ${430-this.state.co2}%)`;
    document.getElementsByTagName('body')[0].style.backgroundColor = bcolor
  }
  onYearChange = value => {
    this.setState({year: value, 
      sealevel: parseInt(data[value]["sealevel"]),
      co2: parseInt(data[value]["co2"])
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

        <p className="year">{this.state.year}</p>
        <p>{this.state.co2}</p>
        <Ocean sealevel={this.state.sealevel} />
      </div>
    );
  }

}

export default App;