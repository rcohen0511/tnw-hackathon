import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "weight": 0,
            "beer_consumed": 0,
            "consumed_pct": 50
        };
    }

    componentDidMount() {
        //     axios.get('https://eugenech.lib.id/test-service@dev/')
        //         .then((res) => {
        //            console.log(res);
        //         });
        //     setInterval(()=> {
        //         this.setState({
        //             weight: this.state.weight + 1
        //         })
        //     }, 5000);
        // }
        setInterval(()=> {
            // this.setState({
            //     weight: this.state.weight + 1
            // })
            axios.get('https://tnwchris.lib.id/testing@dev/get/')
                .then((res) => {
                    let weight = parseInt(parseInt(res.data) / 28);
                    let beer_consumed = 14-weight;
                    let pct = parseInt((beer_consumed/14)*100);
                    console.log(pct);
                    this.setState({
                        weight: weight,
                        beer_consumed: beer_consumed,
                        consumed_pct: pct,
                    })
                    //console.log(parseInt(res.data));
                });
        }, 5000);

    }
    render() {
        let stylePct = {width: this.state.consumed_pct + "%"};
        let percent_complete = this.state.consumed_pct + "%";
        return (
            <div className="App">
                {/*<header className="App-header">*/}
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<h1 className="App-title">Welcome to React</h1>*/}
                {/*</header>*/}
                {/*<p className="App-intro">*/}
                {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                <div style={{fontSize: "42px", border: "1px black solid", padding: "50px", width: "700px"}}>

                    <div style={{marginTop: "25px"}}>Current Weight: <div style={{ fontSize: "48px", display: "inline", color: "red"}}>{this.state.weight}</div> oz</div>
                    <div style={{marginTop: "10px"}}>Beer Consumed: {this.state.beer_consumed} oz</div>

                    <div style={{padding: "25px"}}>
                        <div style={{width: "200px", margin: "auto"}} class="progress">
                            <div class="progress-bar" role="progressbar" style={stylePct} aria-valuenow="25"
                                 aria-valuemin="0"
                                 aria-valuemax="100">{percent_complete}
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop: "10px"}}>Chug Vote: 19 votes</div>
                </div>
            </div>
        );
    }
}

export default App;
