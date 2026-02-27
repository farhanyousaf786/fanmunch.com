import React from 'react';
import './Alliance.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Alliance = () => {
  return (
    <div className="alliance-page">
      <Header />
      
      <section className="alliance-hero">
        <div className="hero-content">
          <h1>Strategic Alliance</h1>
          <p>Partnering with industry leaders to deliver exceptional stadium experiences</p>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <h2>Our Partners</h2>
          <div className="partners-grid">
            <div className="partner-card">
              <div className="partner-logo">🏟️</div>
              <h3>Major League Sports</h3>
              <p>Official food delivery partner for NFL, NBA, MLB, and NHL venues</p>
            </div>
            
            <div className="partner-card">
              <div className="partner-logo">🍕</div>
              <h3>Premium Restaurants</h3>
              <p>Partnering with top restaurant chains for exclusive stadium menus</p>
            </div>
            
            <div className="partner-card">
              <div className="partner-logo">📱</div>
              <h3>Tech Leaders</h3>
              <p>Integrating with leading payment and ordering platforms</p>
            </div>
            
            <div className="partner-card">
              <div className="partner-logo">🚚</div>
              <h3>Delivery Networks</h3>
              <p>Strategic partnerships with efficient delivery service providers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Partnership Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Increased Revenue</h3>
              <p>Boost food sales by 40% with streamlined ordering and delivery</p>
            </div>
            
            <div className="benefit-item">
              <h3>Enhanced Fan Experience</h3>
              <p>Improve customer satisfaction with convenient in-seat dining</p>
            </div>
            
            <div className="benefit-item">
              <h3>Operational Efficiency</h3>
              <p>Reduce congestion and streamline food service operations</p>
            </div>
            
            <div className="benefit-item">
              <h3>Data Insights</h3>
              <p>Gain valuable analytics on fan preferences and behavior</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Alliance;
