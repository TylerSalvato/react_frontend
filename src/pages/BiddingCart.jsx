

import React, { useState } from 'react';
import AddToCart from '../components/AddToCart';
import ViewCart from '../components/ViewCart';

const BiddingCart = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (item) => {
        
        setCartItems((prevCartItems) => [...prevCartItems, item]);
    };

    return (
        <div>
            <AddToCart item={{ id: 1, name: 'Item 1', description: 'Description 1', price: 10 }} onAddToCart={handleAddToCart} />
            <AddToCart item={{ id: 2, name: 'Item 2', description: 'Description 2', price: 20 }} onAddToCart={handleAddToCart} />
            <ViewCart cartItems={cartItems} />
        </div>
    );
};

export default BiddingCart;
