import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiTag, FiArrowLeft, FiMail, FiLock, FiUser, FiPhone } from 'react-icons/fi';
import './Auth.css';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const [mode, setMode] = useState(location.pathname === '/signup' ? 'signup' : 'login');

    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [signupForm, setSignupForm] = useState({ username: '', email: '', phone: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (setter) => (e) => {
        setter(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setError('');
    };

    const submit = async (url, body) => {
        setLoading(true);
        setError('');
        try {
            const res = await fetch(`${API_BASE}${url}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || data.message || 'Something went wrong');
            localStorage.setItem('thriftvault_user', JSON.stringify(data.user));
            window.dispatchEvent(new Event('thriftvault:auth'));
            navigate('/');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-root">
            {/* ── LEFT ── */}
            <div className="auth-left">
                <div className="auth-blob auth-blob--1" />
                <div className="auth-blob auth-blob--2" />
                <div className="auth-left-inner">
                    <FiTag size={32} className="auth-left-icon" />
                    <h2 className="auth-left-title">Welcome to<br /><span>ThriftVault</span></h2>
                    <p className="auth-left-sub">Your curated marketplace for pre-loved fashion &amp; unique finds.</p>
                </div>
            </div>

            {/* ── RIGHT ── */}
            <div className="auth-right">
                <button className="auth-back" onClick={() => navigate('/')}>
                    <FiArrowLeft size={15} /> Back
                </button>

                <div className="auth-card">
                    <h1 className="auth-title">{mode === 'login' ? 'Log in' : 'Sign up'}</h1>
                    <p className="auth-subtitle">
                        {mode === 'login' ? 'Sign in to your account' : 'Create a new account'}
                    </p>

                    <form className="auth-form" onSubmit={(e) => {
                        e.preventDefault();
                        mode === 'login'
                            ? submit('/api/user/auth/login', loginForm)
                            : submit('/api/user/auth/signup', signupForm);
                    }}>
                        {mode === 'signup' && (
                            <Field id="su-user" label="Username" icon={<FiUser size={15} />}
                                name="username" type="text" placeholder="e.g. vintagelover"
                                value={signupForm.username} onChange={handleChange(setSignupForm)} />
                        )}

                        <Field id={`${mode}-email`} label="Email" icon={<FiMail size={15} />}
                            name="email" type="email" placeholder="you@example.com"
                            value={mode === 'login' ? loginForm.email : signupForm.email}
                            onChange={handleChange(mode === 'login' ? setLoginForm : setSignupForm)} />

                        {mode === 'signup' && (
                            <Field id="su-phone" label="Phone" icon={<FiPhone size={15} />}
                                name="phone" type="tel" placeholder="+91 98765 43210"
                                value={signupForm.phone} onChange={handleChange(setSignupForm)} />
                        )}

                        <Field id={`${mode}-pw`} label="Password" icon={<FiLock size={15} />}
                            name="password" type="password"
                            placeholder={mode === 'login' ? 'Your password' : 'At least 8 characters'}
                            value={mode === 'login' ? loginForm.password : signupForm.password}
                            onChange={handleChange(mode === 'login' ? setLoginForm : setSignupForm)} />

                        {error && <p className="auth-error">{error}</p>}

                        <button type="submit" className="auth-btn" disabled={loading}>
                            {loading ? 'Please wait…' : mode === 'login' ? 'Log in' : 'Create Account'}
                        </button>
                    </form>

                    <p className="auth-switch">
                        {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                        <button type="button" onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(''); }}>
                            {mode === 'login' ? 'Sign up' : 'Log in'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

function Field({ id, label, icon, ...inputProps }) {
    return (
        <div className="auth-field">
            <label htmlFor={id}>{label}</label>
            <div className="auth-input-wrap">
                <span className="auth-input-icon">{icon}</span>
                <input id={id} required {...inputProps} />
            </div>
        </div>
    );
}