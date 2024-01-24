import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

function Display() {
    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        // Fetch all auctions
        api.get('/auctions')
            .then(response => {
                setAuctions(response.data || []);
            })
            .catch(error => {
                console.error('Error fetching auctions:', error);
            });
    }, []);

    return (
        <div>
            <h2>All Auctions</h2>
            <ul>
                {auctions.map(auction => (
                    <li key={auction.id}>
                        <p>Title: {auction.title}</p>
                        <p>Start Date: {auction.startdate}</p>
                        <p>End Date: {auction.enddate}</p>
                        <Link to={`/details/${auction.id}`}>
                            <button>View Details</button>
                        </Link>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Display;

