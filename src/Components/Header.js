import React from 'react';
import logo from "../Images/humming-bird.png";


function Header() {
    return (
      <div className="header">
        <div className="center_header">
          <div className="logo">
            <img src={logo} alt="img" />
          </div>
            <h3>Keep Notes</h3>
        </div>
      </div>
    );
}

export default Header;
