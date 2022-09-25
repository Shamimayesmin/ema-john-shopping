import React from 'react';
import './Cart.css'

// shopping cart
const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h4>order summery</h4>
                <p>Selected Items : {cart.length}</p>

        </div>
    );
};

export default Cart;