import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h4>order summery</h4>
                <p>Selected Items : {cart.length}</p>
                
        </div>
    );
};

export default Cart;