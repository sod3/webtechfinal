// src/pages/CartPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';

function CartPage({ cart, removeFromCart, clearCart }) {
  // Calculate the total of all items in the cart
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={styles.pageContainer}>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.navbarLeft}>
          <h1 style={styles.logo}>GuTech Exam Store</h1>
        </div>
        <div style={styles.navbarRight}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
          <Link to="/cart" style={styles.navLink}>
            Cart
          </Link>
        </div>
      </nav>

      {/* CART HEADER */}
      <div style={styles.cartHeader}>
        <h2 style={styles.cartTitle}>Your Cart</h2>
        <button style={styles.clearCartButton} onClick={clearCart}>
          Clear Cart
        </button>
      </div>

      {/* CART CONTAINER */}
      <div style={styles.cartContainer}>
        {cart.length === 0 ? (
          <div style={styles.emptyCartContainer}>
            <FaShoppingCart style={styles.emptyCartIcon} />
            <p style={styles.emptyCartText}>Your cart is empty</p>
          </div>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} style={styles.cartItem}>
                {/* Image (remove if your item doesn't have an image) */}
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    style={styles.itemImage}
                  />
                )}

                {/* Item Info */}
                <div style={styles.itemDetails}>
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <p style={styles.itemPrice}>${item.price.toFixed(2)}</p>
                </div>

                {/* Remove Button */}
                <button
                  style={styles.removeButton}
                  onClick={() => removeFromCart(index)}
                >
                  <p style={styles.removeItemText}>Remove</p>
                </button>
              </div>
            ))}

            {/* TOTAL & CHECKOUT */}
            <div style={styles.checkoutSection}>
              <div style={styles.totalRow}>
                <span style={styles.totalLabel}>Total</span>
                <span style={styles.totalValue}>${total.toFixed(2)}</span>
              </div>
              <Link to="/thankyou" style={styles.checkoutButton}>
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Inline Styles (feel free to move to a CSS file or use a styling library)
const styles = {
  pageContainer: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  /* NAVBAR */
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '10px 20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  navbarLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
    color: '#333',
  },
  navbarRight: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    marginLeft: '15px',
    fontSize: '1rem',
  },

  /* CART HEADER */
  cartHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px auto',
    maxWidth: '1200px',
    padding: '0 20px',
  },
  cartTitle: {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  clearCartButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '4px',
  },

  /* CART CONTAINER */
  cartContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  emptyCartContainer: {
    textAlign: 'center',
    padding: '40px 0',
  },
  emptyCartIcon: {
    fontSize: '3rem',
    color: '#999',
    marginBottom: '10px',
  },
  emptyCartText: {
    fontSize: '1.2rem',
    color: '#555',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #eee',
    padding: '15px 0',
  },
  itemImage: {
    width: '60px',
    height: '60px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginRight: '15px',
  },
  itemDetails: {
    flex: 1,
    marginLeft: '15px',
  },
  itemName: {
    margin: '0 0 5px 0',
    fontSize: '1.1rem',
  },
  itemPrice: {
    margin: 0,
    fontSize: '1rem',
    color: '#666',
  },
  removeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#999',
    fontSize: '1rem',
  },
  removeItemText: {
    color: "#ff6666",
  },

  /* CHECKOUT SECTION */
  checkoutSection: {
    marginTop: '20px',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 0',
    borderTop: '1px solid #eee',
  },
  totalLabel: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  checkoutButton: {
    display: 'inline-block',
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff',
    padding: '12px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '10px',
  },
};

export default CartPage;
