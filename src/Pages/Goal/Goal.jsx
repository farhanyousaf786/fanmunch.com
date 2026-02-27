import React from 'react';
import './Goal.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Goal = () => {
  return (
    <div className="goal-page">
      <Header />
      
      <section className="goal-hero">
        <div className="hero-content">
          <h1>Our Goal</h1>
          <p>Transforming the stadium experience through innovative food delivery</p>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>To revolutionize stadium dining by bringing restaurant-quality food directly to fans' seats, ensuring they never miss a moment of the action while enjoying premium meals.</p>
          </div>
        </div>
      </section>

      <section className="vision-section">
        <div className="container">
          <h2>Our Vision</h2>
          <div className="vision-grid">
            <div className="vision-item">
              <div className="vision-icon">🎯</div>
              <h3>Zero Wait Time</h3>
              <p>Eliminate long concession lines with instant mobile ordering</p>
            </div>
            
            <div className="vision-item">
              <div className="vision-icon">🍽️</div>
              <h3>Premium Quality</h3>
              <p>Restaurant-grade meals delivered hot and fresh to your seat</p>
            </div>
            
            <div className="vision-item">
              <div className="vision-icon">📱</div>
              <h3>Seamless Technology</h3>
              <p>Intuitive app experience integrated with stadium systems</p>
            </div>
            
            <div className="vision-item">
              <div className="vision-icon">🌟</div>
              <h3>Fan Satisfaction</h3>
              <p>Elevate the overall stadium experience for every visitor</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Stadium Partners</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Happy Fans</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">5min</div>
              <div className="stat-label">Average Delivery Time</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Goal;
