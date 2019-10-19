import React from "react";
import "./Ocean.css";

class Ocean extends React.Component {
    render() {
        return (
            <div className="ocean" style={{ height: this.props.seaHeight }}>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        );
    }
}

export default Ocean