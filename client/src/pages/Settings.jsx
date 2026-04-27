import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FiUser, FiMapPin,
    FiShoppingBag, FiFileText, FiHelpCircle, FiInfo,
    FiLogOut, FiChevronRight, FiChevronLeft
} from 'react-icons/fi';
import './Settings.css';

const sections = [
    {
        title: 'Account',
        items: [
            { id: 'profile', icon: FiUser, color: 'blue', label: 'Profile', desc: 'Name, email, phone & profile photo' },
            { id: 'address', icon: FiMapPin, color: 'green', label: 'Addresses', desc: 'Saved shipping & billing addresses' },
        ],
    },
    {
        title: 'Shopping',
        items: [
            { id: 'cart', icon: FiShoppingBag, color: 'pink', label: 'Cart', desc: 'View and manage items in your cart' },
            { id: 'orders', icon: FiFileText, color: 'teal', label: 'Orders', desc: 'Track, return & review past orders' },
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
    { id: 'logout', icon: FiLogOut, color: 'red', label: 'Log Out', desc: 'Sign out of your account' }
];

// Map item id → frontend route
const ROUTE_MAP = {
    profile: '/profile',
    address: '/address',
    cart: '/cart',
    orders: '/orders',
    help: '/help',
    about: '/about',
};

export default function Settings() {
    const navigate = useNavigate();
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem('thriftvault_user');
        if (!stored) return null;

        try {
            return JSON.parse(stored);
        } catch {
            return null;
        }
    });

    const handleLogout = () => {
        localStorage.removeItem('thriftvault_user');
        setUser(null);
        navigate('/');
    };
    const initials = user
        ? (user.username || user.email || 'U').slice(0, 2).toUpperCase()
        : 'U';

    const displayName = user?.username || user?.email || 'Guest';
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
                                <div
                                    className="settings-item"
                                    key={item.id}
                                    id={`setting-${item.id}`}
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => navigate(ROUTE_MAP[item.id] || `/${item.id}`)}
                                    onKeyDown={(e) => e.key === 'Enter' && navigate(ROUTE_MAP[item.id] || `/${item.id}`)}
                                >
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
                                className={`settings-item settings-item--danger`}
                                key={item.id}
                                id={`setting-${item.id}`}
                                role="button"
                                tabIndex={0}
                                onClick={item.id === 'logout' ? handleLogout : () => navigate(`/${item.id}`)}
                                onKeyDown={(e) => e.key === 'Enter' && (item.id === 'logout' ? handleLogout() : navigate(`/${item.id}`))}
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
