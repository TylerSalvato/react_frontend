

import React, { useState } from 'react';

function AddToCart ({ item, onAddToCart }) {
    const cartId = '';
    

    const handleAddToCart = async () => {
        try {
            
            const response = await fetch(`/carts/${cartId}/add_item/${item.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                
                
            } else {
                console.error('Failed to add item to cart');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div>
            <h3>{item.name}</h3>
            <p>Description: {item.description}</p>
            <p>Price: ${item.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default AddToCart;
