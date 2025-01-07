import React, { useState, useEffect, useRef } from 'react';
import './MainSection.css';

const MainSection = ({ incrementItemCount }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);
  const [allItemsLoaded, setAllItemsLoaded] = useState(false);
  const [filterCategory, setFilterCategory] = useState('Dinner'); // Default category
  const quantityRefs = useRef({});

  useEffect(() => {
    fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals')
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error("Error fetching the menu:", error));
  }, []);

  const handleSeeMore = () => {
    const newVisibleCount = visibleItems + 6;
    setVisibleItems(newVisibleCount);
    setAllItemsLoaded(newVisibleCount >= filteredItems.length);
  };

  const handleAddToCart = (itemId) => {
    const ref = quantityRefs.current[itemId];
    const quantity = Number(ref?.value || 0);
    if (quantity > 0) {
      incrementItemCount(quantity);
    }
  };

  const filteredItems = menuItems.filter(
    (item) => item.category === filterCategory
  );

  const itemsToDisplay = filteredItems.slice(0, visibleItems);

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
        <button
          className={`menu-button ${filterCategory === 'Dinner' ? 'active' : ''}`}
          onClick={() => setFilterCategory('Dinner')}
        >
          Dinner
        </button>
        <button
          className={`menu-button ${filterCategory === 'Breakfast' ? 'active' : ''}`}
          onClick={() => setFilterCategory('Breakfast')}
        >
          Breakfast
        </button>
        <button
          className={`menu-button ${filterCategory === 'Dessert' ? 'active' : ''}`}
          onClick={() => setFilterCategory('Dessert')}
        >
          Dessert
        </button>
      </div>

      <div className="menu">
        {itemsToDisplay.map((item) => {
          if (!quantityRefs.current[item.id]) {
            quantityRefs.current[item.id] = React.createRef();
          }
          return (
            <div key={item.id} className="menu-item">
              <img src={item.img} alt={item.meal} className="menu-item-image" />
              <div className="menu-item-content">
                <h2 className="menu-item-name">{item.meal}</h2>
                <p className="menu-item-price">${item.price.toFixed(2)} USD</p>
                <div className="item-actions">
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="quantity-input"
                    ref={(el) => (quantityRefs.current[item.id] = el)}
                    onChange={() => {}}
                  />
                  <button
                    className="menu-button"
                    onClick={() => handleAddToCart(item.id)}
                    disabled={
                      !quantityRefs.current[item.id] ||
                      !quantityRefs.current[item.id].value ||
                      Number(quantityRefs.current[item.id].value) <= 0
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!allItemsLoaded && (
        <div className="see-more">
          <button className="menu-button" onClick={handleSeeMore}>See more</button>
        </div>
      )}
    </main>
  );
};

export default MainSection;
