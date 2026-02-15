import React from 'react';

function OrderModal({ cartItems, onReset }) {
  // Calculate total for the modal summary
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Success Icon */}
        <img src="/assets/images/icon-order-confirmed.svg" alt="Order Confirmed" className="confirmed-icon" />
        
        <h1 className="modal-title">Order Confirmed</h1>
        <p className="modal-subtitle">We hope you enjoy your food!</p>

        <div className="order-summary-container">
          <ul className="modal-item-list" style={{ listStyle: 'none' }}>
            {cartItems.map((item) => (
              <li key={item.id} className="modal-item">
                <div className="modal-item-left">
                  {/* Using the thumbnail image from your data.js */}
                  <img src={item.image.thumbnail} alt={item.name} className="modal-thumb" />
                  <div className="modal-item-info">
                    <p className="modal-item-name">{item.name}</p>
                    <div className="modal-item-meta">
                      <span className="modal-qty">{item.quantity}x</span>
                      <span className="modal-unit-price">@ ${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <p className="modal-subtotal">${(item.price * item.quantity).toFixed(2)}</p>
              </li>
            ))}
          </ul>
          
          <div className="modal-total-row">
            <span>Order Total</span>
            <span className="modal-grand-total">${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* This triggers the resetOrder function in App.jsx */}
        <button className="confirm-btn" onClick={onReset}>
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default OrderModal;