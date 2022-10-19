import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(item => item._id === tshirt._id);
        exists && alert('You have already added this item!');
        exists || setCart([...cart, tshirt]);
    }

    const handleRemoveItem = item => {
        const remaining = cart.filter(tshirt => tshirt._id !== item._id);
        setCart(remaining);
        alert('This item will be removed from your order list.')
    }

    return (
        <div className='home-container'>
            <div className='shop-container'>
                {
                    tshirts.map(tshirt => <Product
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;