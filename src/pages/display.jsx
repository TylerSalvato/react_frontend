
import "./display.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Display() {
    const [displays, setDisplay] = useState([]);

    useEffect(() => {
        api.get('/auctions').then((response) => {
            setDisplay(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Auctions</h2>
            <ul>
                {displays.map((display) => (
                    <li key={display.id}>
                        {display.title} - {display.goal}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Display;
