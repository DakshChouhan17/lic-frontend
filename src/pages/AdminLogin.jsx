import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [userName, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userName === "admin@lic.com" && password === "admin123") {
      localStorage.setItem("admin", true);
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>
      <input type="text" className="w-full border p-2 mb-2" placeholder="UserName" onChange={e => setEmail(e.target.value)} />
      <input type="password" className="w-full border p-2 mb-2" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="bg-blue-600 text-white w-full py-2 rounded">Login</button>
    </div>
  );
};

export default AdminLogin;
