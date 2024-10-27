import React from 'react';
import './Footer.css';
import { getImgUrl } from '../utils/getImgUrl';

function Footer() {
  // Имитация данных, получаемых с бэка
  const footerData = {
    logoText: (
      <>
        Takeaway & Delivery template
        <br />
        for small - medium businesses.
      </>
    ),
    columns: [
      {
        title: "Company",
        items: ["Home", "Order", "FAQ", "Contact"]
      },
      {
        title: "Template",
        items: ["Style Guide", "Changelog", "Licence", "Support", "Webflow University"]
      },
      {
        title: "Flowbase",
        items: ["More Cloneables"]
      }
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={getImgUrl('logo.svg')} alt="Logo" className="footer-logo" />
        <p className="footer-logo-text">{footerData.logoText}</p>
      </div>

      <div className="footer-columns">
        {footerData.columns.map((column, index) => (
          <div key={index} className="footer-column">
            <h4 className="footer-column-title">{column.title}</h4>
            <ul className="footer-column-list">
              {column.items.map((item, idx) => (
                <li key={idx} className="footer-column-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
