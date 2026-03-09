import React, { useState, useEffect } from 'react';
import './Banner.css';
import Header from '../../../Components/Header/Header';
import bgImage from '../../../assets/images/bg-images/bg1.avif';
import FanMunchExperience from '../FanMunchExperience/FanMunchExperience';
import PressQuote from '../PressQuote/PressQuote';
import Footer from '../Footer/Footer';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Stadium:",
      subtitle: "Reimagined",
      image: bgImage
    },
    {
      id: 2,
      title: "Food Delivery:",
      subtitle: "To Your Seat",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%232c3e50;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23344a5e;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23grad2)'/%3E%3C!-- Delivery person with food --%3E%3Crect x='200' y='400' width='150' height='200' fill='%234A90E2' opacity='0.2' rx='10'/%3E%3Crect x='250' y='350' width='50' height='50' fill='%23e74c3c' opacity='0.3' rx='5'/%3E%3C!-- Stadium seating --%3E%3Crect x='1200' y='500' width='400' height='300' fill='%23163454' opacity='0.3' rx='15'/%3E%3Crect x='1250' y='550' width='80' height='80' fill='%234A90E2' opacity='0.2' rx='8'/%3E%3Crect x='1400' y='550' width='80' height='80' fill='%234A90E2' opacity='0.2' rx='8'/%3E%3C/svg%3E"
    },
    {
      id: 3,
      title: "Game Day:",
      subtitle: "Elevated",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2327ae60;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231e8449;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23grad3)'/%3E%3C!-- Field view --%3E%3Cellipse cx='960' cy='800' rx='600' ry='200' fill='%2327ae60' opacity='0.3'/%3E%3C!-- Concession stands --%3E%3Crect x='100' y='200' width='200' height='150' fill='%234A90E2' opacity='0.3' rx='10'/%3E%3Crect x='1600' y='250' width='180' height='120' fill='%234A90E2' opacity='0.3' rx='10'/%3E%3C/svg%3E"
    },
    {
      id: 4,
      title: "Convenience:",
      subtitle: "At Your Fingertips",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%238e44ad;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%239b59b6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23grad4)'/%3E%3C!-- Mobile app interface --%3E%3Crect x='860' y='300' width='200' height='400' fill='%234A90E2' opacity='0.2' rx='20'/%3E%3Crect x='880' y='320' width='160' height='60' fill='%23ffffff' opacity='0.1' rx='10'/%3E%3Crect x='880' y='400' width='160' height='40' fill='%23ffffff' opacity='0.1' rx='5'/%3E%3Crect x='880' y='460' width='160' height='40' fill='%23ffffff' opacity='0.1' rx='5'/%3E%3C!-- Food items --%3E%3Ccircle cx='300' cy='400' r='60' fill='%23e74c3c' opacity='0.2'/%3E%3Ccircle cx='1600' cy='500' r='80' fill='%23f39c12' opacity='0.2'/%3E%3C/svg%3E"
    },
    {
      id: 5,
      title: "Fresh Food:",
      subtitle: "Fast Delivery",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23e67e22;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23d35400;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23grad5)'/%3E%3C!-- Food trays --%3E%3Crect x='200' y='350' width='180' height='120' fill='%234A90E2' opacity='0.3' rx='10'/%3E%3Crect x='450' y='380' width='150' height='100' fill='%234A90E2' opacity='0.3' rx='8'/%3E%3Crect x='1300' y='400' width='200' height='130' fill='%234A90E2' opacity='0.3' rx='12'/%3E%3C!-- Delivery bags --%3E%3Crect x='800' y='500' width='120' height='150' fill='%23e74c3c' opacity='0.2' rx='8'/%3E%3Crect x='1000' y='480' width='100' height='130' fill='%23e74c3c' opacity='0.2' rx='8'/%3E%3C/svg%3E"
    },
    {
      id: 6,
      title: "VIP Service:",
      subtitle: "Premium Experience",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23c0392b;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23e74c3c;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23grad6)'/%3E%3C!-- VIP seating --%3E%3Crect x='300' y='400' width='250' height='200' fill='%234A90E2' opacity='0.3' rx='15'/%3E%3Crect x='1400' y='450' width='280' height='180' fill='%234A90E2' opacity='0.3' rx='15'/%3E%3C!-- Premium food --%3E%3Ccircle cx='500' cy='300' r='70' fill='%23f39c12' opacity='0.2'/%3E%3Ccircle cx='1400' cy='350' r='90' fill='%23f39c12' opacity='0.2'/%3E%3C/svg%3E"
    },
    {
      id: 7,
      title: "Team Spirit:",
      subtitle: "Great Food",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad7' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23163454;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%232c3e50;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23grad7)'/%3E%3C!-- Crowd --%3E%3Ccircle cx='200' cy='500' r='40' fill='%234A90E2' opacity='0.2'/%3E%3Ccircle cx='300' cy='480' r='35' fill='%234A90E2' opacity='0.2'/%3E%3Ccircle cx='400' cy='520' r='45' fill='%234A90E2' opacity='0.2'/%3E%3Ccircle cx='1500' cy='500' r='40' fill='%234A90E2' opacity='0.2'/%3E%3Ccircle cx='1600' cy='480' r='35' fill='%234A90E2' opacity='0.2'/%3E%3Ccircle cx='1700' cy='520' r='45' fill='%234A90E2' opacity='0.2'/%3E%3C!-- Food vendors --%3E%3Crect x='800' y='600' width='300' height='200' fill='%234A90E2' opacity='0.3' rx='20'/%3E%3C/svg%3E"
    },
    {
      id: 8,
      title: "Smart Ordering:",
      subtitle: "Zero Wait Time",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad8' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2334495e;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%232c3e50;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23grad8)'/%3E%3C!-- QR codes and digital elements --%3E%3Crect x='400' y='300' width='100' height='100' fill='%234A90E2' opacity='0.3'/%3E%3Crect x='1400' y='350' width='120' height='120' fill='%234A90E2' opacity='0.3'/%3E%3C!-- Delivery drones --%3E%3Ccircle cx='600' cy='200' r='50' fill='%234A90E2' opacity='0.2'/%3E%3Ccircle cx='1200' cy='250' r='60' fill='%234A90E2' opacity='0.2'/%3E%3C/svg%3E"
    },
    {
      id: 9,
      title: "Live Sports:",
      subtitle: "Great Dining",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad9' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23e74c3c;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23c0392b;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23grad9)'/%3E%3C!-- Sports field --%3E%3Cellipse cx='960' cy='700' rx='500' ry='150' fill='%2327ae60' opacity='0.3'/%3E%3C!-- Spectators with food --%3E%3Crect x='200' y='400' width='180' height='120' fill='%234A90E2' opacity='0.3' rx='10'/%3E%3Crect x='1500' y='450' width='200' height='130' fill='%234A90E2' opacity='0.3' rx='12'/%3E%3C/svg%3E"
    },
    {
      id: 10,
      title: "Fan Experience:",
      subtitle: "Redefined",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad10' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234A90E2;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%233498db;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23grad10)'/%3E%3C!-- Happy fans --%3E%3Ccircle cx='300' cy='400' r='60' fill='%23ffffff' opacity='0.1'/%3E%3Ccircle cx='500' cy='450' r='50' fill='%23ffffff' opacity='0.1'/%3E%3Ccircle cx='1400' cy='400' r='60' fill='%23ffffff' opacity='0.1'/%3E%3Ccircle cx='1600' cy='450' r='50' fill='%23ffffff' opacity='0.1'/%3E%3C!-- Food celebration --%3E%3Crect x='800' y='500' width='320' height='200' fill='%234A90E2' opacity='0.3' rx='20'/%3E%3C/svg%3E"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const navigateFlow = (direction) => {
    // This function can be used to navigate through different app flows
    console.log(`Navigating ${direction}`);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="home-page">
      <div 
        className="banner" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${currentSlideData.image})` 
        }}
      >
        <Header />
        <button
          className="slide-arrow left-arrow"
          onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
          type="button"
        >
          &lt;
        </button>
        <button
          className="slide-arrow right-arrow"
          onClick={() => goToSlide((currentSlide + 1) % slides.length)}
          type="button"
        >
          &gt;
        </button>
        
        <div className="banner-content">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="hero-title-white">{currentSlideData.title}</span>
                <span className="hero-title-orange">{currentSlideData.subtitle}</span>
              </h1>
            </div>
            
            <div className="carousel-indicators">
              {slides.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="white-section">
        <div className="app-flow">
          <div className="flow-step">
            <div className="step-icon">📱</div>
            <div className="step-text">Open App</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <div className="step-icon">🍔</div>
            <div className="step-text">Order From Seats</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <div className="step-icon">✅</div>
            <div className="step-text">Get Order</div>
          </div>
        </div>
      </div>

      <FanMunchExperience />

      <PressQuote />

      <Footer />
    </div>
  );
};

export default Banner;
