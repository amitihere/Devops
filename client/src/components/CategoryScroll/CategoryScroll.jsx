import './CategoryScroll.css';

const categories = [
    'Men', 'Women', 'Kids', 'Shoes', 'Bags', 'Outerwear',
    'Tops', 'Bottoms', 'Jewelry', 'Accessories', 'Activewear',
    'Hats', 'Sunglasses', 'Vintage',
];

export default function CategoryScroll({ activeCategory, setActiveCategory }) {
    return (
        <div className="category-bar">
            <div className="category-scroll">
                {categories.map((label) => (
                    <button
                        key={label}
                        className={`category-chip ${activeCategory === label ? 'active' : ''}`}
                        onClick={() => setActiveCategory(label)}
                    >
                        <span className="cat-label">{label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
