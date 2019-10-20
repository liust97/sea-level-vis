import React from "react"; 
import { Line } from "react-chartjs-2";


const dataSrc = require('../static/nasa_data.json');
const colors = ["#78ce90", "#b977ce", "#fac76e", "#de4d4d"];

console.log(dataSrc);

console.log(dataSrc.keys);

const data = {
    labels : Object.keys(dataSrc),
    datasets : [
        {
            label: 'Year',
            fill: false,
            lineTension: 0.1,
            backgroundColor: colors,
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 10,
            pointHoverRadius: 50,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 0.3,
            pointHitRadius: 6,
           data : Object.values(dataSrc).map(curr => curr["sealevel"]), 
        },
    ],
};



const data2 = {
  labels : Object.keys(dataSrc),
  
  
  datasets : [
      {
          label: 'Year',
          fill: false,
          lineTension: 0.1,
          backgroundColor: colors,
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 10,
          pointHoverRadius: 50,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
        
          data : Object.values(dataSrc).map(curr => curr["temp"])
      },
  ],
};

const data3 = {
  labels : Object.keys(dataSrc),
  
  
  datasets : [
      {
          label: 'Year',
          fill: false,
          lineTension: 0.1,
          backgroundColor: colors,
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 10,
          pointHoverRadius: 50,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
        
          data : Object.values(dataSrc).map(curr => curr["co2"])
      },
  ],
};

const getOptions = (showLabelX, showLabelY) => {
  return {
    legend: {
      display: true,
      position: "right"
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true
          },
          ticks: {
            display: showLabelX ? true : false,
            minRotation: 0
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false
          },
          scaleLabel: {
            display: true
          },
          ticks: {
            display: showLabelY ? true : false,
            minRotation: 0
          }
        }
      ]
    }
  };
};


class Linechart extends React.Component{
    state = { showLabelX: true, showLabelY: true };

    
    onChangeShowX = () => this.setState({ showLabelX: !this.state.showLabelX });
    onChangeShowY = () => this.setState({ showLabelY: !this.state.showLabelY });

    render() {
      const options = getOptions(this.state.showLabelX, this.state.showLabelY);
      return (
        <div>
          <h2>Sea Level Changes</h2>
          <Line data={data} width={100} height={50}
            options={options}
            redraw={true}
            ref="chart"
          />
          <h2>Temperature Changes</h2>
          <Line data={data2} width={100} height={50}
            options={options}
            redraw={true}
          />
          
          <h2>CO2 Changes</h2>
          <Line data={data3} width={100} height={50}
            options={options}
            redraw={true}
          />

        </div>
      );
    }
  }

  export default Linechart;