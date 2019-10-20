import Particles from 'react-particles-js';
import React from "react";


const style = {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
}

class BgParticles extends React.Component {


    // componentDidUpdate () {
    //     console.log(this.state.co2)
    // }

    render() {
        return (
            <div>
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": (this.props.co2 - 354) * 10,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "speed": 4,
                                    "size_min": 0.3
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": true,
                                "speed": 1,
                                "direction": "top",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "bubble"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 5,
                                    "opacity": 0.5
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            }
                        }
                    }
                    }
                    class="parts"
                    ref='parts'
                    style={style}>
                </Particles>
            </div>
        );
    }
}

export default BgParticles;