import './StyleGuide.css';

const genZPicks = [
    {
        id: 1,
        label: 'Trending Now',
        title: 'Oversized Puffer Jacket',
        vibe: 'Cold-weather flex',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80',
        price: 1299,
        originalPrice: 3499,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        tags: ['Streetwear', 'Winter'],
    },
    {
        id: 2,
        label: 'Top Pick',
        title: 'Baggy Cargo Pants',
        vibe: 'Y2K meets today',
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80',
        price: 899,
        originalPrice: 2299,
        sizes: ['S', 'M', 'L', 'XL'],
        tags: ['Y2K', 'Casual'],
    },
    {
        id: 3,
        label: 'Fan Favourite',
        title: 'Washed Hoodie',
        vibe: 'Soft aesthetic energy',
        image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80',
        price: 749,
        originalPrice: 1899,
        sizes: ['XS', 'S', 'M', 'L'],
        tags: ['Cozy', 'Aesthetic'],
    },
    {
        id: 4,
        label: 'Just Dropped',
        title: 'Vintage Leather Jacket',
        vibe: 'Grunge with attitude',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
        price: 1799,
        originalPrice: 4999,
        sizes: ['S', 'M', 'L'],
        tags: ['Grunge', 'Statement'],
    },
    {
        id: 5,
        label: 'Core Staple',
        title: 'Wide-Leg Denim',
        vibe: '90s denim renaissance',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80',
        price: 999,
        originalPrice: 2599,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        tags: ['90s', 'Denim'],
    },
    {
        id: 6,
        label: 'Viral Piece',
        title: 'Cropped Bomber Jacket',
        vibe: 'Effortlessly cool',
        image: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=600&q=80',
        price: 1099,
        originalPrice: 2899,
        sizes: ['XS', 'S', 'M'],
        tags: ['Streetwear', 'Minimal'],
    },
];

const vibeFilters = ['All', 'Streetwear', 'Y2K', 'Aesthetic', 'Grunge', 'Denim'];

export default function StyleGuide() {
    return (
        <section className="genz-section">
            {/* Header */}
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
                    <div key={item.id} className="genz-card">
                        <div className="genz-image-wrap">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="genz-image"
                                loading="lazy"
                            />
                            <span className="genz-label-badge">{item.label}</span>
                            <div className="genz-overlay-actions">
                                <button className="genz-wishlist" aria-label="Save">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                    </svg>
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
                                    <span className="genz-original">₹{item.originalPrice.toLocaleString('en-IN')}</span>
                                    <span className="genz-off">
                                        {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% off
                                    </span>
                                </div>
                                <button className="genz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Banner */}
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
    );
}
