import { useEffect, useState } from "react";
import axios from "axios";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://localhost:5000/api/bookings/my", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setBookings(res.data));
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>
      <ul>
        {bookings.map(b => (
          <li key={b._id}>
            {b.flight.flightNumber} - {b.flight.origin} to {b.flight.destination} @ {new Date(b.flight.departureTime).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookings;