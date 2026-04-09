import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import "./Newarrival.css"
import { newArrivals } from '../../utils/dummy';
import ProductDetailModal from '../ProductDetail/ProductDetailModal';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&q=80';

export default function Newarrival(){
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <>
        {selectedProduct && (
            <ProductDetailModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        )}
        <section className="section">
                <div className="section-header">
                    <div>
                        <h2 className="section-title">New Arrivals</h2>
                        <p className="section-subtitle">Fresh finds added daily</p>
                    </div>
                    <button className="view-all-btn">View All</button>
                </div>

                {newArrivals.length > 0 ? (
                    <div className="product-grid">
                        {newArrivals.map((product) => (
                            <div
                                key={product.id}
                                className="product-card"
                                onClick={() => setSelectedProduct(product)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="product-image-wrap">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-image"
                                        loading="lazy"
                                        onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                                    />
                                    {product.tag && (
                                        <span className="product-tag">{product.tag}</span>
                                    )}
                                    <button
                                        className="wishlist-btn"
                                        aria-label="Add to wishlist"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FiHeart size={18} />
                                    </button>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-name">{product.name}</h3>
                                    <div className="product-pricing">
                                        <span className="product-price">
                                            ₹{product.price.toLocaleString('en-IN')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="empty-state">
                        <p>No items found in this category yet.</p>
                        <p className="empty-hint">Check back soon — new finds drop daily!</p>
                    </div>
                )}
            </section>
        </>
    )
}