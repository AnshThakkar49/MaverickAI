import React from 'react';
import './styles1.css';

const Services = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="top">
        <div>
          Welcome to Our Hospital | <a>Start</a>
        </div>
      </div>

      {/* Logo Section */}
      <div className="logo">
        <div>
          <table>
            <tbody>
              <tr>
                <td><img src={`${process.env.PUBLIC_URL}/H_Logo.png`} alt="Hospital Logo" /></td>
                <td><a>Home</a></td>
                <td><a>Services</a></td>
                <td><a>Doctors</a></td>
                <td><a>Contact Us</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2>Our Services</h2>

        <div className="services-grid">
          <div className="service">
            <img src={`${process.env.PUBLIC_URL}/diabetes.png`} alt="Diabetes" />
            <h3>Diabetes</h3>
            <p>Advanced diabetes care for all ages.</p>
          </div>

          <div className="service">
            <img src={`${process.env.PUBLIC_URL}/Malaria.png`} alt="Malaria" />
            <h3>Malaria</h3>
            <p>Expert care for Malaria.</p>
          </div>

          <div className="service">
            <img src={`${process.env.PUBLIC_URL}/ChikenPox.jpg`} alt="Chiken Pox" />
            <h3>Chiken Pox</h3>
            <p>Comprehensive care for Chiken Pox.</p>
          </div>

          <div className="service">
            <img src={`${process.env.PUBLIC_URL}/Jaundice.png`} alt="Jaundice" />
            <h3>Jaundice</h3>
            <p>Jaundice Treatment</p>
          </div>

          <div className="service">
            <img src={`${process.env.PUBLIC_URL}/Dengue.png`} alt="Dengue" />
            <h3>Radiology</h3>
            <p>Advanced Dengue Treatment.</p>
          </div>

          <div className="service">
            <img src={`${process.env.PUBLIC_URL}/CommonCold.png`} alt="Common Cold" />
            <h3>Cold</h3>
            <p>Cold Treating services.</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="nav_down">
        <div>
          &copy; 2024 Hospital Name. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Services;
