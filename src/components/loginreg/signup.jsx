import React from 'react';

const SignUpPage = () => {
    return (
        <div className="content-page form-page-wrapper">
            <div className="form-container">
                <div className="form-glow-border"></div>
                <div className="form-content">
                    <h2 className="text-center" style={{fontSize: '1.875rem', fontWeight: 'bold', color: 'white', marginBottom: '2rem'}}>Become a Pilot</h2>
                    <form>
                        <div style={{marginBottom: '1rem'}}>
                            <label className="form-label" htmlFor="name">
                                Full Name
                            </label>
                            <input className="form-input" id="name" type="text" placeholder="Han Solo" />
                        </div>
                        <div style={{marginBottom: '1rem'}}>
                            <label className="form-label" htmlFor="email">
                                Email Address
                            </label>
                            <input className="form-input" id="email" type="email" placeholder="pilot@email.com" />
                        </div>
                        <div style={{marginBottom: '1rem'}}>
                            <label className="form-label" htmlFor="password">
                                Password
                            </label>
                            <input className="form-input" id="password" type="password" placeholder="******************" />
                        </div>
                        <div style={{marginBottom: '1.5rem'}}>
                            <label className="form-label" htmlFor="confirm-password">
                                Confirm Password
                            </label>
                            <input className="form-input" id="confirm-password" type="password" placeholder="******************" />
                        </div>
                        <div>
                            <button className="crazy-button full-width" type="button">
                                <span>Launch Registration</span>
                            </button>
                        </div>
                        <p className="form-footer-text">
                            Already have an account? <a className="form-link">Sign In</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;