import React from 'react';
import './styles2.css'; 

const Doctors = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="top">
        <div>
          Welcome to Our Hospital | <a href="SignIn.html">Sign in</a> | <a href="SignUp.html">Sign Up</a>
        </div>
      </div>

      {/* Logo Section */}
      <div className="logo">
        <div>
          <table>
            <tbody>
              <tr>
                <td><img src={`${process.env.PUBLIC_URL}/H_Logo.png`} alt="Hospital Logo" /></td>
                <td><a href="#">Services</a></td>
                <td><a href="#">Doctors</a></td>
                <td><a href="#">Contact Us</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Doctors Section */}
      <div className="doctors-section">
        <h2>Our Doctors</h2>

        <div className="doctors-grid">
          <div className="doctor">
            <img src={`${process.env.PUBLIC_URL}/d1.jpg`} alt="Doctor 1" width="150" height="150" />
            <h3>Dr. John Doe</h3>
            <p>Specialty: Endocrinology</p>
            <p>Experience: 15 years</p>
            <p>Education: MD, PhD</p>
          </div>

          <div className="doctor">
            <img src={`${process.env.PUBLIC_URL}/d2.jpg`} alt="Doctor 2" width="150" height="150" />
            <h3>Dr. Jane Smith</h3>
            <p>Specialty: Medicine</p>
            <p>Experience: 12 years</p>
            <p>Education: MD, MSc</p>
          </div>

          <div className="doctor">
            <img src={`${process.env.PUBLIC_URL}/d3.jpg`} alt="Doctor 3" width="150" height="150" />
            <h3>Dr. Emily Johnson</h3>
            <p>Specialty: General Practice</p>
            <p>Experience: 10 years</p>
            <p>Education: MD, MPH</p>
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

export default Doctors;
