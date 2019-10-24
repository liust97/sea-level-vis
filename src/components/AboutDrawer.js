import React from "react";
import { Drawer, Button } from 'antd';
class AboutDrawer extends React.Component {
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
          About
        </Button>
        <Drawer
          title="About"
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
          width="350"
        >
            <p>This project is developed during 2019 NASA’s International Space Apps Challenge,
                by Sitong Liu and Yankun Shen.
            </p>
            <p><a href="https://github.com/liust97/sea-level-visual">Github Link</a></p>
        </Drawer>
      </div>
    );
  }
}

// ReactDOM.render(<lineDrawer />, mountNode);

export default AboutDrawer;