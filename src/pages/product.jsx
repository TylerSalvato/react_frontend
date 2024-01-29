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
        <div className="container mt-4">
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <>
                    <h2>Item Details</h2>
                    <div className='card'>
                        <div className='card-body'>
                            <h3 className='card-title'>{itemDetails.name}</h3>
                            <p className='card-text'>Description: {itemDetails.description}</p>
                            <p className='card-text'>Price: ${itemDetails.price}</p>
                            {/* Add other details you want to display */}

                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Product;
