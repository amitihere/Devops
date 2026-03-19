import { useNavigate } from 'react-router-dom';
import './CategoryScroll.css';

const categoryData = {
    Men: {
        path: '/men',
        sections: [
            {
                title: 'Topwear',
                items: ['T-Shirts', 'Casual Shirts', 'Formal Shirts', 'Sweatshirts', 'Sweaters', 'Jackets', 'Blazers & Coats', 'Suits', 'Rain Jackets'],
            },
            {
                title: 'Indian & Festive Wear',
                items: ['Kurtas & Kurta Sets', 'Sherwanis', 'Nehru Jackets', 'Dhotis'],
            },
        ],
        sections2: [
            {
                title: 'Bottomwear',
                items: ['Jeans', 'Casual Trousers', 'Formal Trousers', 'Shorts', 'Track Pants & Joggers'],
            },
            {
                title: 'Innerwear & Sleepwear',
                items: ['Briefs & Trunks', 'Boxers', 'Vests', 'Sleepwear & Loungewear', 'Thermals'],
            },
            {
                title: 'Plus Size',
                items: [],
            },
        ],
        sections3: [
            {
                title: 'Footwear',
                items: ['Casual Shoes', 'Sports Shoes', 'Formal Shoes', 'Sneakers', 'Sandals & Floaters', 'Flip Flops', 'Socks'],
            },
            {
                title: 'Personal Care & Grooming',
                items: [],
            },
            {
                title: 'Sunglasses & Frames',
                items: [],
            },
            {
                title: 'Watches',
                items: [],
            },
        ],
    },
    Women: {
        path: null,
        sections: [
            {
                title: 'Western Wear',
                items: ['Dresses', 'Tops', 'T-Shirts', 'Jeans', 'Trousers & Capris', 'Shorts & Skirts', 'Jumpsuits'],
            },
            {
                title: 'Indian & Fusion Wear',
                items: ['Kurtas & Suits', 'Sarees', 'Lehenga Cholis', 'Dupattas'],
            },
        ],
        sections2: [
            {
                title: 'Footwear',
                items: ['Flats', 'Heels', 'Boots', 'Sports Shoes', 'Casual Shoes'],
            },
            {
                title: 'Lingerie & Sleepwear',
                items: ['Bras', 'Briefs', 'Shapewear', 'Sleepwear & Loungewear'],
            },
        ],
        sections3: [
            {
                title: 'Accessories',
                items: ['Handbags', 'Sunglasses', 'Watches', 'Jewellery', 'Hair Accessories'],
            },
            {
                title: 'Beauty & Personal Care',
                items: ['Makeup', 'Skincare', 'Haircare', 'Fragrances'],
            },
        ],
    },
    Kids: {
        path: null,
        sections: [
            {
                title: 'Boys Clothing',
                items: ['T-Shirts', 'Shirts', 'Shorts', 'Jeans', 'Trousers', 'Ethnic Wear'],
            },
        ],
        sections2: [
            {
                title: 'Girls Clothing',
                items: ['Dresses', 'Tops', 'T-Shirts', 'Jeans', 'Ethnic Wear', 'Skirts'],
            },
        ],
        sections3: [
            {
                title: 'Footwear',
                items: ['Casual Shoes', 'Sports Shoes', 'Sandals', 'School Shoes'],
            },
        ],
    },
    Home: {
        path: null,
        sections: [
            {
                title: 'Bed Linen & Furnishing',
                items: ['Bedsheets', 'Pillows & Covers', 'Blankets & Quilts', 'Curtains'],
            },
        ],
        sections2: [
            {
                title: 'Bath',
                items: ['Bath Towels', 'Hand Towels', 'Bath Robes', 'Bathroom Accessories'],
            },
        ],
        sections3: [
            {
                title: 'Decor',
                items: ['Candles', 'Photo Frames', 'Wall Art', 'Vases', 'Clocks'],
            },
        ],
    },
    Beauty: {
        path: null,
        sections: [
            {
                title: 'Makeup',
                items: ['Lipstick', 'Foundation', 'Mascara', 'Eyeliner', 'Nail Polish'],
            },
        ],
        sections2: [
            {
                title: 'Skincare',
                items: ['Moisturisers', 'Serums', 'Sunscreens', 'Face Wash', 'Face Masks'],
            },
        ],
        sections3: [
            {
                title: 'Haircare',
                items: ['Shampoo', 'Conditioner', 'Hair Oil', 'Hair Serum', 'Hair Colour'],
            },
        ],
    },
    GenZ: {
        path: null,
        sections: [
            {
                title: 'Trending Now',
                items: ['Oversized Tees', 'Cargo Pants', 'Streetwear', 'Co-ord Sets', 'Graphic Tees'],
            },
        ],
        sections2: [
            {
                title: 'Accessories',
                items: ['Bucket Hats', 'Chunky Sneakers', 'Chains', 'Tote Bags'],
            },
        ],
        sections3: [
            {
                title: 'Brands',
                items: ['Bewakoof', 'H&M', 'Zara', 'Urbanic'],
            },
        ],
    },
    Studio: {
        path: null,
        sections: [
            {
                title: 'Explore',
                items: ['Style Trends', 'Celebrity Looks', 'Fashion Tips', 'Outfit Ideas'],
            },
        ],
        sections2: [],
        sections3: [],
    },
};

const categoryOrder = ['Men', 'Women', 'Kids', 'Home', 'Beauty', 'GenZ', 'Studio'];

export default function CategoryScroll({ activeCategory, setActiveCategory }) {
    const navigate = useNavigate();

    const handleClick = (label, path) => {
        if (path) {
            navigate(path);
        } else {
            setActiveCategory(label);
        }
    };

    return (
        <div className="category-bar">
            <nav className="category-nav">
                {categoryOrder.map((label) => {
                    const data = categoryData[label];
                    return (
                        <div key={label} className="category-item">
                            <button
                                className={`category-link ${activeCategory === label ? 'active' : ''}`}
                                onClick={() => handleClick(label, data.path)}
                            >
                                {label.toUpperCase()}
                            </button>

                            {/* Dropdown */}
                            <div className="category-dropdown">
                                <div className="dropdown-inner">
                                    {data.sections && data.sections.length > 0 && (
                                        <div className="dropdown-col">
                                            {data.sections.map((sec) => (
                                                <div key={sec.title} className="dropdown-section">
                                                    <h4 className="dropdown-heading">{sec.title}</h4>
                                                    <ul className="dropdown-list">
                                                        {sec.items.map((item) => (
                                                            <li key={item}><a href="#">{item}</a></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {data.sections2 && data.sections2.length > 0 && (
                                        <div className="dropdown-col">
                                            {data.sections2.map((sec) => (
                                                <div key={sec.title} className="dropdown-section">
                                                    <h4 className="dropdown-heading">{sec.title}</h4>
                                                    <ul className="dropdown-list">
                                                        {sec.items.map((item) => (
                                                            <li key={item}><a href="#">{item}</a></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {data.sections3 && data.sections3.length > 0 && (
                                        <div className="dropdown-col">
                                            {data.sections3.map((sec) => (
                                                <div key={sec.title} className="dropdown-section">
                                                    <h4 className="dropdown-heading">{sec.title}</h4>
                                                    <ul className="dropdown-list">
                                                        {sec.items.map((item) => (
                                                            <li key={item}><a href="#">{item}</a></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </nav>
        </div>
    );
}
