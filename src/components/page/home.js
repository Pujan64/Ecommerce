// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About Us</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          <li><input type="text" placeholder="Search..." className="search-input" /></li>
        </ul>
      </nav>
      <h1 className="main-heading">Welcome to our Ecommerce Store</h1>
      <section className="product-section">
        {[...Array(15)].map((_, index) => (
          <div key={index} className="product-item">
            <img src={`image${index % 3 + 1}.jpg`} alt={`Image ${index % 3 + 1}`} className="product-image" />
            <p><a href="#" className="btn btn-buy">Buy</a></p>
            <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
        ))}
      </section>
      <section className="about-section">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
      </section>
      <section className="contact-section">
        <h2>Contact</h2>
        <p>Email: contact@example.com</p>
        <p>Phone: +1234567890</p>
      </section>
      <footer className="footer">
        <p>&copy; 2023 Ecommerce Website</p>
      </footer>
    </div>
  );
}

export default Home;
