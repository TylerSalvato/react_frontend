import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

function Display() {
    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        
        api.get('/auctions')
            .then(response => {
                setAuctions(response.data || []);
            })
            .catch(error => {
                console.error('Error fetching auctions:', error);
            });
    }, []);

    return (
        
        <div className='overflow-auto container mt-4'>
            <h2 className='mb-4'>All Auctions</h2>
            <div className='row'>
                {auctions.map(auction => (
                    <div key={auction.id} className='col-md-4 mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Title: {auction.title}</h5>
                                <p className='card-subtitle mb-2 text-body-secondary'>
                                    Start Date: {auction.startdate}
                                </p>
                                <p className='card-text'>End Date: {auction.enddate}</p>
                                <Link to={`/details/${auction.id}`} className='btn btn-primary'>
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className='mb-4'>All Auctions</h2>
        </div>
    );
}

export default Display;

