import React from 'react';

function ProductCard({ product, cartItem, addToCart, updateQuantity }) {
  return (
    <article className={`product-card ${cartItem ? 'active' : ''}`}>
      <div className="image-wrapper">
        {/* Requirement: Dynamic image rendering */}
        <img 
          src={product.image.desktop} 
          alt={product.name} 
          className={cartItem ? 'selected-border' : ''} 
        />
        
        {!cartItem ? (
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            <img src="./assets/images/icon-add-to-cart.svg" alt="" /> 
            Add to Cart
          </button>
        ) : (
          <div className="quantity-selector">
            <button className="qty-btn" onClick={() => updateQuantity(product.id, -1)}>
              <img src="./assets/images/icon-decrement-quantity.svg" alt="minus" />
            </button>
            <span>{cartItem.quantity}</span>
            <button className="qty-btn" onClick={() => updateQuantity(product.id, 1)}>
              <img src="./assets/images/icon-increment-quantity.svg" alt="plus" />
            </button>
          </div>
        )}
      </div>

      <div className="product-info">
        <span className="category">{product.category}</span>
        <h2 className="name">{product.name}</h2>
        <p className="price">${product.price.toFixed(2)}</p>
      </div>
    </article>
  );
}

export default ProductCard;