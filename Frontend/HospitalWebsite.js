import React from 'react';
import './styles.css';
const HospitalWebsite = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="top">
        <div>
          Welcome to Our Hospital | <a href="#">Start</a>
        </div>
      </div>

      {/* Logo Section */}
      <div className="logo">
        <div>
          <table>
            <tbody>
              <tr>
                <td><img src={`${process.env.PUBLIC_URL}/H_Logo.png`} alt="Hospital Logo" /></td>
                <td><a herf="#">Home</a></td>
                <td><a herf = "#">Services</a></td>
                <td><a herf = "#">Doctors</a></td>
                <td><a herf = "#">Contact Us</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Middle Section */}
      <div className="middle">
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Home_Back.jpg)` }}>
          <p>
            <br /> <br />
            Health Care Services <br />
            <span style={{ fontSize: "5px" }}> We Care About Your Health </span>
          </p>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="bottom">
        <div>
          <table>
            <tbody>
              <tr>
                <td>Your health is our mission. At Medical Care, we provide compassionate, top-quality healthcare with a commitment to excellence. Our experienced team is here to offer you personalized care in a state-of-the-art facility.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Up Section */}
      <div className="bottom_up">
        <div>
          <table>
            <tbody>
              <tr>
                <td>Discover our comprehensive range of services, meet our expert doctors, and explore how we prioritize your well-being every step of the way.</td>
              </tr>
              <tr>
                <td>Join us in making health a priority.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Section */}
      <div className="nav_down">
        <div>
          &copy; 2024 Medical Care Hospital. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default HospitalWebsite;
