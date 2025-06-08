import React, { useState } from 'react';
import BrandFilter from '../brandfil/BrandFilter';
import CarCard from '../card/CarCard';
import './homepage.css';

const carData = [
    { id: 1, brand: 'Mercedes', model: 'S-Class', price: 110000, image: './src/assets/s-class.webp' },
    { id: 2, brand: 'BMW', model: '7 Series', price: 105000, image: './src/assets/bmw-7.webp' },
    { id: 3, brand: 'Audi', model: 'A8', price: 100000, image: './src/assets/a8.webp'},
    { id: 4, brand: 'Porsche', model: '911 Carrera', price: 125000, image: './src/assets/911.webp' },
    { id: 5, brand: 'Mercedes', model: 'G-Wagon', price: 140000, image: './src/assets/wag.jpg' },
    { id: 6, brand: 'Rolls-Royce', model: 'Phantom', price: 450000, image: './src/assets/rrp.jpg' },
    { id: 7, brand: 'BMW', model: 'X7', price: 85000, image: './src/assets/x7.jpg' },
    { id: 8, brand: 'Audi', model: 'Q8', price: 80000, image: './src/assets/q8.jpg' },
    { id: 9, brand: 'Porsche', model: 'Taycan', price: 150000, image: './src/assets/taycan.jpeg' },
    { id: 10, brand: 'Rolls-Royce', model: 'Cullinan', price: 350000, image: './src/assets/cull.jpg' },
];

const HomePage = ({ addToCart }) => {
    const [selectedBrand, setSelectedBrand] = useState(null);
    const filteredCars = selectedBrand ? carData.filter(car => car.brand === selectedBrand) : carData;

    return (
        <main>
            <div>
                <h1 className="hero-title">
                    Find Your Future Ride
                </h1>
            </div>
            <BrandFilter setSelectedBrand={setSelectedBrand} selectedBrand={selectedBrand} />
            <div className="main-content-area">
                <div className="container">
                    <div className="cars-grid">
                        {filteredCars.map(car => (
                            <CarCard key={car.id} car={car} addToCart={addToCart} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;