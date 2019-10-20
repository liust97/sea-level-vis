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
      <div style={{position:"absolute", right: 15, top: 50}}>
        <Button type="primary" onClick={this.showDrawer}>
          Open
        </Button>
        <Drawer
          title="Data Visualization"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          height = "700"
          width = "700"
        >
            <Linechart/>
           
        </Drawer>
      </div>
    );
  }
}

// ReactDOM.render(<lineDrawer />, mountNode);

export default Linedrawer;