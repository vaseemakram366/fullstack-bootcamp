import { useEffect, useState } from "react";
import ProductCard from "../product/ProductCard";
import { getProducts } from "../../services/productService";

function FeaturedProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data.products);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <section className="max-w-7xl mx-auto py-16">
                <h2 className="text-4xl font-bold mb-10">
                    Featured Products
                </h2>

                <h3>Loading...</h3>
            </section>
        );
    }

    return (
        <section className="max-w-7xl mx-auto px-8 py-16">
            <h2 className="text-4xl font-bold mb-10">
                Featured Products
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    );
}

export default FeaturedProducts;