import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SellerDashboard.css';

const SELLER = {
    name: 'Priya Sharma',
    email: 'priya@thriftvault.in',
    phone: '+91 98765 43210',
    location: 'Mumbai, Maharashtra',
    storeName: 'ThriftByPriya',
    joined: 'January 2024',
    upi: 'priya@upi',
};

export default function SellerDashboard() {
    const navigate = useNavigate();
    const [totalPublished] = useState(24);
    const [totalSold] = useState(18);

    return (
        <div className="sd-page">

            {/* Header */}
            <header className="sd-header">
                <button className="sd-back" onClick={() => navigate('/')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Back to Store
                </button>
                <div className="sd-header-title">
                    <div className="sd-avatar">{SELLER.storeName.slice(0, 2).toUpperCase()}</div>
                    <div>
                        <h1 className="sd-store-name">{SELLER.storeName}</h1>
                        <span className="sd-badge">Verified Seller</span>
                    </div>
                </div>
            </header>

            <main className="sd-main">

                {/* Stats */}
                <section className="sd-stats">
                    <div className="sd-stat-card">
                        <div className="sd-stat-icon sd-stat-icon--purple">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="12" y1="18" x2="12" y2="12" />
                                <line x1="9" y1="15" x2="15" y2="15" />
                            </svg>
                        </div>
                        <div className="sd-stat-number">{totalPublished}</div>
                        <div className="sd-stat-label">Total Published</div>
                    </div>

                    <div className="sd-stat-card">
                        <div className="sd-stat-icon sd-stat-icon--green">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 0 1-8 0" />
                            </svg>
                        </div>
                        <div className="sd-stat-number">{totalSold}</div>
                        <div className="sd-stat-label">Items Sold</div>
                    </div>
                </section>

                {/* Settings / Credentials */}
                <section className="sd-settings">
                    <h2 className="sd-section-title">Account Details</h2>
                    <div className="sd-credentials">
                        {[
                            { label: 'Full Name', value: SELLER.name },
                            { label: 'Email', value: SELLER.email },
                            { label: 'Phone', value: SELLER.phone },
                            { label: 'Location', value: SELLER.location },
                            { label: 'Store Name', value: SELLER.storeName },
                            { label: 'UPI ID', value: SELLER.upi },
                            { label: 'Member Since', value: SELLER.joined },
                        ].map(row => (
                            <div className="sd-cred-row" key={row.label}>
                                <span className="sd-cred-label">{row.label}</span>
                                <span className="sd-cred-value">{row.value}</span>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
        </div>
    );
}
