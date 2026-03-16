import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiTag, FiSearch, FiHeart, FiShoppingBag, FiUser, FiSettings, FiCheck } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [user, setUser] = useState(null);
    const [count,setCount] = useState(0);
    const [loader,setLoader] = useState(true)

    const navigate = useNavigate();

    useEffect(() => {
        // const loader = async () => {
        //     const NumberItems = await getCount()
        //     // const UserProfile = axios.get("http://localhost:3000/api/user/profile", {
        //     //     withCredentials: true,
        //     // })
        //     setCount(NumberItems);
        //     // setUser(UserProfile.data);
        //     setLoader(false);
        // }
        // loader();
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
                        {count != 0 && <span className="cart-badge">{count}</span>}
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
