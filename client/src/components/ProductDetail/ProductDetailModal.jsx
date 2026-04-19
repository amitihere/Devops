import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiX, FiShoppingCart, FiCreditCard, FiHeart, FiShare2, FiTruck, FiRotateCcw, FiStar, FiCheck } from 'react-icons/fi';
import { addToCart } from '../Shoppingcart/cartUtils';
import './ProductDetailModal.css';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&q=80';

export default function ProductDetailModal({ product, onClose }) {
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState(null);
    const [toastMsg, setToastMsg] = useState('');
    const [toastType, setToastType] = useState('success');
    const [imgSrc, setImgSrc] = useState(product?.image || FALLBACK_IMAGE);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [addingToCart, setAddingToCart] = useState(false);
    const [paying, setPaying] = useState(false);
    const [cartDone, setCartDone] = useState(false);

    // Reset state when product changes
    useEffect(() => {
        if (product) {
            setSelectedSize(null);
            setImgSrc(product.image || FALLBACK_IMAGE);
            setCartDone(false);
            setAddingToCart(false);
            setPaying(false);
        }
    }, [product]);

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    if (!product) return null;

    const showToast = (msg, type = 'success') => {
        setToastMsg(msg);
        setToastType(type);
        setTimeout(() => setToastMsg(''), 2800);
    };

    const displaySizes = Array.isArray(product.sizes)
        ? product.sizes
        : product.size
        ? [product.size]
        : [];
    const hasSizes = displaySizes.length > 0;

    const handleAddToCart = async () => {
        if (hasSizes && !selectedSize) {
            showToast('Please select a size first', 'warn');
            return;
        }
        const user = localStorage.getItem('thriftvault_user');
        if (!user) {
            showToast('Please log in to add items to cart', 'warn');
            setTimeout(() => { onClose(); navigate('/login'); }, 1400);
            return;
        }
        setAddingToCart(true);
        try {
            // Always coerce id to string so the backend middleware passes
            await addToCart({
                _id: String(product.id ?? product._id ?? ''),
                name: product.name || product.title,
                price: product.price,
                image: imgSrc,
            });
            setCartDone(true);
            showToast(`"${product.name || product.title}" added to cart! 🛒`);
        } catch (err) {
            const msg = err?.response?.data?.message || 'Failed to add to cart';
            showToast(msg, 'error');
        } finally {
            setAddingToCart(false);
        }
    };

    const handlePayment = async () => {
        if (hasSizes && !selectedSize) {
            showToast('Please select a size first', 'warn');
            return;
        }
        const user = localStorage.getItem('thriftvault_user');
        if (!user) {
            showToast('Please log in to make a payment', 'warn');
            setTimeout(() => { onClose(); navigate('/login'); }, 1400);
            return;
        }
        setPaying(true);
        try {
            // Always coerce id to string so the backend middleware passes
            await addToCart({
                _id: String(product.id ?? product._id ?? ''),
                name: product.name || product.title,
                price: product.price,
                image: imgSrc,
            });
            onClose();
            navigate('/cart');
        } catch (err) {
            const msg = err?.response?.data?.message || 'Failed to proceed to payment';
            showToast(msg, 'error');
            setPaying(false);
        }
    };

    const displayName = product.name || product.title || 'Product';
    const displayPrice = product.price;
    // displaySizes already computed above
    const displayTag = product.tag || product.tags?.[0] || product.label || null;
    const displayCategory = product.category || product.vibe || null;

    // Rating mock — safe for string or numeric ids
    const idSeed = typeof product.id === 'string'
        ? (product.id.charCodeAt(0) || 50)
        : (typeof product.id === 'number' ? product.id : 50);
    const rating = (idSeed % 10) / 10 + 4.2;
    const ratingDisplay = Math.min(5, rating).toFixed(1);
    const reviewCount = (idSeed % 300) + 50;

    return (
        <div className="pdm-backdrop" onClick={onClose}>
            {/* Toast */}
            {toastMsg && (
                <div className={`pdm-toast pdm-toast--${toastType}`}>{toastMsg}</div>
            )}

            <div className="pdm-panel" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className="pdm-close" onClick={onClose} aria-label="Close">
                    <FiX size={20} />
                </button>

                <div className="pdm-body">
                    {/* Image Column */}
                    <div className="pdm-image-col">
                        <div className="pdm-image-wrap">
                            <img
                                src={imgSrc}
                                alt={displayName}
                                className="pdm-image"
                                onError={() => setImgSrc(FALLBACK_IMAGE)}
                            />
                            {displayTag && (
                                <span className="pdm-badge">{displayTag}</span>
                            )}
                            <button
                                className={`pdm-wishlist ${isWishlisted ? 'active' : ''}`}
                                onClick={() => setIsWishlisted(v => !v)}
                                aria-label="Wishlist"
                            >
                                <FiHeart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
                            </button>
                        </div>

                        {/* Perks */}
                        <div className="pdm-perks">
                            <div className="pdm-perk">
                                <FiTruck size={14} />
                                <span>Free shipping over ₹2,999</span>
                            </div>
                            <div className="pdm-perk">
                                <FiRotateCcw size={14} />
                                <span>30-day easy returns</span>
                            </div>
                        </div>
                    </div>

                    {/* Info Column */}
                    <div className="pdm-info-col">
                        {displayCategory && (
                            <p className="pdm-category">{displayCategory}</p>
                        )}

                        <h1 className="pdm-name">{displayName}</h1>

                        {/* Rating */}
                        <div className="pdm-rating-row">
                            <div className="pdm-stars">
                                {[1,2,3,4,5].map(i => (
                                    <FiStar
                                        key={i}
                                        size={14}
                                        fill={i <= Math.round(Number(ratingDisplay)) ? '#f59e0b' : 'none'}
                                        stroke={i <= Math.round(Number(ratingDisplay)) ? '#f59e0b' : '#ccc'}
                                    />
                                ))}
                            </div>
                            <span className="pdm-rating-num">{ratingDisplay}</span>
                            <span className="pdm-review-count">({reviewCount} reviews)</span>
                        </div>

                        {/* Price */}
                        <div className="pdm-price-block">
                            <span className="pdm-price">₹{displayPrice.toLocaleString('en-IN')}</span>
                            <span className="pdm-mrp">₹{Math.round(displayPrice * 1.3).toLocaleString('en-IN')}</span>
                            <span className="pdm-discount">23% off</span>
                        </div>

                        <p className="pdm-tax-note">Inclusive of all taxes</p>

                        {/* Sizes */}
                        {displaySizes.length > 0 && (
                            <div className="pdm-sizes-block">
                                <div className="pdm-sizes-label">
                                    <span>Select Size</span>
                                    {selectedSize && <span className="pdm-selected-size">{selectedSize}</span>}
                                </div>
                                <div className="pdm-sizes">
                                    {displaySizes.map(s => (
                                        <button
                                            key={s}
                                            className={`pdm-size-btn ${selectedSize === s ? 'selected' : ''}`}
                                            onClick={() => setSelectedSize(s)}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Description */}
                        <div className="pdm-description">
                            <h3 className="pdm-desc-title">Product Details</h3>
                            <ul className="pdm-desc-list">
                                <li>Pre-loved, quality checked item</li>
                                <li>Sustainably sourced from responsible sellers</li>
                                <li>Authentic piece — what you see is what you get</li>
                                {displaySizes.length > 0 && <li>Available in {displaySizes.join(', ')}</li>}
                                <li>100% satisfaction guaranteed or easy returns</li>
                            </ul>
                        </div>

                        {/* CTA Buttons */}
                        <div className="pdm-actions">
                            <button
                                className={`pdm-btn pdm-btn--cart ${cartDone ? 'done' : ''}`}
                                onClick={handleAddToCart}
                                disabled={addingToCart || paying}
                            >
                                {addingToCart ? (
                                    <span className="pdm-btn-spinner" />
                                ) : cartDone ? (
                                    <><FiCheck size={16} /> Added to Cart</>
                                ) : (
                                    <><FiShoppingCart size={16} /> Add to Cart</>
                                )}
                            </button>

                            <button
                                className="pdm-btn pdm-btn--pay"
                                onClick={handlePayment}
                                disabled={addingToCart || paying}
                            >
                                {paying ? (
                                    <span className="pdm-btn-spinner" />
                                ) : (
                                    <><FiCreditCard size={16} /> Buy Now</>
                                )}
                            </button>
                        </div>

                        <button className="pdm-share" onClick={() => showToast('Link copied!')}>
                            <FiShare2 size={14} /> Share this item
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
