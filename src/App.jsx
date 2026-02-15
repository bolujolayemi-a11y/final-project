import { useState, useEffect } from 'react';
import { productsData } from './data';
import ProductCard from './ProductCard';
import Cart from './Cart'; 
import OrderModal from './OrderModal'; 
import './index.css';

function App() {
  // 1. State Management
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('dessertCart');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. LocalStorage Persistence
  useEffect(() => {
    localStorage.setItem('dessertCart', JSON.stringify(cart));
  }, [cart]);

  // 3. Helper Functions
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  };

  const updateQuantity = (productId, delta) => {
    setCart(prev => prev.map(item => 
      item.id === productId ? { ...item, quantity: item.quantity + delta } : item
    ).filter(item => item.quantity > 0));
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Logic to handle the Order Modal
  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  const resetOrder = () => {
    setCart([]);
    setIsModalOpen(false);
  };

  // 4. Component Rendering (Single Return)
  return (
    <main className="app-container">
      <section className="products-section">
        <h1>Desserts</h1>
        <div className="product-grid">
          {productsData.map((item) => (
            <ProductCard 
              key={item.id} 
              product={item} 
              cartItem={cart.find(c => c.id === item.id)}
              addToCart={addToCart} 
              updateQuantity={updateQuantity} 
            />
          ))}
        </div>
      </section>

      <aside className="cart-container">
        <Cart 
            cartItems={cart} 
            removeFromCart={removeFromCart} 
             onConfirm={() => setIsModalOpen(true)} 
        />
      </aside>

      {/* Conditional Rendering for Modal */}
      {isModalOpen && (
        <OrderModal 
          cartItems={cart} 
          onReset={resetOrder} 
        />
      )}

      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="#">Jolayemi Boluwatife</a>.
      </footer>
    </main>
  );
}

export default App;