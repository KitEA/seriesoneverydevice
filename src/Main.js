import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import device from "./img/device.svg";
import laptop from "./img/laptop.svg";
import monitor from "./img/monitor.svg";

class Main extends Component {
    render () {
        return (
            <div className="container col-8 offset-2 rounded">
                <div className="row">
                    <div class="col-4 text-center" id="dealselect">
                        <img src={device} width="70" height="100" alt="Phone" />
                        <h5 className="nameprice"><strong>M O B I L E</strong></h5>
                        <p>Get notifications about new releases in our mobile app.</p>
                        <h2 className="nameprice"><i className="fa fa-usd currency"></i>10<span className="rate"> / month</span></h2>
                    </div>
                    <div class="col-4 text-center" id="dealselect">
                        <img src={laptop} width="70" height="100" alt="Laptop" />
                        <h5 className="nameprice"><strong>D E S K T O P</strong></h5>
                        <p>Enjoy new episodes on your laptop in browser with our web service, which supports all the platforms.</p>
                        <h2 className="nameprice"><i className="fa fa-usd currency"></i>15<span className="rate"> / month</span></h2>
                    </div>
                    <div class="col-4 text-center" id="dealselect">
                        <img src={monitor} width="70" height="100" alt="Laptop" />
                        <h5 className="nameprice"><strong>T V</strong></h5>
                        <p>Watch your favorite series at home on large screen with our TV application.</p>
                        <h2 className="nameprice"><i className="fa fa-usd currency"></i>20<span className="rate"> / month</span></h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;