import { Outlet } from "react-router-dom";
import SideBar from "../pages/Shared/SideBar/SideBar";

const Dashboard = () => {
    return (
        <div>
            <SideBar />
            <Outlet />
        </div>
    );
};

export default Dashboard;