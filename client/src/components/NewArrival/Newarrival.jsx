import React from 'react';
import { FiHeart } from 'react-icons/fi';
import "./Newarrival.css"

export default function Newarrival(){
    const newArrivals = [
    {
        id: 1,
        name: 'Vintage Denim Jacket',
        price: 2899,
        image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500&q=80',
        tag: 'Just In',
        category: 'Outerwear',
    },
    {
        id: 2,
        name: 'Retro Floral Dress',
        price: 2399,
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80',
        tag: 'Popular',
        category: 'Women',
    },
    {
        id: 3,
        name: 'Classic White Sneakers',
        price: 1849,
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80',
        tag: null,
        category: 'Shoes',
    },
    {
        id: 4,
        name: 'Leather Crossbody Bag',
        price: 3349,
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80',
        tag: 'Best Seller',
        category: 'Bags',
    },
    {
        id: 5,
        name: 'Oversized Knit Sweater',
        price: 2199,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80',
        tag: null,
        category: 'Tops',
    },
    {
        id: 6,
        name: 'High-Waisted Jeans',
        price: 2649,
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80',
        tag: 'Just In',
        category: 'Bottoms',
    },
    {
        id: 7,
        name: 'Graphic Tee – Retro',
        price: 1249,
        image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80',
        tag: null,
        category: 'Tops',
    },
    {
        id: 8,
        name: 'Corduroy Trousers',
        price: 2449,
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80',
        tag: 'Popular',
        category: 'Men',
    },
];
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