import React, { Component  } from 'react';
import { Badge } from 'react-bootstrap';
import CartImg from '../../img/cart.svg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Map } from 'immutable';
import { Glyphicon } from 'react-bootstrap';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            hiddenCart: []
        }
        
    }
        clickedCart = () => {
           document.getElementById('hidecart').classList.remove('hiddenCRT'); 
           document.getElementById('hidecart').classList.remove('hidden'); 
           document.getElementById('hidecart').classList.add('visible');
           
            };
        clickedCloseCart = () => {
            document.getElementById('hidecart').classList.remove('visible'); 
            document.getElementById('hidecart').classList.add('hiddenCRT');
        }
        
    render() {
        const len = this.props.planets;
        return(
            <div className="cartWrapper">
                <div className="hidden_cart hidden" id="hidecart"><div id="closeCart" onClick={this.clickedCloseCart}>
                    <Glyphicon glyph="glyphicon glyphicon-remove"/>
                 </div>
                <ul id="ul_cart">{this.props.planetsNames.map(el=>{
                    return <li key={el}>
                                <img src={require('../../img/' + el + '.svg')} width="50px" alt={el}/>{el}
                            </li>})}
                 </ul>
            </div>
            <div className="cart"><img src={CartImg} onClick={this.clickedCart} width="60px" id="img_cart"/><Badge>{len}</Badge></div>
            </div>
        )
    }
}

export default Cart;