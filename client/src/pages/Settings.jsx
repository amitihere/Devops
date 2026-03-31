import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FiUser, FiLock, FiMapPin, FiCreditCard,
    FiShoppingBag, FiFileText, FiHeart,
    FiBell, FiHelpCircle, FiInfo,
    FiLogOut, FiTrash2, FiChevronRight, FiChevronLeft
} from 'react-icons/fi';
import './Settings.css';

const sections = [
    {
        title: 'Account',
        items: [
            { id: 'profile', icon: FiUser, color: 'blue', label: 'Profile', desc: 'Name, email, phone & profile photo' },
            { id: 'security', icon: FiLock, color: 'purple', label: 'Security', desc: 'Password, two-factor & login activity' },
            { id: 'address', icon: FiMapPin, color: 'green', label: 'Addresses', desc: 'Saved shipping & billing addresses' },
            { id: 'payment', icon: FiCreditCard, color: 'orange', label: 'Payment Methods', desc: 'Cards, UPI & wallet preferences' },
        ],
    },
    {
        title: 'Shopping',
        items: [
            { id: 'cart', icon: FiShoppingBag, color: 'pink', label: 'Cart', desc: 'View and manage items in your cart' },
            { id: 'orders', icon: FiFileText, color: 'teal', label: 'Orders', desc: 'Track, return & review past orders' },
            { id: 'wishlist', icon: FiHeart, color: 'red', label: 'Wishlist', desc: 'Items you\'ve saved for later' },
        ],
    },
    {
        title: 'Support',
        items: [
            { id: 'help', icon: FiHelpCircle, color: 'amber', label: 'Help Centre', desc: 'FAQs, contact support & chat' },
            { id: 'about', icon: FiInfo, color: 'slate', label: 'About ThriftVault', desc: 'Version, terms & privacy policy' },
        ],
    },
];

const dangerItems = [
    { id: 'logout', icon: FiLogOut, color: 'red', label: 'Log Out', desc: 'Sign out of your account' },
    { id: 'delete', icon: FiTrash2, color: 'red', label: 'Delete Account', desc: 'Permanently remove your account & data', danger: true },
];

export default function Settings() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
    const loadUser = () => {
        const stored = localStorage.getItem('thriftvault_user');
        if (stored) {
        try {
            setUser(JSON.parse(stored));
        } catch {
            setUser(null);
        }
        }
        setUser(null);
    };
    loadUser();
    }, []);

    const initials = user
        ? (user.username || user.email || 'U').slice(0, 2).toUpperCase()
        : 'U';

    const displayName = user?.username || user?.email || 'User';
    const displayEmail = user?.email || '';

    return (
        <div className="settings-page">
            <header className="settings-header">
                <button className="settings-back" onClick={() => navigate('/')}>
                    <FiChevronLeft size={16} />
                    Back
                </button>

                <div className="settings-header-title">
                    <div className="settings-avatar">{initials}</div>
                    <div className="settings-user-info">
                        <h1>{displayName}</h1>
                        {displayEmail && <span>{displayEmail}</span>}
                    </div>
                </div>
            </header>

            <main className="settings-main">

                {sections.map(section => (
                    <section className="settings-section" key={section.title}>
                        <h2 className="settings-section-title">{section.title}</h2>
                        <div className="settings-list">
                            {section.items.map(item => (
                                <div className="settings-item" key={item.id} id={`setting-${item.id}`} role="button" tabIndex={0} onClick={() => {navigate(`/${item.id}`)}}>
                                    <div className={`settings-item-icon settings-icon--${item.color}`}>
                                        <item.icon size={20} />
                                    </div>
                                    <div className="settings-item-text">
                                        <div className="settings-item-label">{item.label}</div>
                                        <div className="settings-item-desc">{item.desc}</div>
                                    </div>
                                    <FiChevronRight className="settings-item-arrow" size={16} />
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                {/* Danger zone */}
                <section className="settings-section">
                    <h2 className="settings-section-title">Danger Zone</h2>
                    <div className="settings-list">
                        {dangerItems.map(item => (
                            <div
                                className={`settings-item ${item.danger ? 'settings-item--danger' : ''}`}
                                key={item.id}
                                id={`setting-${item.id}`}
                                role="button"
                                tabIndex={0}
                            >
                                <div className={`settings-item-icon settings-icon--${item.color}`}>
                                    <item.icon size={19} />
                                </div>
                                <div className="settings-item-text">
                                    <div className="settings-item-label">{item.label}</div>
                                    <div className="settings-item-desc">{item.desc}</div>
                                </div>
                                <FiChevronRight className="settings-item-arrow" size={16} />
                            </div>
                        ))}
                    </div>
                </section>

                <footer className="settings-footer">
                    <span className="settings-version">ThriftVault v1.0.0</span>
                </footer>
            </main>
        </div>
    );
}
