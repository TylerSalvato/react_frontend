
import "./home.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';


function Home() {
    const navigate = useNavigate();

    function save() {
        console.log("Magic");
        navigate('/display');
    }

    return (
        <div className="container">
            <h1>Welcome!</h1>
            <h3>Checkout our Auctions!</h3>
            <h5>Post Auctions or Start Bidding!</h5>
            <p>You can post items that you want to sell through bidding.</p>
            <p>You can search and bid on items that you are interested in.</p>

            <button className="btn btn-primary" onClick={save}>Go</button>
        </div>
    );
}

export default Home;
