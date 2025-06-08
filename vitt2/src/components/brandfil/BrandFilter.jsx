import React from 'react';
import './brandfilter.css'; 

const brandLogos = {
    'Mercedes': 'https://placehold.co/100x50/111111/ffffff?text=Mercedes',
    'BMW': 'https://placehold.co/100x50/111111/ffffff?text=BMW',
    'Audi': 'https://placehold.co/100x50/111111/ffffff?text=Audi',
    'Porsche': 'https://placehold.co/100x50/111111/ffffff?text=Porsche',
    'Rolls-Royce': 'https://placehold.co/100x50/111111/ffffff?text=Rolls-Royce',
};

const BrandFilter = ({ setSelectedBrand, selectedBrand }) => {
    return (
        <div className="brand-filter-section">
            <div className="container brand-filter-container">
                <h2 className="section-title">Choose Your Legend</h2>
                <div className="brand-logos-wrapper">
                    <div onClick={() => setSelectedBrand(null)} className={`brand-logo-container ${selectedBrand === null ? 'active' : ''}`}>
                        <div className="brand-logo-inner">
                           <span style={{color: 'white', fontWeight: '600'}}>All Brands</span>
                        </div>
                    </div>
                    {Object.entries(brandLogos).map(([brand, logo]) => (
                        <div key={brand} onClick={() => setSelectedBrand(brand)} className={`brand-logo-container ${selectedBrand === brand ? 'active' : ''}`}>
                            <img src={logo} alt={`${brand} logo`} className="brand-logo-inner brand-logo-image" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandFilter;