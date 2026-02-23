import React from 'react'
import "./Footer.css"

export default function Footer (){
  return (
    <>
            <footer className="footer">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <span className="footer-logo">ThriftVault</span>
                        <p className="footer-tagline">
                            Pre-loved fashion, rediscovered.
                        </p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-col">
                            <h4>Shop</h4>
                            <a href="#">New Arrivals</a>
                            <a href="#">Best Sellers</a>
                            <a href="#">Sale</a>
                        </div>
                        <div className="footer-col">
                            <h4>Help</h4>
                            <a href="#">Shipping</a>
                            <a href="#">Returns</a>
                            <a href="#">FAQ</a>
                        </div>
                        <div className="footer-col">
                            <h4>Company</h4>
                            <a href="#">About</a>
                            <a href="#">Blog</a>
                            <a href="#">Careers</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 ThriftVault. All rights reserved.</p>
                </div>
            </footer>
    </>
  )
}
