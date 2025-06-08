import React from 'react';
import signup from './signup';
import './sign.css';

const SignInPage = () => {
    return (
        <div className="content-page form-page-wrapper">
            <div className="form-container">
                <div className="form-glow-border"></div>
                <div className="form-content">
                    <h2 className="text-center" style={{fontSize: '1.875rem', fontWeight: 'bold', color: 'white', marginBottom: '2rem'}}>Access Your Garage</h2>
                    <form>
                        <div style={{marginBottom: '1rem'}}>
                            <label className="form-label" htmlFor="email">
                                Email Address
                            </label>
                            <input className="form-input" id="email" type="email" placeholder="pilot@email.com" />
                        </div>
                        <div style={{marginBottom: '1.5rem'}}>
                            <label className="form-label" htmlFor="password">
                                Password
                            </label>
                            <input className="form-input" id="password" type="password" placeholder="******************" />
                        </div>
                        <div>
                            <button className="crazy-button full-width" type="button">
                                <span>Engage Hyperdrive</span>
                            </button>
                        </div>
                         <p className="form-footer-text">
                            New pilot? <a href="#" className="form-link">Register Here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;