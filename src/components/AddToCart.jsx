// AddToCart.jsx

import React, { useState } from 'react';

function AddToCart ({ item, onAddToCart }) {
    const cartId = '';
    // Update handleAddToCart in AddToCart.jsx

    const handleAddToCart = async () => {
        try {
            // Make a POST request to add the item to the cart
            const response = await fetch(`/carts/${cartId}/add_item/${item.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                // Update the local state or trigger a fetch to update the cart data
                // ...
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
