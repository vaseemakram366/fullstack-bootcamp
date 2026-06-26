import ProductCard from "../product/ProductCard";

function FeaturedProducts() {
    const products = [
        {
            id: 1,
            name: "iPhone 17 Pro",
            price: "₹1,29,999",
            image: "https://picsum.photos/300?random=1",
        },
        {
            id: 2,
            name: "MacBook Pro M5",
            price: "₹2,19,999",
            image: "https://picsum.photos/300?random=2",
        },
        {
            id: 3,
            name: "Sony Headphones",
            price: "₹24,999",
            image: "https://picsum.photos/300?random=3",
        },
        {
            id: 4,
            name: "Nike Air Max",
            price: "₹12,999",
            image: "https://picsum.photos/300?random=4",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-8 py-16">
            <h2 className="text-4xl font-bold mb-10">
                Featured Products
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

export default FeaturedProducts;