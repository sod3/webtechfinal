// src/pages/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/productData';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

function MainPage({ addToCart }) {
  return (
    <div style={styles.pageContainer}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.navbarLeft}>
          <h1 style={styles.logo}>GuTech Exam Store</h1>
        </div>
        <div style={styles.navbarRight}>
          <Link to="/" style={styles.cartLink}>
            <span style={{ marginRight: '8px' }}>Home</span>
          </Link>
          <Link to="/cart" style={styles.cartLink}>
            <span style={{ marginRight: '8px' }}>Cart</span>
          </Link>
        </div>
      </nav>

      {/* Product Cards */}
      <div style={styles.productsContainer}>
        {productsData.map((product) => (
          <div key={product.id} style={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.cardImage}
            />
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{product.name}</h3>
              <p style={styles.cardDescription}>{product.description}</p>
              <p style={styles.cardPrice}>${product.price}</p>
              <div style={styles.actionsContainer}>
                <button
                  style={styles.addToCartButton}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <FaHeart style={styles.heartIcon} size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Inline styles for demo; adjust as needed or move to a CSS file
const styles = {
  pageContainer: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '10px 20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
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
    alignItems: 'center',
    gap: '20px',
  },
  cartLink: {
    textDecoration: 'none',
    color: '#333',
  },
  productsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
  },
  cardImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '20px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardTitle: {
    margin: '0 0 10px 0',
    fontSize: '1.2rem',
    color: '#333',
  },
  cardDescription: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '10px',
  },
  cardPrice: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  actionsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addToCartButton: {
    backgroundColor: '#000000',
    color: '#fff',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '4px',
    width: '40%',
  },
  heartIcon: {
    color: 'gray',
    cursor: 'pointer',
  },
};

export default MainPage;
