import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav>
      <Link to="/flights">Flights</Link>
      {role === "passenger" && <Link to="/bookings">My Bookings</Link>}
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;