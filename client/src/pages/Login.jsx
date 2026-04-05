import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiTag, FiArrowLeft, FiMail, FiLock, FiUser, FiPhone } from 'react-icons/fi';
import './Auth.css';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default function Auth() {
    const navigate = useNavigate();
    const [path, setPath] = useState('login');

    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [signupForm, setSignupForm] = useState({ username: '', email: '', phone: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (setter) => (e) => {
        const { name, value } = e.target;
        setter(prev => ({ ...prev, [name]: value }));
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

            if (data.user) {
                localStorage.setItem('thriftvault_user', JSON.stringify(data.user));
            }

            navigate('/');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-root">
            {/* LEFT */}
            <div className="auth-left">
                <div className="auth-blob auth-blob--1" />
                <div className="auth-blob auth-blob--2" />
                <div className="auth-left-inner">
                    <FiTag size={32} className="auth-left-icon" />
                    <h2 className="auth-left-title">
                        Welcome to<br /><span>ThriftVault</span>
                    </h2>
                    <p className="auth-left-sub">
                        Your curated marketplace for pre-loved fashion & unique finds.
                    </p>
                </div>
            </div>

            {/* RIGHT */}
            <div className="auth-right">
                <button className="auth-back" onClick={() => navigate('/')}>
                    <FiArrowLeft size={15} /> Back
                </button>

                <div className="auth-card">
                    <h1 className="auth-title">{path === 'login' ? 'Log in' : 'Sign up'}</h1>

                    <p className="auth-subtitle">
                        {path === 'login'
                            ? 'Sign in to your account'
                            : 'Create a new account'}
                    </p>

                    <form
                        className="auth-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            path === 'login'
                                ? submit('/api/user/auth/login', loginForm)
                                : submit('/api/user/auth/signup', signupForm);
                        }}
                    >
                        {/* USERNAME */}
                        {path === 'signup' && (
                            <div className="auth-field">
                                <label>Username</label>
                                <div className="auth-input-wrap">
                                    <span className="auth-input-icon"><FiUser size={15} /></span>
                                    <input
                                        name="username"
                                        type="text"
                                        placeholder="e.g. vintagelover"
                                        value={signupForm.username}
                                        onChange={handleChange(setSignupForm)}
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {/* EMAIL */}
                        <div className="auth-field">
                            <label>Email</label>
                            <div className="auth-input-wrap">
                                <span className="auth-input-icon"><FiMail size={15} /></span>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={path === 'login' ? loginForm.email : signupForm.email}
                                    onChange={handleChange(path === 'login' ? setLoginForm : setSignupForm)}
                                    required
                                />
                            </div>
                        </div>

                        {/* PHONE */}
                        {path === 'signup' && (
                            <div className="auth-field">
                                <label>Phone</label>
                                <div className="auth-input-wrap">
                                    <span className="auth-input-icon"><FiPhone size={15} /></span>
                                    <input
                                        name="phone"
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        value={signupForm.phone}
                                        onChange={handleChange(setSignupForm)}
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {/* PASSWORD */}
                        <div className="auth-field">
                            <label>Password</label>
                            <div className="auth-input-wrap">
                                <span className="auth-input-icon"><FiLock size={15} /></span>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder={path === 'login' ? 'Your password' : 'At least 8 characters'}
                                    value={path === 'login' ? loginForm.password : signupForm.password}
                                    onChange={handleChange(path === 'login' ? setLoginForm : setSignupForm)}
                                    required
                                />
                            </div>
                        </div>

                        {error && <p className="auth-error">{error}</p>}

                        <button type="submit" className="auth-btn" disabled={loading}>
                            {loading
                                ? 'Please wait…'
                                : path === 'login'
                                    ? 'Log in'
                                    : 'Create Account'}
                        </button>
                    </form>

                    <p className="auth-switch">
                        {path === 'login'
                            ? "Don't have an account? "
                            : 'Already have an account? '}
                        <button
                            type="button"
                            onClick={() => {
                                setPath(path === 'login' ? 'signup' : 'login');
                                setError('');
                            }}
                        >
                            {path === 'login' ? 'Sign up' : 'Log in'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}