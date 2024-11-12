import React from 'react';
import './Header.css';
import { getImgUrl } from '../utils/getImgUrl';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-logo">
          <a href="#" className="logo-link"> 
            <img src={getImgUrl('logo.svg')} alt="Logo" />
          </a>
        </div>

        <nav className="header-nav">
          <a href="#" className="header-link">Home</a>
          <a href="#" className="header-link">Menu</a>
          <a href="#" className="header-link">Company</a>
          <a href="#" className="header-link">Login</a>
        </nav>

        <div className="header-cart">
          <a href="#" className="cart-link"> 
            <img src={getImgUrl('busket.svg')} alt="Cart" className="cart-icon" />
            {this.props.itemCount > 0 && (
              <span className="cart-count">{this.props.itemCount}</span>
            )}
          </a>
        </div>
      </header>
    );
  }
}

export default Header;

