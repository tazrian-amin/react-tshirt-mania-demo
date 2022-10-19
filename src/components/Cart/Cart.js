import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveItem }) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Total Items: {cart.length}</h3>
            <ol className='ordered-items'>
                {
                    cart.map(item => <li
                        key={item._id}
                    >
                        {item.name}
                        <button onClick={() => handleRemoveItem(item)}>X</button>
                    </li>)
                }
            </ol>
        </div>
    );
};

export default Cart;