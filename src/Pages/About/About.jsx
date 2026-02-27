import React from 'react';
import './About.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Pioneering the future of stadium dining experiences</p>
        </div>
      </section>

      <section className="story-section">
        <div className="container">
          <h2>Our Story</h2>
          <div className="story-content">
            <p>Fanmunch was born from a simple observation: fans shouldn't have to choose between watching the game and getting great food. Founded in 2020, we've revolutionized how people experience live events by bringing restaurant-quality meals directly to their seats.</p>
            <p>Today, we partner with over 50 major stadiums and venues across the country, serving millions of fans who refuse to miss a single play.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h3>John Smith</h3>
              <p>CEO & Founder</p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>Sarah Johnson</h3>
              <p>Chief Operating Officer</p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h3>Mike Chen</h3>
              <p>Chief Technology Officer</p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">👩‍🍳</div>
              <h3>Lisa Rodriguez</h3>
              <p>Head of Culinary Partnerships</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
