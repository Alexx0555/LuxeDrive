import React,{ useEffect } from 'react';
import './carcard.css'; 

const CarCard = ({ car, addToCart }) => {
    useEffect(() => {
        const cards = document.querySelectorAll('.car-card-container');
        
    }, []);

    return (
        <div className="car-card-container">
            <div className="car-card-border"></div>
            <div className="car-card-content">
                <img src={car.image} alt={`${car.brand} ${car.model}`} className="car-card-image"
                     onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/600x400/111/fff?text=Error`; }}
                />
                <div className="car-card-body">
                    <h3 className="car-card-title">{car.brand} {car.model}</h3>
                    <p className="car-card-price">${car.price.toLocaleString()}</p>
                    <div style={{marginTop: 'auto'}}>
                        <button onClick={() => addToCart(car)} className="crazy-button full-width">
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;