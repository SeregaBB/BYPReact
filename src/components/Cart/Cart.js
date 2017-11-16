import React, { Component  } from 'react';
import { Badge } from 'react-bootstrap';
import CartImg from '../../img/cart.svg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        
    }

    render() {
        const len = this.props.planets;
        return(

            <div className="cart"><img src={CartImg} width="60px" id="img_cart"/><Badge>{len}</Badge></div>
        )
    }
}

export default Cart;