import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiFilePlus, FiShoppingBag } from 'react-icons/fi';
import './SellerDashboard.css';

const SELLER = {
    name: 'Default',
    email: 'default@thriftvault.in',
    phone: '+91 98765 43210',
    location: 'Mumbai, Maharashtra',
    storeName: 'ThriftByDefault',
    joined: 'January 2024',
    upi: 'default@upi',
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
                    <FiChevronLeft size={16} />
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
                            <FiFilePlus size={22} />
                        </div>
                        <div className="sd-stat-number">{totalPublished}</div>
                        <div className="sd-stat-label">Total Published</div>
                    </div>

                    <div className="sd-stat-card">
                        <div className="sd-stat-icon sd-stat-icon--green">
                            <FiShoppingBag size={22} />
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
