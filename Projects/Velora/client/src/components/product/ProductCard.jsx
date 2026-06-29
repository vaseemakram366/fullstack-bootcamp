import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

function ProductCard({ product }) {

    const image =
        product.images && product.images.length > 0
            ? product.images[0]
            : "https://picsum.photos/400";

    return (
        <div className="group bg-white rounded-2xl shadow-lg overflow-hidden">

            <div className="relative">

                <img
                    src={image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                />

                <button className="absolute top-3 right-3 bg-white p-2 rounded-full">
                    <FaHeart />
                </button>

            </div>

            <div className="p-5">

                <h3 className="text-xl font-semibold">
                    {product.name}
                </h3>

                <p className="text-gray-500 mt-2">
                    {product.description}
                </p>

                <div className="flex items-center mt-3 text-yellow-500">
                    <FaStar />
                    <span className="ml-2">
                        {product.rating}
                    </span>
                </div>

                <div className="mt-4">

                    <span className="text-2xl font-bold">
                        ₹{product.price.toLocaleString("en-IN")}
                    </span>

                    {product.discountPrice > 0 && (
                        <span className="ml-3 text-gray-400 line-through">
                            ₹{product.discountPrice.toLocaleString("en-IN")}
                        </span>
                    )}

                </div>

                <p className="text-green-600 mt-3">
                    Stock : {product.stock}
                </p>

                <button className="w-full mt-5 bg-black text-white py-3 rounded-xl flex justify-center items-center gap-2">
                    <FaShoppingCart />
                    Add To Cart
                </button>

            </div>

        </div>
    );
}

export default ProductCard;