import ProductCard from "../product/ProductCard";

function FlashSale() {
    const flashProducts = [
        {
            id: 1,
            name: "Apple Watch Ultra",
            price: "₹79,999",
            image: "https://picsum.photos/300?random=11",
        },
        {
            id: 2,
            name: "Samsung S26 Ultra",
            price: "₹1,09,999",
            image: "https://picsum.photos/300?random=12",
        },
        {
            id: 3,
            name: "PlayStation 6",
            price: "₹59,999",
            image: "https://picsum.photos/300?random=13",
        },
        {
            id: 4,
            name: "Canon EOS R6",
            price: "₹1,89,999",
            image: "https://picsum.photos/300?random=14",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-8 py-16">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-4xl font-bold">🔥 Flash Sale</h2>

                <div className="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold">
                    Ends Soon
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {flashProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

export default FlashSale;