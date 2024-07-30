import React from 'react';
import './styles.css'; 

const ContactUs = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="top">
        <div>
          Contact Us +91 96366 20000 / 01 | medicalcare@hospital.com
        </div>
      </div>

      {/* Logo Section */}
      <div className="logo">
        <div>
          <table>
            <tbody>
              <tr>
                <td><img src={`${process.env.PUBLIC_URL}/H_Logo.png`} alt="Hospital Logo" /></td>
                <td><a >Home</a></td>
                <td><a>Services</a></td>
                <td><a>Doctors</a></td>
                <td><a>Contact Us</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom">
        <div>
          <table border="0">
            <tbody>
              <tr>
                <td width="700px">
                  <br />
                  <font color="#000" size="6px">CONTACT US</font>
                  <br />
                  <br />
                  Medical Care Hospital & Research Center
                  <br />
                  <br />
                  Mob : +91 0123456789
                  <br />
                  <br />
                  Email : medicalcare@hospital.com
                  <br />
                  <br />
                  <br />
                </td>
                <td style={{ paddingLeft: '20px' }}></td>
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

export default ContactUs;
