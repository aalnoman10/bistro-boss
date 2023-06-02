import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {

    const location = useLocation()
    // const checkPathname =  || "resister"
    const isLogim = location.pathname.includes("login")
    // const isLogim = location.pathname.includes("login")

    return (
        <div>
            {isLogim || <NavBar></NavBar>}
            <Outlet></Outlet>
            {isLogim || <Footer></Footer>}
        </div>
    );
};

export default Main;