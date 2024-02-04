import React, { useState } from 'react';
import api from '../services/api';

function EditAuction({ auction, updateAuctionData }) {

  const [formData, setFormData] = useState({
    title: auction?.title || '',
    goal: auction?.goal || '',
    startdate: auction?.startdate || '',
    enddate: auction?.enddate || '',
    starttime: auction?.starttime || '',
    endtime: auction?.endtime || '',
    description: auction?.description || '',
  });

  const { title, goal, startdate, enddate, starttime, endtime, description } = formData;

  const handleUpdate = async () => {
    try {
      const response = await api.put(`/auctions/${auction.id}`, {
        title,
        goal,
        startdate,
        enddate,
        starttime,
        endtime,
        description,
      });

      console.log(response.data);

     
      updateAuctionData((prevData) => ({
        ...prevData,
        title: response.data.title,
        goal: response.data.goal,
        startdate: response.data.startdate,
        enddate: response.data.enddate,
        starttime: response.data.starttime,
        endtime: response.data.endtime,
        description: response.data.description,
      }));
    } catch (error) {
      console.error('Error updating auction:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Auction</h2>
      <form>
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
              setFormData((prevData) => ({ ...prevData, title: e.target.value }))
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
            onChange={(e) =>
              setFormData((prevData) => ({ ...prevData, goal: e.target.value }))
            }
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
              setFormData((prevData) => ({ ...prevData, description: e.target.value }))
            }
          />
        </div>

        <br />
        <button type="button" onClick={handleUpdate}>
          Update Auction
        </button>
      </form>
    </div>
  );
}

export default EditAuction;