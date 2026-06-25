function CategoryButtons({ setSelectedCategory }) {
    return (
        <div className="category-container">
            <button
                className="category-btn"
                onClick={() => setSelectedCategory("html")}
            >
                HTML
            </button>

            <button
                className="category-btn"
                onClick={() => setSelectedCategory("css")}
            >
                CSS
            </button>

            <button
                className="category-btn"
                onClick={() => setSelectedCategory("javascript")}
            >
                JavaScript
            </button>

            <button
                className="category-btn"
                onClick={() => setSelectedCategory("react")}
            >
                React
            </button>

            <button
                className="category-btn"
                onClick={() => setSelectedCategory("git")}
            >
                Git
            </button>

            <button
                className="category-btn"
                onClick={() => setSelectedCategory("dsa")}
            >
                DSA
            </button>
        </div>
    );
}

export default CategoryButtons;