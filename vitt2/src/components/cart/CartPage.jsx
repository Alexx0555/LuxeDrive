import React from 'react';

const CartPage = ({ cartItems, setCartItems }) => {
    const removeFromCart = (id) => setCartItems(cartItems.filter(item => item.id !== id));
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="content-page">
            <div className="container">
                <h2 className="page-title text-center">Your Hangar</h2>
                {cartItems.length === 0 ? (
                    <p className="text-center" style={{color: '#9ca3af', fontSize: '1.25rem'}}>Your hangar is empty. Choose a vessel.</p>
                ) : (
                    <div className="cart-wrapper">
                       {cartItems.map((item, index) => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item-details">
                                    <img src={item.image.replace('600x400', '150x100')} alt={item.model} className="cart-item-image" />
                                    <div>
                                        <h3 style={{fontSize: '1.125rem', fontWeight: 'bold'}}>{item.brand} {item.model}</h3>
                                        <p style={{color: '#c084fc'}}>${item.price.toLocaleString()}</p>
                                    </div>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="cart-remove-button">Remove</button>
                            </div>
                       ))}
                       <div className="cart-summary">
                           <div className="cart-total">
                               <span>Total:</span>
                               <span>${totalPrice.toLocaleString()}</span>
                           </div>
                           <button className="crazy-button full-width" style={{marginTop: '1.5rem'}}>
                             <span>Proceed to Acquisition</span>
                           </button>
                       </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;