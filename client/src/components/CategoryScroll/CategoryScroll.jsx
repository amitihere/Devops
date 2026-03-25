import { useNavigate } from 'react-router-dom';
import './CategoryScroll.css';

const categoryData = {
    Men: {
        path: null,
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
                title: 'Welcome to the ThriftVault',
                items: ['Discover a world of pre-loved treasures at ThriftVault, where sustainability meets style. Explore our curated collection of second-hand fashion, vintage finds, and unique accessories. Join us in reducing fashion waste while expressing your individuality with one-of-a-kind pieces. Shop consciously, shop ThriftVault.'],
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
    }
};

const categoryOrder = ['Men', 'Women','Home', 'Kids', 'GenZ'];

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
