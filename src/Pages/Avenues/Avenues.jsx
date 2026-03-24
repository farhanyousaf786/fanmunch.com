import React from 'react';
import './Avenues.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Avenues = () => {
  const venues = [
    {
      id: 'kalahari-poconos',
      name: 'Kalahari Resorts & Convention Center',
      subtitle: 'Poconos, Pennsylvania',
      image:
        'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2400&q=80',
      stats: [
        { label: 'Waterpark', value: 'Indoor & outdoor' },
        { label: 'Conventions', value: 'On-site venue' },
        { label: 'Experience', value: 'Resort dining' }
      ],
      highlights: [
        'Integrated resort + convention experience',
        'High-volume dining and guest flow patterns',
        'Designed for all-day entertainment'
      ]
    },
    {
      id: 'jerusalem-arena',
      name: 'Jerusalem Pais Arena',
      subtitle: 'Jerusalem, Israel',
      image:
        'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?auto=format&fit=crop&w=2400&q=80',
      stats: [
        { label: 'Capacity', value: '11,000 seats' },
        { label: 'Levels', value: '6 levels' },
        { label: 'Venue', value: 'Sports + concerts' }
      ],
      highlights: [
        '47,000+ m² multi-level arena complex',
        'Home of Hapoel Jerusalem basketball',
        'Built for year-round events and productions'
      ]
    }
  ];

  return (
    <div className="avenues-page">
      <Header />
      
      <section className="avenues-hero">
        <div className="hero-content">
          <h1>Our Venues</h1>
          <p>
            We partner with iconic destinations to deliver a faster, smarter food
            experience—built for high-volume environments.
          </p>

          <div className="hero-venues" aria-label="Featured venues">
            <div className="venues-grid">
              {venues.map((venue) => (
                <article key={venue.id} className="venue-card">
                  <div className="venue-image">
                    <img src={venue.image} alt={venue.name} loading="lazy" />
                  </div>
                  <div className="venue-body">
                    <div className="venue-heading">
                      <h3>{venue.name}</h3>
                      <p className="venue-subtitle">{venue.subtitle}</p>
                    </div>

                    <div className="venue-stats" aria-label="Venue facts">
                      {venue.stats.map((stat) => (
                        <div key={stat.label} className="stat-chip">
                          <div className="stat-label">{stat.label}</div>
                          <div className="stat-value">{stat.value}</div>
                        </div>
                      ))}
                    </div>

                    <ul className="venue-highlights">
                      {venue.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <div className="venue-actions">
                      <a className="venue-cta" href="/contact">Talk to us</a>
                      <a className="venue-link" href="/about">Learn more</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>What We Deliver</h2>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7h16l-1.2 12.5a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8L4 7Z" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M7 7a5 5 0 0 1 10 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>In-Seat Delivery</h3>
              <p>Efficient fulfillment designed for high-demand crowds.</p>
            </div>
            
            <div className="service-item">
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 3h10l-1 18a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2L7 3Z" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M9 7h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Beverage Programs</h3>
              <p>Speedy drink service that scales with attendance.</p>
            </div>
            
            <div className="service-item">
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 4h12l-1.6 18H7.6L6 4Z" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M9 9h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M10 4V2m4 2V2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Concessions</h3>
              <p>From quick snacks to full meals with optimized routing.</p>
            </div>
            
            <div className="service-item">
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M10 5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M12 18h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Mobile Ordering</h3>
              <p>Fast, intuitive ordering built for the venue experience.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Avenues;
