import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getProductsBySlug } from '../utils/dummyProducts';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ProductDetailModal from '../components/ProductDetail/ProductDetailModal';
import './CategoryPage.css';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&q=80';

export default function CategoryPage() {
    const { subcategory } = useParams();
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = getProductsBySlug(subcategory);

    // Prettify the slug back to a display label
    const displayLabel = subcategory
        .replace(/-/g, ' ')
        .replace(/\band\b/g, '&')
        .replace(/\b\w/g, (c) => c.toUpperCase());

    return (
        <>
            <Navbar />

            {/* Product Detail Modal */}
            {selectedProduct && (
                <ProductDetailModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
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
                            <div
                                key={product.id}
                                className="cat-card"
                                onClick={() => setSelectedProduct(product)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="cat-card-img-wrap">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="cat-card-img"
                                        loading="lazy"
                                        onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
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
                                            onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                                        >
                                            View Details
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
