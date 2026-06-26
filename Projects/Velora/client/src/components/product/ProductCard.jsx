import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";

function ProductCard({ product }) {
    return (
        <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300">

            <div className="relative overflow-hidden">

                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />

                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                    -20%
                </span>

                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                    <FaHeart />
                </button>

            </div>

            <div className="p-5">

                <h3 className="text-xl font-semibold">
                    {product.name}
                </h3>

                <div className="flex items-center gap-1 text-yellow-500 mt-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className="text-gray-500 text-sm">(4.9)</span>
                </div>

                <p className="text-2xl font-bold mt-3">
                    {product.price}
                </p>

                <p className="text-green-600 text-sm mt-1">
                    Free Delivery
                </p>

                <button className="mt-5 w-full bg-black text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-gray-800">
                    <FaShoppingCart />
                    Add to Cart
                </button>

            </div>
        </div>
    );
}

export default ProductCard;