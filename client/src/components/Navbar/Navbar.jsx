import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
        }
        // if logged in, clicking profile does nothing for now
    };

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <a href="/" className="navbar-brand">
                    <span className="brand-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                            <line x1="7" y1="7" x2="7.01" y2="7" />
                        </svg>
                    </span>
                    <span className="brand-name">ThriftVault</span>
                </a>

                <div className="navbar-search">
                    <span className="search-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
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
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                    </button>

                    <button className="nav-btn cart-btn" title="Cart">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        <span className="cart-badge">3</span>
                    </button>

                    {/* Profile button — changes based on auth state */}
                    <button
                        className={`nav-btn profile-btn ${user ? 'profile-btn--active' : ''}`}
                        title={user ? `Logged in as ${user.username || user.email}` : 'Login'}
                        onClick={handleProfileClick}
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>

                        {user && (
                            <span className="profile-badge" title="Logged in">
                                <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="2,5 4.5,7.5 8,3" />
                                </svg>
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}
