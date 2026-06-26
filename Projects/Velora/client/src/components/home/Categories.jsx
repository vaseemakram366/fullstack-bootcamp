function Categories() {
    const categories = [
        "Electronics",
        "Fashion",
        "Mobiles",
        "Laptops",
        "Home",
        "Beauty",
        "Sports",
        "Books",
    ];

    return (
        <section className="max-w-7xl mx-auto px-8 py-16">
            <h2 className="text-4xl font-bold mb-10">Shop by Category</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <div
                        key={category}
                        className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition duration-300 cursor-pointer"
                    >
                        <h3 className="text-xl font-semibold">{category}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;