import React, { useState, useEffect } from 'react';
import api from '../services/api';
import EditAuction from '../components/EditAuction';
import Item from './item';
import { useNavigate } from 'react-router-dom';

function Create() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    goal: '',
    startdate: '',
    enddate: '',
    starttime: '',
    endtime: '',
    description: '',
    error: null,
    auction_id: null,
  });

  const [showItemForm, setShowItemForm] = useState(false);

  const {
    title,
    goal,
    startdate,
    enddate,
    starttime,
    endtime,
    description,
    error,
    auction_id,
  } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/auctions', formData);
      const createdAuctionId = response.data.id;

      setFormData((prevData) => ({
        ...prevData,
        auction_id: createdAuctionId,
      }));

      setShowItemForm(true);
      navigate(`/item/${createdAuctionId}`);
    } catch (error) {
      console.error('Error creating auction:', error);
      setFormData((prevData) => ({
        ...prevData,
        error: 'Failed to create auction. Please try again.',
      }));
    }
  };

  useEffect(() => {
    const fetchAuctionId = async () => {
      try {
        if (auction_id !== null) {
          const response = await api.get(`/auctions/${auction_id}`);
          setFormData((prevData) => ({
            ...prevData,
            auction_id: response.data.id,
          }));
        }
      } catch (error) {
        console.error('Error fetching auction_id:', error);
      }
    };

    fetchAuctionId();
  }, [auction_id]);

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  // Callback function to update auction data
  const updateAuctionData = (newAuctionData) => {
    setFormData(newAuctionData);
  };

  return (
    <div className="container mt-4">
      <h2>Add Auction</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="goal" className="form-label">
            Goal:
          </label>
          <input
            type="number"
            className="form-control"
            id="goal"
            placeholder="$"
            value={goal}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="startdate" className="form-label">
            Start Date:
          </label>
          <input
            type="date"
            className="form-control"
            id="startdate"
            value={startdate}
            onChange={(e) =>
              setFormData({ ...formData, startdate: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="enddate" className="form-label">
            End Date:
          </label>
          <input
            type="date"
            className="form-control"
            id="enddate"
            value={enddate}
            onChange={(e) =>
              setFormData({ ...formData, enddate: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="starttime" className="form-label">
            Start Time:
          </label>
          <input
            type="time"
            className="form-control"
            id="starttime"
            value={starttime}
            onChange={(e) =>
              setFormData({ ...formData, starttime: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="endtime" className="form-label">
            End Time:
          </label>
          <input
            type="time"
            className="form-control"
            id="endtime"
            value={endtime}
            onChange={(e) =>
              setFormData({ ...formData, endtime: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {showItemForm && auction_id && <Item auction_id={auction_id} />}
      {auction_id && (
        <EditAuction
          auction={formData} // Pass the correct formData
          updateAuctionData={updateAuctionData}
        />
      )}
    </div>
  );
}

export default Create;