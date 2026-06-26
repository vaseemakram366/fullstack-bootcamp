import { Link } from "react-router-dom";
import {
    FaHeart,
    FaShoppingCart,
    FaUserCircle,
} from "react-icons/fa";

function NavbarActions() {
    return (
        <div className="flex items-center gap-6 text-2xl">

            <Link to="/wishlist" className="relative">
                <FaHeart />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    0
                </span>
            </Link>

            <Link to="/cart" className="relative">
                <FaShoppingCart />
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    0
                </span>
            </Link>

            <Link to="/profile">
                <FaUserCircle />
            </Link>

        </div>
    );
}

export default NavbarActions;