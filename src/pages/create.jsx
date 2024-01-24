import React, { useState, useEffect } from "react";
import api from "../services/api";
import "./create.css";
import Item from './item';
import Detail from './detail';
import { useNavigate } from "react-router-dom";


function Create() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        goal: "",
        startdate: "",
        enddate: "",
        starttime: "",
        endtime: "",
        description: "",
        image: "",
        error: null,
    });


    const { title, goal, startdate, enddate, starttime, endtime, description, image, error, auction_id } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post("/auctions", formData)
            .then((response) => {
                console.log(response.data);
                const createdAuctionId = response.data.id;
                setFormData(prevData => ({ ...prevData, auction_id: createdAuctionId }));
                // Redirect to item creation page with the auction ID
                navigate(`/item/${createdAuctionId}`);  // Add a forward slash (/) before 'item'
            })
            .catch((error) => {
                console.error("Error creating auction:", error);
                setFormData(prevData => ({ ...prevData, error: "Failed to create auction. Please try again." }));
            });
    };
    
    

    useEffect(() => {
        const fetchauction_id = async () => {
            try {
                if (auction_id) {
                    const response = await api.get(`/auctions/${auction_id}`);
                    setFormData(prevData => ({ ...prevData, auction_id: response.data.id }));
                }
            } catch (error) {
                console.error('Error fetching auction_id:', error);
            }
        };
        
    
        fetchauction_id();
    }, [auction_id]);
    

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    return (
        <div>
            <h2>Add Auction</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
            <label>Title:</label>
                <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
                <br />

                <br/>
                <div>
                    <label>Goal:</label>
                    <input
                        type="number" placeholder="$"
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    />
                </div>
                <br />
                <div>
                    <label>Start Date:</label>
                    <input
                        type="date"
                        value={formData.startdate}
                        onChange={(e) => setFormData({ ...formData, startdate: e.target.value })}
                    />
                </div>
                <br />
                <div>
                    <label>End Date:</label>
                    <input
                        type="date"
                        value={formData.enddate}
                        onChange={(e) => setFormData({ ...formData, enddate: e.target.value })}
                    />
                </div>
                <br />
                <div>
                    <label>Start Time:</label>
                    <input
                        type="time"
                        value={formData.starttime}
                        onChange={(e) => setFormData({ ...formData, starttime: e.target.value })}
                    />
                </div>
                <br />
                <div>
                    <label>End Time:</label>
                    <input
                        type="time"
                        value={formData.endtime}
                        onChange={(e) => setFormData({ ...formData, endtime: e.target.value })}
                    />
                </div>
                <br />
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                </div>
                <br />

                <label>Image:</label>
                <input type="file" onChange={handleFileChange} />
                <br />

                <button type="submit">Submit</button>
            </form>

            {/* Pass Auction ID as prop to Item component */}
            {auction_id && <Item auction_id={auction_id} />}

            {/* Pass Auction ID as prop to Detail component */}
            {auction_id && <Detail auction_id={auction_id} />}
        </div>
    );
}

export default Create;