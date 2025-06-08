import React from 'react';
import './cart.css';
import 'font-awesome/css/font-awesome.min.css';

const CartIcon = ({ itemCount }) => (
    <div style={{position: 'relative'}}>
        <i className="fa fa-shopping-cart cart-icon"></i> 
        {itemCount > 0 && (
            <span className="cart-item-count">{itemCount}</span>
        )}
    </div>
);

export default CartIcon;