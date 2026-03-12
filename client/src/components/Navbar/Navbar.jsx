import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiTag, FiSearch, FiHeart, FiShoppingBag, FiUser, FiSettings, FiCheck } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem('thriftvault_user');
        if (stored) {
            try {
                setUser(JSON.parse(stored));
            } catch {
                setUser(null);
            }
        }

        // listen for storage changes (e.g. login in same tab via navigate)
        const onStorage = () => {
            const u = localStorage.getItem('thriftvault_user');
            setUser(u ? JSON.parse(u) : null);
        };
        window.addEventListener('storage', onStorage);
        // also listen for a custom event fired after login/signup
        window.addEventListener('thriftvault:auth', onStorage);
        return () => {
            window.removeEventListener('storage', onStorage);
            window.removeEventListener('thriftvault:auth', onStorage);
        };
    }, []);

    const handleProfileClick = () => {
        if (!user) {
            navigate('/login');
        } else {
            navigate('/settings');
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <a href="/" className="navbar-brand">
                    <span className="brand-icon">
                        <FiTag size={20} />
                    </span>
                    <span className="brand-name">ThriftVault</span>
                </a>

                <div className="navbar-search">
                    <span className="search-icon">
                        <FiSearch size={18} />
                    </span>
                    <input
                        type="text"
                        placeholder="Search for vintage finds..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>

                <div className="navbar-actions">
                    <button className="nav-btn" title="Wishlist">
                        <FiHeart size={22} />
                    </button>

                    <button className="nav-btn cart-btn" title="Cart" onClick={() => navigate('/cart')}>
                        <FiShoppingBag size={22} />
                        <span className="cart-badge">3</span>
                    </button>

                    {/* Settings button */}
                    <button className="nav-btn" title="Settings" onClick={() => navigate('/settings')}>
                        <FiSettings size={22} />
                    </button>

                    {/* Profile button — changes based on auth state */}
                    <button
                        className={`nav-btn profile-btn ${user ? 'profile-btn--active' : ''}`}
                        title={user ? `Logged in as ${user.username || user.email}` : 'Login'}
                        onClick={handleProfileClick}
                    >
                        <FiUser size={22} />

                        {user && (
                            <span className="profile-badge" title="Logged in">
                                <FiCheck size={8} color="#fff" />
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}
