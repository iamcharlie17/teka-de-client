import { Helmet } from "react-helmet-async";
import { Outlet, useNavigate } from "react-router-dom";

const AgentDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <Helmet>
        <title>TEKA DE | DASHBOARD</title>
      </Helmet>
      <div className="flex justify-center flex-col text-white">
        <div className="bg-lime-500 w-full py-4 text-center shadow-lg">
          <h1 className="text-3xl md:text-5xl font-extrabold">TEKA DE</h1>
          <h1 className="text-xl">
            {user.name} ({user.role.toUpperCase()})
          </h1>
        </div>
        <Outlet />
        <div className="flex justify-end m-2">
          <button
            onClick={handleLogout}
            className="bg-lime-500 text-sm md: py-2 px-4 uppercase font-bold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;
