import React from 'react';
import { FiHeart } from 'react-icons/fi';
import "./Newarrival.css"
import { newArrivals } from '../../utils/dummy';

export default function Newarrival(){

    return (
        <>
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
                            <div key={product.id} className="product-card">
                                <div className="product-image-wrap">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-image"
                                        loading="lazy"
                                    />
                                    {product.tag && (
                                        <span className="product-tag">{product.tag}</span>
                                    )}
                                    <button className="wishlist-btn" aria-label="Add to wishlist">
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