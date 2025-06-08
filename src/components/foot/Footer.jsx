import React from 'react';
import './footer.css'; 

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container text-center">
                <p>&copy; {new Date().getFullYear()} LuxeDrive. All Systems Nominal.</p>
                <div className="footer-links">
                    <a href="#" className="footer-link">Facebook</a>
                    <a href="#" className="footer-link">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;