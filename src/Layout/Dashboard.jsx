import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBars, FaBook, FaHome, FaShopify, FaUser, FaVoicemail } from 'react-icons/fa'

const Dashboard = () => {
    const admin = false;

    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-2 md:py-8 md:px-4 bg-slate-50">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary normal-case drawer-button lg:hidden">Sidebar</label>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="custom-side-menu menu p-4 py-7 w-80 h-full bg-yellow-600 text-white">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl uppercase font-semibold text-black">Bistro boss</h3>
                        <h4 className="text-xl uppercase text-black font-semibold">R e s t a u r a n t</h4>
                    </div>
                    {/* Sidebar content here */}
                    {admin ? <>
                        <li><NavLink to='/dashboard/admin-home' className="uppercase"><FaHome size={24} />Admin Home</NavLink></li>
                        <li><NavLink to='/dashboard/add-item' className="uppercase"><FaAd size={24} />add items</NavLink></li>
                        <li><NavLink to='/dashboard/manage-item' className="uppercase"><FaBars size={24} />manage items</NavLink></li>
                        <li><NavLink to='/dashboard/manage-bookig' className="uppercase"><FaBook size={24} />Manage bookings</NavLink></li>
                        <li><NavLink to='/dashboard/all-user' className="uppercase"><FaUser size={24} />all users</NavLink></li>
                    </> : <>
                        <li><NavLink to='/dashboard/user-home' className="uppercase"><FaHome size={24} />User Home</NavLink></li>
                        <li><NavLink to='/dashboard/reservation' className="uppercase"><FaAd size={24} />reservation</NavLink></li>
                        <li><NavLink to='/dashboard/payment-history' className="uppercase"><FaBars size={24} />payment history</NavLink></li>
                        <li><NavLink to='/dashboard/cart' className="uppercase"><FaBars size={24} />my cart</NavLink></li>
                        <li><NavLink to='/dashboard/add-review' className="uppercase"><FaUser size={24} />add review</NavLink></li>
                        <li><NavLink to='/dashboard/bookig' className="uppercase"><FaBook size={24} />my booking</NavLink></li>
                    </>
                    }
                    <hr className="my-7" />
                    <li><NavLink to='/' className="uppercase"><FaHome size={24} />Home</NavLink></li>
                    <li><NavLink to='/menu' className="uppercase"><FaBars size={24} />Menu</NavLink></li>
                    <li><NavLink to='/shop' className="uppercase"><FaShopify size={24} />Shop</NavLink></li>
                    <li><NavLink to='/contact' className="uppercase"><FaVoicemail size={24} />Contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;