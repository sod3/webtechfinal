// src/pages/ThankyouPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

function ThankyouPage() {
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPaymentComplete(true);
  };

  return (
    <div style={styles.pageContainer}>
      {!paymentComplete ? (
        <div style={styles.card}>
          <h2 style={styles.title}>Enter Payment Details</h2>
          <form style={styles.form} onSubmit={handleSubmit}>
            <label style={styles.label}>Card Number</label>
            <input
              type="text"
              style={styles.input}
              placeholder="XXXX XXXX XXXX XXXX"
              required
            />

            <label style={styles.label}>Expiry Date</label>
            <input
              type="text"
              style={styles.input}
              placeholder="MM/YY"
              required
            />

            <label style={styles.label}>CVV</label>
            <input
              type="text"
              style={styles.input}
              placeholder="123"
              required
            />

            <button type="submit" style={styles.payButton}>
              Pay Now
            </button>
          </form>
        </div>
      ) : (
        <div style={styles.card}>
          <FaCheckCircle style={styles.icon} />
          <h2 style={styles.title}>Thank You for Your Purchase!</h2>
          <p style={styles.message}>
            Your order has been confirmed and will be processed shortly.
          </p>
          <Link to="/" style={styles.continueButton}>
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    padding: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '30px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  },
  icon: {
    color: '#28a745', // Green check color
    fontSize: '3rem',
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.5rem',
    margin: '0 0 20px 0',
  },
  message: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  label: {
    fontSize: '0.9rem',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    width: '100%',
  },
  payButton: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  continueButton: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'inline-block',
  },
};

export default ThankyouPage;
