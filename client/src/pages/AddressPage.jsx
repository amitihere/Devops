import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiMapPin, FiSave, FiPlus } from 'react-icons/fi';
import axios from 'axios';
import './SettingsPage.css';

const BASE = '/api/user';

export default function AddressPage() {
    const navigate = useNavigate();
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const [form, setForm] = useState({
        street: '',
        city: '',
        state: '',
        pincode: '',
    });

    useEffect(() => {
        const stored = localStorage.getItem('thriftvault_user');
        if (stored) {
            const user = JSON.parse(stored);
            if (user.address) {
                setForm({
                    street: user.address.street || '',
                    city: user.address.city || '',
                    state: user.address.state || '',
                    pincode: user.address.pincode || '',
                });
            }
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
                address: form,
            });
            const updated = res.data.user;
            localStorage.setItem('thriftvault_user', JSON.stringify({ ...user, ...updated }));
            setMessage('Address saved successfully!');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to save address.');
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="sp-page">
            <header className="sp-header">
                <button className="sp-back" onClick={() => navigate('/settings')}>
                    <FiChevronLeft size={16} /> Back
                </button>
                <h1 className="sp-title">Addresses</h1>
            </header>

            <main className="sp-main">
                <form className="sp-form" onSubmit={handleSave}>
                    <div className="sp-card">
                        <h2 className="sp-card-title">
                            <FiMapPin size={16} /> Default Shipping Address
                        </h2>

                        <div className="sp-field">
                            <label>Street / Area</label>
                            <input
                                name="street"
                                value={form.street}
                                onChange={handleChange}
                                placeholder="Flat No., Building, Street, Area"
                            />
                        </div>
                        <div className="sp-row-2">
                            <div className="sp-field">
                                <label>City</label>
                                <input
                                    name="city"
                                    value={form.city}
                                    onChange={handleChange}
                                    placeholder="Mumbai"
                                />
                            </div>
                            <div className="sp-field">
                                <label>State</label>
                                <input
                                    name="state"
                                    value={form.state}
                                    onChange={handleChange}
                                    placeholder="Maharashtra"
                                />
                            </div>
                        </div>
                        <div className="sp-field">
                            <label>PIN Code</label>
                            <input
                                name="pincode"
                                value={form.pincode}
                                onChange={handleChange}
                                placeholder="400001"
                                maxLength={6}
                            />
                        </div>
                    </div>

                    {/* Saved address preview */}
                    {form.street && (
                        <div className="sp-address-preview">
                            <div className="sp-address-preview-icon">📍</div>
                            <div className="sp-address-preview-text">
                                <p className="sp-address-preview-line">{form.street}</p>
                                <p className="sp-address-preview-line">
                                    {[form.city, form.state, form.pincode].filter(Boolean).join(', ')}
                                </p>
                            </div>
                            <span className="sp-address-badge">Default</span>
                        </div>
                    )}

                    {message && <div className="sp-success">{message}</div>}
                    {error && <div className="sp-error">{error}</div>}

                    <button type="submit" className="sp-save-btn" disabled={saving}>
                        <FiSave size={15} />
                        {saving ? 'Saving…' : 'Save Address'}
                    </button>
                </form>

                <div className="sp-add-btn-wrap">
                    <button className="sp-add-btn" disabled>
                        <FiPlus size={15} /> Add New Address
                    </button>
                    <p className="sp-field-hint" style={{ textAlign: 'center', marginTop: 6 }}>
                        Multiple address support coming soon
                    </p>
                </div>
            </main>
        </div>
    );
}
