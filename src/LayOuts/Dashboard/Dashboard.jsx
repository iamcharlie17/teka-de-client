import { Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="container mx-auto border min-h-screen">
            <Outlet/>
        </div>
    );
};

export default Dashboard;