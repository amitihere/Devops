import { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import './StyleGuide.css';
import { genZPicks } from '../../utils/dummy';
import { vibeFilters } from '../../utils/dummy';
import ProductDetailModal from '../ProductDetail/ProductDetailModal';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&q=80';

export default function StyleGuide() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (item) => {
        // Normalize genZPick shape to match ProductDetailModal expectations
        setSelectedProduct({
            id: String(item.id),
            name: item.title,
            price: item.price,
            image: item.image,
            sizes: item.sizes,
            tag: item.label,
            category: item.vibe,
        });
    };

    return (
        <>
        {selectedProduct && (
            <ProductDetailModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        )}
        <section className="genz-section">
            <div className="genz-header">
                <div className="genz-header-left">
                    <div className="genz-eyebrow-row">
                        <span className="genz-eyebrow">Gen Z Choice</span>
                        <span className="genz-fire-tag">Hot Right Now</span>
                    </div>
                    <h2 className="genz-title">Drip That Hits Different</h2>
                    <p className="genz-subtitle">
                        Thrifted fits curated for the culture — jackets, baggies, hoodies and more.
                        All pre-loved. All fire.
                    </p>
                </div>
                <button className="genz-view-all">Shop All Fits</button>
            </div>

            {/* Vibe Filter Pills */}
            <div className="genz-filters">
                {vibeFilters.map((f) => (
                    <button key={f} className={`genz-filter-pill ${f === 'All' ? 'active' : ''}`}>
                        {f}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="genz-grid">
                {genZPicks.map((item) => (
                    <div
                        key={item.id}
                        className="genz-card"
                        onClick={() => openModal(item)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="genz-image-wrap">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="genz-image"
                                loading="lazy"
                                onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                            />
                            <span className="genz-label-badge">{item.label}</span>
                            <div className="genz-overlay-actions">
                                <button
                                    className="genz-wishlist"
                                    aria-label="Save"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <FiHeart size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="genz-card-body">
                            <div className="genz-tags-row">
                                {item.tags.map((t) => (
                                    <span key={t} className="genz-tag">{t}</span>
                                ))}
                            </div>
                            <h3 className="genz-card-title">{item.title}</h3>
                            <p className="genz-vibe">{item.vibe}</p>

                            <div className="genz-sizes-row">
                                {item.sizes.map((s) => (
                                    <span key={s} className="genz-size">{s}</span>
                                ))}
                            </div>

                            <div className="genz-card-footer">
                                <div className="genz-pricing">
                                    <span className="genz-price">₹{item.price.toLocaleString('en-IN')}</span>
                                </div>
                                <button
                                    className="genz-add-btn"
                                    onClick={(e) => { e.stopPropagation(); openModal(item); }}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="genz-banner">
                <div className="genz-banner-text">
                    <span className="genz-banner-tag">No Cap</span>
                    <h3 className="genz-banner-heading">New Drops Every Week</h3>
                    <p className="genz-banner-sub">
                        Follow the drop calendar — fresh thrifted Gen Z pieces land every Monday and Thursday.
                    </p>
                </div>
                <button className="genz-banner-cta">Follow the Drop</button>
            </div>
        </section>
        </>
    );
}

