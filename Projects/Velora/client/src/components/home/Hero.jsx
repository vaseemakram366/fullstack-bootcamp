function Hero() {
    return (
        <section className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-8 py-20 flex items-center justify-between">
                <div className="max-w-xl">
                    <p className="text-yellow-500 font-semibold mb-4">
                        NEW COLLECTION 2026
                    </p>

                    <h1 className="text-6xl font-bold leading-tight">
                        Shop Smarter,
                        <br />
                        Live Better.
                    </h1>

                    <p className="text-gray-600 text-lg mt-6">
                        Discover premium products with the best prices,
                        fastest delivery and amazing quality.
                    </p>

                    <button className="mt-8 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition">
                        Shop Now
                    </button>
                </div>

                <div>
                    <img
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
                        alt="Hero"
                        className="rounded-3xl w-[500px] shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;