import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function Product() {
    const [loading, setLoading] = useState(true);
    const [itemDetails, setItemDetails] = useState({});
    const [error, setError] = useState(null);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        // Fetch item details
        api.get(`/items/${itemId}`)
            .then(response => {
                setItemDetails(response.data || {});
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching item details:', error);
                setError('Failed to fetch item details. Please try again.');
                setLoading(false);
            });
    }, [itemId]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <>
                    <h2>Item Details</h2>
                    {/* Display item details */}
                    <p>Name: {itemDetails.name}</p>
                    <p>Description: {itemDetails.description}</p>
                    <p>Price: ${itemDetails.price}</p>
                    {/* Add more details as needed */}
                </>
            )}
        </div>
    );
}

export default Product;
