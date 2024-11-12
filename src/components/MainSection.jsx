import React, { Component, createRef } from 'react';
import './MainSection.css';

class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      visibleItems: 6,
      allItemsLoaded: false,
    };
    this.quantityRefs = {};
  }

  componentDidMount() {
    fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ items: data });
      })
      .catch((error) => {
        console.error("Error fetching the menu:", error);
      });
  }

  handleSeeMore = () => {
    const { visibleItems, items } = this.state;
    const newVisibleCount = visibleItems + 6;

    this.setState({
      visibleItems: newVisibleCount,
      allItemsLoaded: newVisibleCount >= items.length,
    });
  };

  handleAddToCart = (itemId) => {
    const ref = this.quantityRefs[itemId];
    if (ref && ref.current) {
      const quantity = Number(ref.current.value || 1);
      if (quantity > 0) {
        this.props.incrementItemCount(quantity);
      }
    } else {
      console.error("Quantity input ref is null or undefined for item ID:", itemId);
    }
  };

  render() {
    const { items, visibleItems, allItemsLoaded } = this.state;
    const itemsToDisplay = items.slice(0, visibleItems);

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
          <button className="menu-button" disabled>Dinner</button>
          <button className="menu-button" disabled>Breakfast</button>
          <button className="menu-button" disabled>Dessert</button>
        </div>

        <div className="menu">
          {itemsToDisplay.map((item) => {
            if (!this.quantityRefs[item.id]) {
              this.quantityRefs[item.id] = createRef();
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
                      ref={this.quantityRefs[item.id]}
                    />
                    <button
                      className="menu-button"
                      onClick={() => this.handleAddToCart(item.id)}
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
            <button className="menu-button" onClick={this.handleSeeMore}>See more</button>
          </div>
        )}
      </main>
    );
  }
}

export default MainSection;
