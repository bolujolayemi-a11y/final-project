import React from 'react';

// 1. Added onConfirm to the props destructuring
function Cart({ cartItems, removeFromCart, onConfirm }) {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-card">
      <h3>Your Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</h3>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <img src="./assets/images/illustration-empty-cart.svg" alt="Empty" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <div className="cart-filled">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <p className="item-name">{item.name}</p>
                <span className="qty">{item.quantity}x</span>
                <span className="price">@ ${item.price.toFixed(2)}</span>
                <span className="subtotal">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                <img src="./assets/images/icon-remove-item.svg" alt="Remove" />
              </button>
            </div>
          ))}
          <div className="total-row">
            <span>Order Total</span>
            <span className="grand-total">${totalPrice.toFixed(2)}</span>
          </div>

          {/* 2. Added the Carbon Neutral section from the design */}
          <div className="carbon-neutral" style={{ display: 'flex', gap: '8px', justifyContent: 'center', padding: '16px', backgroundColor: 'var(--rose-50)', borderRadius: '8px', margin: '16px 0' }}>
            <img src="./assets/images/icon-carbon-neutral.svg" alt="" />
            <p>This is a <strong>carbon-neutral</strong> delivery</p>
          </div>

          {/* 3. Added the onClick event to trigger the modal */}
          <button className="confirm-btn" onClick={onConfirm}>
            Confirm Order
            </button>
        </div>
      )}
    </div>
  );
}

export default Cart;