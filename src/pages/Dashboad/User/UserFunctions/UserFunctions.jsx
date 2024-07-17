import { FaMoneyBillTrendUp, FaMoneyCheck } from "react-icons/fa6";
import { GiMoneyStack, GiTakeMyMoney } from "react-icons/gi";
import { GrMoney, GrTransaction } from "react-icons/gr";

const UserFunctions = () => {
  const functions = [
    { icon: <FaMoneyBillTrendUp className="md:text-7xl text-3xl" />, label: "Send Money" },
    { icon: <GiTakeMyMoney className="md:text-7xl text-3xl" />, label: "Cash Out" },
    { icon: <GiMoneyStack className="md:text-7xl text-3xl" />, label: "Cash In" },
    { icon: <GrMoney className="md:text-7xl text-3xl" />, label: "Payment" },
    { icon: <FaMoneyCheck className="md:text-7xl text-3xl" />, label: "Balance" },
    { icon: <GrTransaction className="md:text-7xl text-3xl" />, label: "Transaction History" },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-8 gap-4 md:mx-24 mx-4">
        {functions.map((func, index) => (
          <div key={index} className="md:h-60 h-32 text-center bg-amber-500 mt-8 rounded-lg flex flex-col justify-center items-center transition-transform transform hover:scale-105">
            <div className="flex justify-center">
              {func.icon}
            </div>
            <h1 className="md:text-2xl text-lg font-semibold">{func.label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserFunctions;
