import React from 'react';
import './MainSection.css';
import { getImgUrl } from '../utils/getImgUrl';

const items = [
  { 
    id: 1, 
    name: 'Burger Dreams', 
    price: 9.2, 
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
    image: getImgUrl('dreams.png')
  },
  { 
    id: 2, 
    name: 'Burger Waldo', 
    price: 10.0, 
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
    image: getImgUrl('waldo.png')
  },
  { 
    id: 3, 
    name: 'Burger Cali', 
    price: 8.0, 
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
    image: getImgUrl('call.png')
  },
  { 
    id: 4, 
    name: 'Burger Bacon Buddy', 
    price: 9.99, 
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
    image: getImgUrl('buddy.png')
  },
  { 
    id: 5, 
    name: 'Burger Spicy', 
    price: 9.2, 
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
    image: getImgUrl('spicy.png')
  },
  { 
    id: 6, 
    name: 'Burger Classic', 
    price: 8.0, 
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
    image: getImgUrl('classic.png')
  },
];

function MainSection() {
    return (
        <main className="main-section">
          <h1 className="main-title">Browse our menu</h1>
          <p className="main-description">
            Use our menu to place an order online, or{' '}
            <span style={{ position: 'relative' }}>
              <span className="phone" title="Phone Number: +1 (555) 123-4567">phone</span>
            </span>{' '}
            our store to place a pickup order. Fast and fresh food.
          </p>

      <div className="menu-buttons">
        <button className="menu-button">Desert</button>
        <button className="menu-button">Dinner</button>
        <button className="menu-button">Breakfast</button>
      </div>

      <div className="menu">
        {items.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <div className="menu-item-content">
              <h2 className="menu-item-name">{item.name}</h2>
              <p className="menu-item-price">${item.price.toFixed(2)} USD</p>
              <p className="menu-item-description">{item.description}</p>
              <div className="item-actions">
                <input type="number" min="1" defaultValue="1" className="quantity-input" />
                <button className="menu-button">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
   

      {/* See more button */}
      <div className="see-more">
        <button className="menu-button">See more</button>
      </div>
    </main>
  );
}

export default MainSection;
