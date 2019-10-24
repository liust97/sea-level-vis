import React from "react";
import { Drawer, Button } from 'antd';
import Linechart from "./Linechart";

class GraphDrawer extends React.Component {
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
      <div style={{ marginRight: "2em", marginTop: "2em" }}>
        <Button type="primary" onClick={this.showDrawer}>
          Data
        </Button>
        <Drawer
          title="Data Visualization"
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
          width="700"
        >
          <Linechart />

        </Drawer>
      </div>
    );
  }
}

// ReactDOM.render(<lineDrawer />, mountNode);

export default GraphDrawer;