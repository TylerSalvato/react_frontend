import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useParams, useNavigate } from 'react-router-dom';

function Item() {
    const navigate = useNavigate(); 
    const { auctionId } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        bidstep: '',
        category: '',
        image: null,
        auction_id: auctionId, 
    });

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const fetchAuctionId = async () => {
            try {
                if (auctionId) {
                    const response = await api.get(`/auctions/${auctionId}`);
                    console.log('Fetched auctionId:', response.data.id);
                    setFormData(prevData => ({ ...prevData, auction_id: response.data.id }));
                }
            } catch (error) {
                console.error('Error fetching auctionId:', error);
            }
        };

        fetchAuctionId();
    }, [auctionId]);

    const clearForm = () => {
        setFormData(prevData => ({
            ...prevData,
            name: '',
            description: '',
            price: '',
            bidstep: '',
            category: '',
            image: null,
        }));
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    const { name, description, price, bidstep, category, image, auction_id } = formData;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!auction_id) {
            console.error('Auction ID is missing.');
            return;
        }

        try {
            
            const response = await api.post('/items', { ...formData, auction_id });

            
            console.log(response.data);
            setSuccessMessage('Item created successfully!');
            clearForm(); 
        } catch (error) {
            console.error('Error creating item:', error);
            
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

            {/* Button to redirect to details page */}
            <button onClick={() => navigate(`/details/${auction_id}`)}>
                View Details
            </button>
        </div>
    );
}

export default Item;
