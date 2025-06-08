import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/head/Header.jsx';
import HomePage from './components/homepage/HomePage.jsx';
import AboutPage from './components/about/AboutPage.jsx';
import SignInPage from './components/loginreg/signin.jsx';
import Footer from './components/foot/Footer.jsx';
import CartPage from './components/cart/CartPage.jsx';


function App() {
    const [page, setPage] = useState('home');
    const [cartItems, setCartItems] = useState([]);
    const [modal, setModal] = useState({ show: false, message: '' });

    const addToCart = (car) => {
        if (cartItems.find(item => item.id === car.id)) {
            setModal({ show: true, message: `${car.brand} ${car.model} is already in your hangar.` });
            return;
        }
        setCartItems([...cartItems, car]);
        setModal({ show: true, message: `Acquired: ${car.brand} ${car.model}!` });
    };

    const renderPage = () => {
        switch (page) {
            case 'home': return <HomePage addToCart={addToCart} />;
            case 'about': return <AboutPage />;
            case 'signin': return <SignInPage />;
            case 'cart': return <CartPage cartItems={cartItems} setCartItems={setCartItems} />;
            default: return <HomePage addToCart={addToCart} />;
        }
    };

    return (
        <>
            <div className="app-container">
                <Header setPage={setPage} cartItems={cartItems} />
                {renderPage()}
                <Footer />
                
                {modal.show && (
                     <div className="modal-overlay">
                        <div className="modal-content">
                            <p className="modal-message">{modal.message}</p>
                            <button 
                                onClick={() => setModal({ show: false, message: '' })}
                                className="crazy-button"
                            >
                                <span>OK</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
