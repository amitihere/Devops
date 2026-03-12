import { FiTruck, FiRotateCcw, FiCheckCircle, FiFeather } from 'react-icons/fi';
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
    { icon: FiTruck,       title: 'Free Shipping',  desc: 'On orders over ₹2,999' },
    { icon: FiRotateCcw,   title: 'Easy Returns',   desc: '30-day hassle-free' },
    { icon: FiCheckCircle, title: 'Quality Checked', desc: 'Every item inspected' },
    { icon: FiFeather,     title: 'Eco Friendly',   desc: 'Sustainable fashion' },
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
                {perks.map((p) => (
                    <div key={p.title} className="perk">
                        <span className="perk-icon"><p.icon size={20} /></span>
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
