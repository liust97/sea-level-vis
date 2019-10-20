import React from "react";
import "./Ocean.css";

class Ocean extends React.Component {
    getPercentage (sealevel) {
        return (sealevel + 37.55)/160 * 100 + "%"
    }
    render() {
        return (
            <div className="ocean" style={{ height: this.getPercentage(this.props.sealevel) }}>
                <p className="des">Sea Level: {this.props.sealevel}mm</p>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        );
    }
}

export default Ocean