import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Flights from "./pages/Flights";
import Bookings from "./pages/Bookings";
import Navbar from "./components/Navbar";

const App = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return (
    <>
      {token && <Navbar />}
      <Routes>
        <Route path="/" element={token ? <Navigate to="/flights" /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/flights" element={token ? <Flights /> : <Navigate to="/" />} />
        <Route
          path="/bookings"
          element={token && role === "passenger" ? <Bookings /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
};

export default App;