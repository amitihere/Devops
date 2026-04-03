import { useNavigate } from 'react-router-dom';
import './CategoryScroll.css';
import { categoryData, categoryOrder } from '../../utils/category';
import { toSlug } from '../../utils/dummyProducts';

export default function CategoryScroll({ activeCategory, setActiveCategory }) {
    const navigate = useNavigate();

    const handleCategoryClick = (label) => {
        setActiveCategory(label);
    };

    const handleSubcategoryClick = (parentLabel, itemLabel) => {
        const slug = toSlug(itemLabel);
        navigate(`/category/${toSlug(parentLabel)}/${slug}`);
    };

    const renderItems = (parentLabel, items) =>
        items
            .filter((item) => item && item.trim().length > 0 && item.length < 60)
            .map((item) => (
                <li key={item}>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handleSubcategoryClick(parentLabel, item);
                        }}
                    >
                        {item}
                    </a>
                </li>
            ));

    return (
        <div className="category-bar">
            <nav className="category-nav">
                {categoryOrder.map((label) => {
                    const data = categoryData[label];
                    return (
                        <div key={label} className="category-item">
                            <button
                                className={`category-link ${activeCategory === label ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(label)}
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
                                                        {renderItems(label, sec.items)}
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
                                                        {renderItems(label, sec.items)}
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
                                                        {renderItems(label, sec.items)}
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
