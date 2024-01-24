import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

function Detail() {
    const { auctionId } = useParams();
    const [auctionDetails, setAuctionDetails] = useState({});
    const [items, setItems] = useState([]);
    const [cartId, setCartId] = useState('');

    useEffect(() => {
        
        const fetchCart = async () => {
            try {
                
                const existingCartId = localStorage.getItem('guestCartId');

                if (existingCartId) {
                    setCartId(existingCartId);
                } else {
                    
                    const response = await api.get('/carts'); 
                    const fetchedCartId = response.data.id;

                    
                    localStorage.setItem('guestCartId', fetchedCartId);

                    setCartId(fetchedCartId);
                }
            } catch (error) {
                console.error('Error fetching or creating cart:', error);
            }
        };

        fetchCart();
    }, []);
    

    useEffect(() => {
        
        api.get(`/auctions/${auctionId}`)
            .then(response => {
                setAuctionDetails(response.data || {});
            })
            .catch(error => {
                console.error('Error fetching auction details:', error);
            });

        
        api.get(`/items?auctionId=${auctionId}`)
            .then(response => {
                console.log('Items:', response.data);
                setItems(response.data || []);
            })
            .catch(error => {
                console.error('Error fetching items:', error);
            });

    }, [auctionId]);

    const addToCart = async (itemId) => {
        try {
            const response = await api.post(`/carts/${cartId}/add_item/${itemId}`);
            const updatedCartId = response.data.cartId; 
            setCartId(updatedCartId);
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };
    
    

    return (
        <div>
            <h2>Auction Details</h2>
            {/* Display auction details */}
            <p>Title: {auctionDetails.title}</p>
            <p>Image: {auctionDetails.image}</p>
            <p>Goal: {auctionDetails.goal}</p>
            <p>Start Date: {auctionDetails.startdate}</p>
            <p>End Date: {auctionDetails.enddate}</p>
            <p>Start Time: {auctionDetails.starttime}</p>
            <p>End Time: {auctionDetails.endtime}</p>
            <p>Description: {auctionDetails.description}</p>

            <h3>Items</h3>
            {/* Display only items connected to the specific auction ID */}
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.description} - ${item.price}
                        <Link to={`/items/${item.id}`}>
                            <button>View Details</button>
                        </Link>
                        {/* Pass item.id to addToCart function when the button is clicked */}
                        <button onClick={() => addToCart(item.id)}>Add To Cart</button>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Detail;
