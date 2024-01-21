    import React, { useState } from "react";
    import api from "../services/api";
    import "./create.css";
    import { Link } from "react-router-dom";
    import Item from './item';
    
    function Create() {
        const [title, setTitle] = useState("");
        const [goal, setGoal] = useState("");
        const [startdate, setStartdate] = useState("");
        const [enddate, setEnddate] = useState("");
        const [starttime, setStarttime] = useState("");
        const [endtime, setEndtime] = useState("");
        const [description, setDescription] = useState("");
        const [image, setImage] = useState("");
        const [error, setError] = useState(null);
        const [auctionId, setAuctionId] = useState(null); // New state to store Auction ID
    
        function handleSubmit(e) {
            e.preventDefault();
            api
                .post("/auctions", {
                    title,
                    goal,
                    startdate,
                    enddate,
                    starttime,
                    endtime,
                    description,
                })
                .then((response) => {
                    setAuctionId(response.data.id); // Store Auction ID in state
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error("Error creating auction:", error);
                    setError("Failed to create auction. Please try again.");
                });
        }
    

    return (
        <div>
            <h2>Add Auction</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <br />
                <br/>
                <div>
                    <label>Goal:</label>
                    <input
                        type="number" placeholder="$"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label>Start Date:</label>
                    <input
                        type="date"
                        value={startdate}
                        onChange={(e) => setStartdate(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label>End Date:</label>
                    <input
                        type="date"
                        value={enddate}
                        onChange={(e) => setEnddate(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label>Start Time:</label>
                    <input
                        type="time"
                        value={starttime}
                        onChange={(e) => setStarttime(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label>End Time:</label>
                    <input
                        type="time"
                        value={endtime}
                        onChange={(e) => setEndtime(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <br />


                <button type="submit">Submit</button>
            </form>

            {/* Pass Auction ID as prop to Item component */}
            {auctionId && <Item auctionId={auctionId} />}
        </div>
    );
}

export default Create;
