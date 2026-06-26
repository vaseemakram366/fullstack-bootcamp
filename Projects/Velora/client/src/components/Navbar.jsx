import { Link } from "react-router-dom";
import {
    FaSearch,
    FaHeart,
    FaShoppingCart,
    FaUserCircle,
} from "react-icons/fa";
import { APP_NAME } from "../constants/theme";

function Navbar() {
    return (
        <nav className="bg-black text-white px-10 py-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
            {/* Logo */}
            <Link to="/" className="text-3xl font-bold">
                {APP_NAME}
            </Link>

            {/* Search */}
            <div className="flex items-center bg-white rounded-xl overflow-hidden w-[420px]">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-3 text-black outline-none"
                />

                <button className="bg-yellow-400 px-5 py-3">
                    <FaSearch className="text-black" />
                </button>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-6 text-2xl">
                <Link to="/wishlist">
                    <FaHeart />
                </Link>

                <Link to="/cart">
                    <FaShoppingCart />
                </Link>

                <Link to="/profile">
                    <FaUserCircle />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;