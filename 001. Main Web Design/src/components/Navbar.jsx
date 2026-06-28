import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Cek jika posisi scroll saat ini berada di dalam area section
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
          current = section.getAttribute('id');
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Panggil sekali saat pertama load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo-link">
          <img src="/logo.png" alt="Portofio Logo" className="logo-img" />
        </a>
        <div className="nav-links">
          <a href="#home" data-text="Home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#templates" data-text="Templates" className={activeSection === 'templates' ? 'active' : ''}>Templates</a>
          <a href="#pricing" data-text="Pricing" className={activeSection === 'pricing' ? 'active' : ''}>Pricing</a>
        </div>

        {/* Profile Icon di Pojok Kanan */}
        <a href="#profile" className="profile-icon-link">
          <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" alt="User Profile" className="profile-icon-img" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
