import { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Proveider/AuthProveider";
import useCarts from "../../../hooks/useCarts";

const NavBar = () => {
    const { user, setUser, logOut } = useContext(AuthContext)
    const [, cart] = useCarts()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                setUser(false)
                alert("user logout su")
            }).catch((err) => {
                alert("user dos't logout", err.message)
            });
    }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/dashboard/cart'>
            <FaShoppingCart size={26} />
            <div className="badge badge-secondary -ml-4 pl-1 -mt-4">{cart.length}</div>
        </Link></li>
        {
            user && <li onClick={handleLogOut}><span>Logout</span></li>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-end w-full hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="md:w-20 w-full flex md:block justify-end">
                    {!user ? <Link to='/login'>Login</Link> : <img className="w-12 h-12 rounded-full" title={user?.displayName} src={user?.photoURL} />}
                </div>
            </div>
        </>
    );
};

export default NavBar;