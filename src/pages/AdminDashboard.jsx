import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      navigate("/admin");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      {/* Add client list and media CRUD later */}
    </div>
  );
};

export default AdminDashboard;
