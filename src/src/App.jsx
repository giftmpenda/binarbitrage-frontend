import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://binarbitrage-backend.onrender.com";

export default function App() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/offers`)
      .then(res => setOffers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Binarbitrage P2P Market</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {offers.map((offer) => (
          <div className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{offer.asset}</h2>
            <p>Price: {offer.price}</p>
            <p>Seller: {offer.seller}</p>
            <button className="mt-3 bg-blue-500 text-white px-3 py-2 rounded">
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
