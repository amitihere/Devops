import { useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiTag, FiShield, FiFileText, FiGlobe, FiHeart } from 'react-icons/fi';
import './SettingsPage.css';

const FEATURES = [
    { icon: '🛍️', title: 'Curated Thrift', desc: 'Hand-picked pre-loved fashion from verified sellers across India.' },
    { icon: '🔒', title: 'Secure Payments', desc: 'SSL-encrypted transactions with buyer protection on every order.' },
    { icon: '🌱', title: 'Sustainable Fashion', desc: 'Each purchase reduces textile waste and supports circular fashion.' },
    { icon: '⚡', title: 'Fast Delivery', desc: 'Standard 3-7 day delivery with express options in major cities.' },
];

const LEGAL = [
    { label: 'Terms of Service', icon: FiFileText, url: '#' },
    { label: 'Privacy Policy', icon: FiShield, url: '#' },
    { label: 'Cookie Policy', icon: FiGlobe, url: '#' },
    { label: 'Refund Policy', icon: FiHeart, url: '#' },
];

export default function AboutPage() {
    const navigate = useNavigate();

    return (
        <div className="sp-page">
            <header className="sp-header">
                <button className="sp-back" onClick={() => navigate('/settings')}>
                    <FiChevronLeft size={16} /> Back
                </button>
                <h1 className="sp-title">About ThriftVault</h1>
            </header>

            <main className="sp-main">
                {/* Brand hero */}
                <div className="sp-about-hero">
                    <div className="sp-about-logo">
                        <FiTag size={36} />
                    </div>
                    <h2 className="sp-about-name">ThriftVault</h2>
                    <p className="sp-about-tagline">
                        India's curated marketplace for pre-loved fashion & unique finds.
                    </p>
                    <div className="sp-about-version-badge">Version 1.0.0</div>
                </div>

                {/* Mission */}
                <div className="sp-card">
                    <h2 className="sp-card-title">Our Mission</h2>
                    <p className="sp-about-text">
                        ThriftVault was founded with a simple belief: great style shouldn't cost the earth —
                        financially or environmentally. We connect conscious shoppers with quality pre-loved pieces,
                        making sustainable fashion accessible to everyone in India.
                    </p>
                    <p className="sp-about-text" style={{ marginTop: 12 }}>
                        Every item on ThriftVault goes through a quality check, ensuring you always receive
                        exactly what you see. Our community of buyers and sellers is what makes us special.
                    </p>
                </div>

                {/* Features */}
                <div className="sp-card">
                    <h2 className="sp-card-title">Why ThriftVault?</h2>
                    <div className="sp-about-features">
                        {FEATURES.map((f, i) => (
                            <div key={i} className="sp-about-feature">
                                <div className="sp-about-feature-icon">{f.icon}</div>
                                <div>
                                    <p className="sp-about-feature-title">{f.title}</p>
                                    <p className="sp-about-feature-desc">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Legal */}
                <div className="sp-card">
                    <h2 className="sp-card-title">
                        <FiShield size={16} /> Legal & Policies
                    </h2>
                    <div className="sp-legal-list">
                        {LEGAL.map((item) => (
                            <a
                                key={item.label}
                                href={item.url}
                                className="sp-legal-item"
                                onClick={(e) => e.preventDefault()}
                            >
                                <item.icon size={16} />
                                <span>{item.label}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer credits */}
                <div className="sp-about-footer">
                    <p>Made with ❤️ in India</p>
                    <p>© 2025 ThriftVault. All rights reserved.</p>
                    <p className="sp-about-footer-sub">Crafted for conscious shoppers everywhere.</p>
                </div>
            </main>
        </div>
    );
}
