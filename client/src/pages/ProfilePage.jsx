import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiUser, FiSave, FiCamera } from 'react-icons/fi';
import axios from 'axios';
import './SettingsPage.css';

const BASE = 'http://localhost:3000/api/user';

export default function ProfilePage() {
    const navigate = useNavigate();
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const [form, setForm] = useState({ username: '', email: '', phone: '' });

    useEffect(() => {
        const stored = localStorage.getItem('thriftvault_user');
        if (stored) {
            const user = JSON.parse(stored);
            setForm({
                username: user.username || '',
                email: user.email || '',
                phone: user.phone || '',
            });
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((p) => ({ ...p, [name]: value }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        setError('');
        setMessage('');

        const stored = localStorage.getItem('thriftvault_user');
        if (!stored) { navigate('/login'); return; }
        const user = JSON.parse(stored);

        try {
            const res = await axios.put(`${BASE}/auth/profile`, {
                userId: user._id,
                username: form.username,
                phone: form.phone,
            });
            const updated = res.data.user;
            localStorage.setItem('thriftvault_user', JSON.stringify({ ...user, ...updated }));
            setMessage('Profile updated successfully!');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update profile.');
        } finally {
            setSaving(false);
        }
    };

    const initials = form.username ? form.username.slice(0, 2).toUpperCase() : 'U';

    return (
        <div className="sp-page">
            <header className="sp-header">
                <button className="sp-back" onClick={() => navigate('/settings')}>
                    <FiChevronLeft size={16} /> Back
                </button>
                <h1 className="sp-title">My Profile</h1>
            </header>

            <main className="sp-main">
                {/* Avatar */}
                <div className="sp-avatar-section">
                    <div className="sp-avatar">{initials}</div>
                    <button className="sp-avatar-change">
                        <FiCamera size={14} /> Change Photo
                    </button>
                </div>

                <form className="sp-form" onSubmit={handleSave}>
                    <div className="sp-card">
                        <h2 className="sp-card-title">
                            <FiUser size={16} /> Personal Information
                        </h2>

                        <div className="sp-field">
                            <label>Username</label>
                            <input
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                placeholder="yourname"
                            />
                        </div>
                        <div className="sp-field">
                            <label>Email Address</label>
                            <input
                                name="email"
                                value={form.email}
                                disabled
                                className="sp-input-disabled"
                            />
                            <p className="sp-field-hint">Email cannot be changed.</p>
                        </div>
                        <div className="sp-field">
                            <label>Phone Number</label>
                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="+91 98765 43210"
                            />
                        </div>
                    </div>

                    {message && <div className="sp-success">{message}</div>}
                    {error && <div className="sp-error">{error}</div>}

                    <button type="submit" className="sp-save-btn" disabled={saving}>
                        <FiSave size={15} />
                        {saving ? 'Saving…' : 'Save Changes'}
                    </button>
                </form>
            </main>
        </div>
    );
}
