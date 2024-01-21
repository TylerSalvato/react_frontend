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
        <div>
            <h2>Items</h2>
            <ul>
                {shows.map((show) => (
                    <li key={show.id}>
                        {show.name} - {show.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Show;
