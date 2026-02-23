import './HomePage.css';
import Footer from "../components/Footer/Footer"
import StyleGuide from '../components/StyleGuide/StyleGuide';
import Newarrival from '../components/NewArrival/Newarrival';

const heroSlides = [
    {
        image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1400&q=80',
        title: 'Curated Vintage',
        subtitle: 'Timeless pieces, sustainably sourced',
    },
];



const trendingCollections = [
    {
        id: 1,
        title: '90s Revival',
        desc: 'Iconic looks from the decade',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
        count: 48,
    },
    {
        id: 2,
        title: 'Minimal Essentials',
        desc: 'Clean, timeless wardrobe staples',
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80',
        count: 35,
    },
    {
        id: 3,
        title: 'Streetwear Drops',
        desc: 'Bold and edgy everyday wear',
        image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600&q=80',
        count: 62,
    },
];

const perks = [
    { icon: null, title: 'Free Shipping', desc: 'On orders over ₹2,999' },
    { icon: null, title: 'Easy Returns', desc: '30-day hassle-free' },
    { icon: null, title: 'Quality Checked', desc: 'Every item inspected' },
    { icon: null, title: 'Eco Friendly', desc: 'Sustainable fashion' },
];

const perkIcons = [
    <svg key="ship" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
    <svg key="return" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 .49-4.95" /></svg>,
    <svg key="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
    <svg key="leaf" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>,
];

export default function HomePage() {

    return (
        <main className="home">
            {/* Hero Banner */}
            <section className="hero">
                <img
                    src={heroSlides[0].image}
                    alt="Thrift store clothing rack"
                    className="hero-image"
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <span className="hero-tag">New Season</span>
                    <h1 className="hero-title">{heroSlides[0].title}</h1>
                    <p className="hero-subtitle">{heroSlides[0].subtitle}</p>
                    <button className="hero-cta">Shop Now</button>
                </div>
            </section>

            {/* Perks Strip */}
            <section className="perks-strip">
                {perks.map((p, idx) => (
                    <div key={p.title} className="perk">
                        <span className="perk-icon">{perkIcons[idx]}</span>
                        <div>
                            <span className="perk-title">{p.title}</span>
                            <span className="perk-desc">{p.desc}</span>
                        </div>
                    </div>
                ))}
            </section>

            {/* New Arrivals */}
            <Newarrival/>

            {/* Trending Collections */}
            <section className="section">
                <div className="section-header">
                    <div>
                        <h2 className="section-title">Trending Collections</h2>
                        <p className="section-subtitle">Curated for you</p>
                    </div>
                </div>
                <div className="collections-grid">
                    {trendingCollections.map((col) => (
                        <div key={col.id} className="collection-card">
                            <img
                                src={col.image}
                                alt={col.title}
                                className="collection-image"
                                loading="lazy"
                            />
                            <div className="collection-overlay" />
                            <div className="collection-info">
                                <h3 className="collection-title">{col.title}</h3>
                                <p className="collection-desc">{col.desc}</p>
                                <span className="collection-count">{col.count} items</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <StyleGuide />

            <section className="sustainability">
                <div className="sustain-content">
                    <span className="sustain-badge">Our Mission</span>
                    <h2 className="sustain-title">Fashion That Gives Back</h2>
                    <p className="sustain-text">
                        Every ThriftVault purchase extends the life of a garment, reducing
                        waste and carbon footprint. Join the movement towards conscious
                        fashion.
                    </p>
                    <div className="sustain-stats">
                        <div className="stat">
                            <span className="stat-number">12K+</span>
                            <span className="stat-label">Items Rescued</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">8.5 Tons</span>
                            <span className="stat-label">CO₂ Saved</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">25K+</span>
                            <span className="stat-label">Happy Shoppers</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
