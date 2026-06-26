import { FaSearch } from "react-icons/fa";

function SearchBar() {
    return (
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
    );
}

export default SearchBar;