import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiPackage, FiChevronRight } from 'react-icons/fi';
import axios from 'axios';
import './SettingsPage.css';

const BASE = 'http://localhost:3000/api/user';

const STATUS_COLORS = {
    pending: { bg: '#fef3c7', color: '#d97706', label: 'Pending' },
    confirmed: { bg: '#dbeafe', color: '#2563eb', label: 'Confirmed' },
    shipped: { bg: '#ede9fe', color: '#7c3aed', label: 'Shipped' },
    delivered: { bg: '#d1fae5', color: '#059669', label: 'Delivered' },
    cancelled: { bg: '#fee2e2', color: '#dc2626', label: 'Cancelled' },
};

function getUserId() {
    const stored = localStorage.getItem('thriftvault_user');
    if (!stored) return null;
    return JSON.parse(stored)._id;
}

export default function OrdersPage() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expanded, setExpanded] = useState(null);

    useEffect(() => {
        const userId = getUserId();
        if (!userId) { navigate('/login'); return; }

        axios.get(`${BASE}/orders`, { params: { userId } })
            .then((res) => setOrders(res.data.orders || []))
            .catch(() => setOrders([]))
            .finally(() => setLoading(false));
    }, [navigate]);

    const toggleExpand = (id) => setExpanded(expanded === id ? null : id);

    const formatDate = (iso) => new Date(iso).toLocaleDateString('en-IN', {
        day: 'numeric', month: 'short', year: 'numeric'
    });

    return (
        <div className="sp-page">
            <header className="sp-header">
                <button className="sp-back" onClick={() => navigate('/settings')}>
                    <FiChevronLeft size={16} /> Back
                </button>
                <h1 className="sp-title">My Orders</h1>
            </header>

            <main className="sp-main">
                {loading ? (
                    <div className="sp-loading">Loading your orders…</div>
                ) : orders.length === 0 ? (
                    <div className="sp-empty">
                        <div className="sp-empty-icon">📦</div>
                        <p className="sp-empty-title">No orders yet</p>
                        <p className="sp-empty-sub">Start shopping and your orders will appear here.</p>
                        <button className="sp-save-btn" style={{ marginTop: 16 }} onClick={() => navigate('/')}>
                            Browse Products
                        </button>
                    </div>
                ) : (
                    <div className="sp-orders-list">
                        {orders.map((order) => {
                            const s = STATUS_COLORS[order.status] || STATUS_COLORS.confirmed;
                            const isOpen = expanded === order._id;
                            return (
                                <div key={order._id} className="sp-order-card">
                                    <div
                                        className="sp-order-header"
                                        onClick={() => toggleExpand(order._id)}
                                        role="button"
                                        tabIndex={0}
                                    >
                                        <div className="sp-order-meta">
                                            <span className="sp-order-id">#{order.orderId}</span>
                                            <span className="sp-order-date">{formatDate(order.createdAt)}</span>
                                        </div>
                                        <div className="sp-order-right">
                                            <span
                                                className="sp-order-status"
                                                style={{ background: s.bg, color: s.color }}
                                            >
                                                {s.label}
                                            </span>
                                            <span className="sp-order-total">
                                                ₹{order.totalAmount?.toLocaleString('en-IN')}
                                            </span>
                                            <FiChevronRight
                                                size={16}
                                                style={{
                                                    transform: isOpen ? 'rotate(90deg)' : 'none',
                                                    transition: '0.2s',
                                                    color: '#9ca3af',
                                                    flexShrink: 0,
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {isOpen && (
                                        <div className="sp-order-body">
                                            {/* Items */}
                                            <div className="sp-order-items">
                                                {order.items.map((item, i) => (
                                                    <div key={i} className="sp-order-item">
                                                        <img
                                                            src={item.image || 'https://via.placeholder.com/48?text=📦'}
                                                            alt={item.name}
                                                        />
                                                        <div>
                                                            <p className="sp-order-item-name">{item.name}</p>
                                                            <p className="sp-order-item-qty">Qty: {item.quantity}</p>
                                                        </div>
                                                        <span className="sp-order-item-price">
                                                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Address & Payment */}
                                            <div className="sp-order-info-grid">
                                                <div className="sp-order-info-box">
                                                    <p className="sp-order-info-label">📍 Delivered To</p>
                                                    <p>{order.address?.name}</p>
                                                    <p>{order.address?.street}</p>
                                                    <p>
                                                        {[order.address?.city, order.address?.state, order.address?.pincode]
                                                            .filter(Boolean).join(', ')}
                                                    </p>
                                                </div>
                                                <div className="sp-order-info-box">
                                                    <p className="sp-order-info-label">💳 Payment</p>
                                                    <p style={{ textTransform: 'uppercase', fontWeight: 600 }}>
                                                        {order.paymentMethod}
                                                    </p>
                                                    <p style={{ marginTop: 4 }}>
                                                        Total: <strong>₹{order.totalAmount?.toLocaleString('en-IN')}</strong>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>
        </div>
    );
}
