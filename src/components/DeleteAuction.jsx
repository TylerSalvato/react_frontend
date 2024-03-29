import React from 'react';
import api from '../services/api';
import { useParams, Link } from 'react-router-dom';

function DeleteAuction({  }) {
  const { auctionId } = useParams();
  const handleDelete = async () => {
    try {
      console.log('Deleting auction with ID:', auctionId);
      await api.delete(`/auctions/${auctionId}`);
      console.log(`Auction ${auctionId} deleted`);
    } catch (error) {
      console.error('Error deleting auction:', error);
    }
  };

  return (
    <div>
      <h2>Delete Auction</h2>
      <button onClick={handleDelete}>Delete Auction</button>
    </div>
  );
}

export default DeleteAuction;
