import React from 'react';
import './Product.css';

const Product = ({ tshirt, handleAddToCart }) => {
    const { name, picture, price } = tshirt;
    return (
        <div className='product-container'>
            <div className='image-container'>
                <img src={picture} alt={name} />
            </div>

            <div className='product-detail'>
                <h2>{name}</h2>
                <h4>Price: ${price}</h4>
                <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;