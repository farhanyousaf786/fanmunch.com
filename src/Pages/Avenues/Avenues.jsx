import React from 'react';
import './Avenues.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Avenues = () => {
  return (
    <div className="avenues-page">
      <Header />
      
      <section className="avenues-hero">
        <div className="hero-content">
          <h1>Our Avenues</h1>
          <p>Revolutionizing stadium dining experiences across major venues</p>
        </div>
      </section>

      <section className="venues-section">
        <div className="container">
          <h2>Stadium Partners</h2>
          <div className="venues-grid">
            <div className="venue-card">
              <div className="venue-image">
                <div className="placeholder-img">🏟️</div>
              </div>
              <h3>Madison Square Garden</h3>
              <p>Premium food delivery to every seat in the world's most famous arena</p>
            </div>
            
            <div className="venue-card">
              <div className="venue-image">
                <div className="placeholder-img">⚽</div>
              </div>
              <h3>MetLife Stadium</h3>
              <p>Game day dining reimagined for 82,500 football fans</p>
            </div>
            
            <div className="venue-card">
              <div className="venue-image">
                <div className="placeholder-img">🏈</div>
              </div>
              <h3>AT&T Stadium</h3>
              <p>Texas-sized dining experience for America's Team</p>
            </div>
            
            <div className="venue-card">
              <div className="venue-image">
                <div className="placeholder-img">⚾</div>
              </div>
              <h3>Yankee Stadium</h3>
              <p>Classic ballpark meets modern food delivery technology</p>
            </div>
            
            <div className="venue-card">
              <div className="venue-image">
                <div className="placeholder-img">🏀</div>
              </div>
              <h3>Staples Center</h3>
              <p>Lakers and Clippers fans never miss a moment</p>
            </div>
            
            <div className="venue-card">
              <div className="venue-image">
                <div className="placeholder-img">🎵</div>
              </div>
              <h3>Hollywood Bowl</h3>
              <p>Outdoor concert dining under the stars</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">🍕</div>
              <h3>Food Delivery</h3>
              <p>Hot meals delivered directly to your seat</p>
            </div>
            
            <div className="service-item">
              <div className="service-icon">🥤</div>
              <h3>Beverage Service</h3>
              <p>Cold drinks and refreshments on demand</p>
            </div>
            
            <div className="service-item">
              <div className="service-icon">🍿</div>
              <h3>Snack Delivery</h3>
              <p>Classic stadium snacks at your fingertips</p>
            </div>
            
            <div className="service-item">
              <div className="service-icon">📱</div>
              <h3>Mobile Ordering</h3>
              <p>Order from your phone, never miss the action</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Avenues;
