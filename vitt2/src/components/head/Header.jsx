import React from 'react';
import CartIcon from '../cart/CartIcon';
import './header.css'; 

const Header = ({ setPage, cartItems }) => {
    return (
        <header className="site-header">
            <div className="container header-container">
                <div className="logo-container" onClick={() => setPage('home')}>
                    <h1 className="logo-text">LuxeDrive</h1>
                </div>
                <nav className="main-nav">
                    <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }} className="nav-link">Home</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setPage('about'); }} className="nav-link">About Us</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setPage('cart'); }} className="nav-link">
                        <CartIcon itemCount={cartItems.length} />
                    </a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setPage('signin'); }} className="crazy-button">
                        <span>Sign In</span>
                    </a>
                </nav>
                 <div className="mobile-nav">
                    <button onClick={() => setPage('cart')} style={{color: 'white', background: 'none', border: 'none'}}>
                        <CartIcon itemCount={cartItems.length} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;