import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getProductsBySlug } from '../utils/dummyProducts';
import { addToCart } from '../components/Shoppingcart/cartUtils';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './CategoryPage.css';

export default function CategoryPage() {
    const { subcategory } = useParams();
    const navigate = useNavigate();
    const [toastMsg, setToastMsg] = useState('');
    const [toastType, setToastType] = useState('success');

    const products = getProductsBySlug(subcategory);

    // Prettify the slug back to a display label
    const displayLabel = subcategory
        .replace(/-/g, ' ')
        .replace(/\band\b/g, '&')
        .replace(/\b\w/g, (c) => c.toUpperCase());

    const showToast = (msg, type = 'success') => {
        setToastMsg(msg);
        setToastType(type);
        setTimeout(() => setToastMsg(''), 2500);
    };

    const handleAddToCart = async (product) => {
        const user = localStorage.getItem('thriftvault_user');
        if (!user) {
            showToast('Please log in to add items to cart', 'warn');
            setTimeout(() => navigate('/login'), 1400);
            return;
        }

        try {
            await addToCart({
                _id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
            });
            showToast(`"${product.name}" added to cart! 🛒`);
        } catch (err) {
            const msg = err?.response?.data?.message || 'Failed to add to cart';
            showToast(msg, 'error');
        }
    };

    return (
        <>
            <Navbar />

            {/* Toast */}
            {toastMsg && (
                <div className={`cat-toast cat-toast--${toastType}`}>{toastMsg}</div>
            )}

            <div className="cat-page">
                {/* Breadcrumb */}
                <div className="cat-breadcrumb">
                    <button onClick={() => navigate('/')}>Home</button>
                    <span>/</span>
                    <span>{displayLabel}</span>
                </div>

                {/* Header */}
                <div className="cat-header">
                    <h1 className="cat-title">{displayLabel}</h1>
                    <p className="cat-count">{products.length} items found</p>
                </div>

                {/* Grid */}
                {products.length === 0 ? (
                    <div className="cat-empty">
                        <span className="cat-empty-icon">🛍️</span>
                        <p>No products yet in this category.</p>
                        <button className="cat-empty-btn" onClick={() => navigate('/')}>
                            Browse Other Categories
                        </button>
                    </div>
                ) : (
                    <div className="cat-grid">
                        {products.map((product) => (
                            <div key={product.id} className="cat-card">
                                <div className="cat-card-img-wrap">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="cat-card-img"
                                        loading="lazy"
                                    />
                                    {product.tag && (
                                        <span className="cat-card-tag">{product.tag}</span>
                                    )}
                                </div>
                                <div className="cat-card-body">
                                    <h3 className="cat-card-name">{product.name}</h3>
                                    {product.sizes && product.sizes.length > 0 && (
                                        <div className="cat-card-sizes">
                                            {product.sizes.map((s) => (
                                                <span key={s} className="cat-card-size">{s}</span>
                                            ))}
                                        </div>
                                    )}
                                    <div className="cat-card-footer">
                                        <span className="cat-card-price">₹{product.price.toLocaleString('en-IN')}</span>
                                        <button
                                            className="cat-card-btn"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
}
