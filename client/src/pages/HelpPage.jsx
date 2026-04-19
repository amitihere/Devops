import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiChevronDown, FiMail, FiMessageCircle } from 'react-icons/fi';
import './SettingsPage.css';

const FAQS = [
    {
        q: 'How do I track my order?',
        a: 'Go to Settings → Orders and expand any order card to see its current status. We will also email you updates at every stage.'
    },
    {
        q: 'Can I cancel my order?',
        a: 'Orders can be cancelled within 1 hour of placing them. Contact our support team via email for cancellation requests.'
    },
    {
        q: 'What is the return policy?',
        a: 'We offer a 7-day easy return policy on all items. Items must be in the same condition as received. Initiate a return from the Orders page.'
    },
    {
        q: 'How does payment work?',
        a: 'We support Credit/Debit Cards, UPI (GPay, PhonePe, Paytm), Net Banking, and Cash on Delivery. All online payments are SSL-secured.'
    },
    {
        q: 'How long does delivery take?',
        a: 'Standard delivery takes 3-7 business days. Express delivery (1-2 business days) is available in select cities for an additional ₹99.'
    },
    {
        q: 'Is it safe to buy on ThriftVault?',
        a: 'Yes! Every seller is verified, and all items are quality-checked before listing. We also offer buyer protection on every purchase.'
    },
    {
        q: 'How do I change my password?',
        a: 'Currently, please contact our support team to reset your password. A self-service password reset feature is coming soon.'
    },
    {
        q: 'Can I sell on ThriftVault?',
        a: 'Seller accounts are currently invite-only while we grow our community. Sign up for the waitlist and we will notify you when it opens.'
    },
];

export default function HelpPage() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(null);
    const [formState, setFormState] = useState({ name: '', email: '', msg: '' });
    const [submitted, setSubmitted] = useState(false);

    const toggle = (i) => setOpen(open === i ? null : i);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        setTimeout(() => setSubmitted(true), 600);
    };

    return (
        <div className="sp-page">
            <header className="sp-header">
                <button className="sp-back" onClick={() => navigate('/settings')}>
                    <FiChevronLeft size={16} /> Back
                </button>
                <h1 className="sp-title">Help Centre</h1>
            </header>

            <main className="sp-main">
                {/* Hero */}
                <div className="sp-help-hero">
                    <div className="sp-help-hero-icon">🛟</div>
                    <h2>How can we help you?</h2>
                    <p>Browse FAQs or reach out to our support team.</p>
                </div>

                {/* FAQs */}
                <div className="sp-card">
                    <h2 className="sp-card-title">Frequently Asked Questions</h2>
                    <div className="sp-faq-list">
                        {FAQS.map((faq, i) => (
                            <div key={i} className={`sp-faq-item ${open === i ? 'sp-faq-item--open' : ''}`}>
                                <button
                                    className="sp-faq-question"
                                    onClick={() => toggle(i)}
                                >
                                    <span>{faq.q}</span>
                                    <FiChevronDown
                                        size={16}
                                        style={{
                                            transform: open === i ? 'rotate(180deg)' : 'none',
                                            transition: '0.2s',
                                            flexShrink: 0,
                                        }}
                                    />
                                </button>
                                {open === i && (
                                    <p className="sp-faq-answer">{faq.a}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact */}
                <div className="sp-card">
                    <h2 className="sp-card-title">
                        <FiMessageCircle size={16} /> Contact Support
                    </h2>

                    {submitted ? (
                        <div className="sp-success" style={{ textAlign: 'center', padding: '20px 0' }}>
                            ✅ Message received! We'll reply within 24 hours.
                        </div>
                    ) : (
                        <form className="sp-form" onSubmit={handleSubmit}>
                            <div className="sp-field">
                                <label>Your Name</label>
                                <input
                                    value={formState.name}
                                    onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                                    placeholder="Jane Doe"
                                    required
                                />
                            </div>
                            <div className="sp-field">
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={formState.email}
                                    onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                            <div className="sp-field">
                                <label>Message</label>
                                <textarea
                                    rows={4}
                                    value={formState.msg}
                                    onChange={(e) => setFormState((p) => ({ ...p, msg: e.target.value }))}
                                    placeholder="Describe your issue…"
                                    required
                                />
                            </div>
                            <button type="submit" className="sp-save-btn">
                                <FiMail size={15} /> Send Message
                            </button>
                        </form>
                    )}
                </div>

                {/* Quick links */}
                <div className="sp-help-links">
                    <a href="mailto:support@thriftvault.in" className="sp-help-link">
                        <span>✉️</span> support@thriftvault.in
                    </a>
                    <a href="tel:+918000000000" className="sp-help-link">
                        <span>📞</span> +91 8000 000 000
                    </a>
                </div>
            </main>
        </div>
    );
}
