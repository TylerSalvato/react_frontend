import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

function Detail() {
    const { auctionId } = useParams();
    const [auctionDetails, setAuctionDetails] = useState({});
    const [items, setItems] = useState([]);

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


    return (
        <div className='container mt-4'>
            <h2>Auction Details</h2>

            <div className='card'>
                <div className='card-body'>
                    <p className='card-title'>Title: {auctionDetails.title}</p>
                    <p className='card-text'>Image: {auctionDetails.image}</p>
                    <p className='card-text'>Goal: {auctionDetails.goal}</p>
                    <p className='card-text'>Start Date: {auctionDetails.startdate}</p>
                    <p className='card-text'>End Date: {auctionDetails.enddate}</p>
                    <p className='card-text'>Start Time: {auctionDetails.starttime}</p>
                    <p className='card-text'>End Time: {auctionDetails.endtime}</p>
                    <p className='card-text'>Description: {auctionDetails.description}</p>
                </div>
            </div>

            <h3>Items</h3>

            <div className='row'>
                {items.map(item => (
                    <div key={item.id} className='col-md-4 mb-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>{item.name}</h5>
                                <p className='card-text'>{item.description}</p>
                                <p className='card-text'>Price: ${item.price}</p>
                                <Link to={`/items/${item.id}`}>
                                    <button className='btn btn-primary'>View Details</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Detail;
