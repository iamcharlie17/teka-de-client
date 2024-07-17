import { useState } from "react";
import { Helmet } from "react-helmet-async";

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user)
  return (
    <div>
      <Helmet>
        <title>TEKA DE | DASHBOARD</title>
      </Helmet>
      <div className="flex justify-center flex-col text-white">
        <div className="bg-amber-500 w-full py-4 text-center shadow-lg">
          <h1 className="text-3xl md:text-5xl font-extrabold">TEKA DE</h1>
          <h1 className="text-xl">{user.name} </h1>
        </div>
        <div className="grid grid-cols-3 md:gap-8 gap-2 md:mx-24 mx-2">
            <div className="md:h-64 h-32 text-center bg-amber-500 mt-8 rounded-lg">
                <h1>Send Money</h1>
            </div>
            <div className="md:h-64 h-32 text-center bg-amber-500 mt-8 rounded-lg">
                <h1>Cash Out</h1>
            </div>
            <div className="md:h-64 h-32 text-center bg-amber-500 mt-8 rounded-lg">
                <h1>Cash In</h1>
            </div>
            <div className="md:h-64 h-32 text-center bg-amber-500 mt-8 rounded-lg">
                <h1>Payment</h1>
            </div>
            <div className="md:h-64 h-32 text-center bg-amber-500 mt-8 rounded-lg">
                <h1>Balance</h1>
            </div>
            <div className="md:h-64 h-32 text-center bg-amber-500 mt-8 rounded-lg">
                <h1>Transaction History</h1>
            </div>
           
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
