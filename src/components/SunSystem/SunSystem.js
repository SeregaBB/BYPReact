import React, { Component  } from 'react';
import  Sun from '../../img/Sun-animated-.gif';
import  Earth from '../../img/earth.gif';
import Mars from '../../img/mars.gif';
import Sat from '../../img/sat.gif';

import Cart  from '../Cart/Cart';
import { OverlayTrigger, Tooltip} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';


class SunSystem extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
          planetsInCart: [],
          prices: [],
          num: 0,
        }
      }

      planetClick = (e)=>{
          const planetId = e.target.id;
          const plntCart = this.state.planetsInCart;
          plntCart.push(planetId);
          const nums = this.state.num;
           this.setState({
               num: nums + 1,
               planetsInCart: plntCart, 

           })
      }
    render() {
        
        const tooltipSun = (
            <Tooltip id="tooltip">It's a sun (not for sale)</Tooltip>
          );
          const tooltipEarth = (
            <Tooltip id="tooltip">Earth</Tooltip>
          );
          const tooltipMars= (
            <Tooltip id="tooltip">Mars</Tooltip>
          );
          const tooltipSat = (
            <Tooltip id="tooltip">Saturn</Tooltip>
          );
        return(

        <div>
            <Cart planets={this.state.num}/>
            <span className="hello">Here You can buy your own planet</span> 
            
            <center className="cntr">
                <div className="spin" id="planet3">
                    <OverlayTrigger placement="top" overlay={tooltipMars}><img onClick={this.planetClick} src={Mars} alt="" className="planet" id="mars"/></OverlayTrigger>
                <div className="spin" id="planet2">
                <OverlayTrigger placement="top" overlay={tooltipEarth}><img onClick={this.planetClick} src={Earth} alt="" className="planet" id="earth"/></OverlayTrigger>
                <div className="spin"id="planet1">
                <OverlayTrigger placement="top" overlay={tooltipSun}><img id="sun" src={Sun} alt="" width="50px" /></OverlayTrigger>
                <OverlayTrigger placement="top" overlay={tooltipSat}><img onClick={this.planetClick} src={Sat}alt="" className="planet" id="sat"/></OverlayTrigger>
                </div>
            </div>
        </div>
        </center>
        </div>
        )
    }
}

export default SunSystem;