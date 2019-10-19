import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import Ocean from "./components/Ocean";
import { Slider } from 'antd';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      year: 2019,
      seaHeight: "20%"
    };
    this.onYearChange.bind(this)

  }
  onYearChange = value => {
    this.setState({seaHeight: (value-1990)/40 * 100 + "%"})
  }
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Sea Level Visualization</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        <Slider
          min={1990}
          max={this.state.year}
          defaultValue={this.state.year}
          onChange={this.onYearChange}
          tooltipVisible
        />

        <Routes />
        <Ocean seaHeight={this.state.seaHeight} />
      </div>
    );
  }

}

export default App;