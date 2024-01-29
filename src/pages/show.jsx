import "./show.css";
import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Show() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        api.get('/items').then((response) => {
            setShows(response.data);
        });
    }, []);

    return (
        <div className='container mt-4'>
            <h2>Item Details</h2>
            <div className='card-group'>
                {shows.map((show) => (
                    <div key={show.id} className='card'>
                        <div className='card-body'>
                            <h3 className='card-title'>{show.name}</h3>
                            <p className='card-text'>Description: {show.description}</p>
                            {/* Add other details you want to display */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Show;
