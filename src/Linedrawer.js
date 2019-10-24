import React from "react";
import { Drawer, Button } from 'antd';
import App from "./App";
import Linechart from "./components/Linechart";

class Linedrawer extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Data
        </Button>
        <Drawer
          title="Data Visualization"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          width="700"
        >
        <Button
          style={{
            marginRight: 8,
            float:"right"
          }}
          onClick={this.onClose}
        >
          close
          </Button>
          <Linechart />

        </Drawer>
      </div>
    );
  }
}

// ReactDOM.render(<lineDrawer />, mountNode);

export default Linedrawer;