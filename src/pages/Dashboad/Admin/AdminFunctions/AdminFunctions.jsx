import { FaMoneyCheck } from "react-icons/fa6";
import { GrMoney, GrTransaction } from "react-icons/gr";
import { Link } from "react-router-dom";

const AdminFunctions = () => {
  const functions = [
    {
      icon: <GrMoney className="md:text-7xl text-3xl" />,
      label: "User Management",
      to: "user-management",
    },
    {
      icon: <FaMoneyCheck className="md:text-7xl text-3xl" />,
      label: "System Monitoring",
      to: "system-monitoring",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 md:mx-24 mx-4">
        {functions.map((func, index) => (
          <Link to={func.to} key={index}>
            <div
              className="md:h-60 h-32 text-center bg-sky-500 mt-8 rounded-lg flex flex-col justify-center items-center transition-transform transform hover:scale-105"
            >
              <div className="flex justify-center">{func.icon}</div>
              <h1 className="md:text-2xl text-lg font-semibold">
                {func.label}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminFunctions;
