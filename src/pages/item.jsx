import "./item.css";
import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Item({ auctionId }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        bidstep: '',
        category: '',
        image: null,
        auction: '',
    });

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const fetchAuctionId = async () => {
            try {
                const response = await api.get('/auctions');
                if (response.data.length > 0) {
                    const firstAuctionId = response.data[0].id; // Adjust this based on your response structure
                    setFormData(prevData => ({ ...prevData, auction: firstAuctionId }));
                }
            } catch (error) {
                console.error('Error fetching auctionId:', error);
            }
        };
    
        fetchAuctionId();
    }, []);

    const clearForm = () => {
        setFormData({
            name: '',
            description: '',
            price: '',
            bidstep: '',
            category: '',
            image: null,
            auction: '',
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
    
        try {
            const { name, description, price, bidstep, category, image, auction } = formData;
    
            const response = await api.post('/items', {
                name,
                description,
                price,
                bidstep,
                category,
                image,
                auction_id: auction, // Add auction_id here
            });
    
            const newAuctionId = response.data.id;
            setFormData(prevData => ({ ...prevData, auction: newAuctionId }));
            setSuccessMessage('Item created successfully!');
            setError(null);
            console.log(response.data);
        } catch (error) {
            console.error('Error creating item:', error.response ? error.response.data : error.message);
            setError('Failed to create item. Please try again.');
            setSuccessMessage('');
        } finally {
            setSubmitting(false);
            clearForm();
        }
    };

    return (
        <div>
            <h2>Add Item</h2>
            <form id="itemForm" onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <br />

                <label>Description:</label>
                <input
                    type="text"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
                <br />

                <label>Price:</label>
                <input
                    type="number" placeholder='$'
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
                <br />

                <label>Bid Increment:</label>
                <input
                    type="number" placeholder='$'
                    value={formData.bidstep}
                    onChange={(e) => setFormData({ ...formData, bidstep: e.target.value })}
                />
                <br />

                <label>Category:</label>
                <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
                <br />

                <label>Image:</label>
                <input type="file" onChange={handleFileChange} />
                <br />

                <button type="submit" disabled={submitting}>
                    Submit
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </form>
        </div>
    );
}

export default Item;
