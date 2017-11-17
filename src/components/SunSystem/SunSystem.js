import React, { Component  } from 'react';
import  Sun from '../../img/Sun-animated-.gif';
import  Earth from '../../img/earth.svg';
import Mars from '../../img/mars.svg';
import Sat from '../../img/sat.svg';
import Logo from '../../logo.svg'
import Cart  from '../Cart/Cart';
import Astro from '../../img/astronaut.svg'
import { OverlayTrigger, Tooltip} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import { addPlanet } from '../../actions/planets.actions';

class SunSystem extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
          planetsInCart: '',
          prices: [],
          num: 0,
        }
      }

      planetClick = (e)=>{
          const nums = this.state.num;
           this.setState({
               num: nums + 1, 
           })
           this.props.addPlanet(e.target.id);

      }
    render() {
        const yeah = () =>{
           
            if (this.state.num === 1) {
                console.log('Yeah, you hust Buy your first Planet!!!');
                return <center className="op" id="yeah"><span><img src={Astro} alt="astonaut" width="50px"/><br/>Yeah! You buy Your First Planet! Check Your Cart</span></center>

            } else if (this.state.num > 1) {
                return false
                
            } 
            
        }
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
            <span className="hello"><img src={Logo} alt="logo" width="60px"/>Here You can buy Your own planet. Just <strong>click</strong> it</span> 
            {yeah()}
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

export default connect((state)=>{
    return {
        pl: state
    };
}, 
(dispatch) => {
    return {
        addPlanet: (planet) => {
            dispatch(addPlanet(planet));
        }
    }
}
)(SunSystem);