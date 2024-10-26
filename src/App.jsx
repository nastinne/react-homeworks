import React from 'react';
import './App.css'; 

const App = () => {
  const products = [
    {
      id: 1,
      title: 'Acer palmatum-Sangokaku (Coral Bark Maple)',
      price: '£34.99',
      oldPrice: '£44.99',
      imageUrl: './src/assets/images/image.jpeg',
    },
    {
      id: 2,
      title: 'Acer palmatum-Sangokaku (Coral Bark Maple)',
      price: '£34.99',
      oldPrice: '£44.99',
      imageUrl: './src/assets/images/image (1).jpeg',
    },
    {
      id: 3,
      title: 'Acer palmatum-Sangokaku (Coral Bark Maple)',
      price: '£34.99',
      oldPrice: '£44.99',
      imageUrl: './src/assets/images/image (7).jpeg',
    },
    {
      id: 4,
      title: 'Acer palmatum-Sangokaku (Coral Bark Maple)',
      price: '£34.99',
      oldPrice: '£44.99',
      imageUrl: './src/assets/images/image (3).jpeg',
    },
    {
      id: 5,
      title: 'Pruns "Victoria" Victoria Prun Tree',
      price: '£34.99',
      imageUrl: './src/assets/images/image (4).jpeg',
    },
    {
      id: 6,
      title: 'Syringa souvenir de louis',
      price: '£39.99',
      imageUrl: './src/assets/images/image (5).jpeg',
    },
    {
      id: 7,
      title: 'Medlar nottingham fruit',
      price: '£14.99',
      imageUrl: './src/assets/images/image (6).jpeg',
    },
    {
      id: 8,
      title: 'Arbutus unedo Fruit',
      price: '£34.99',
      imageUrl: './src/assets/images/image (5).jpeg',
    },
    {
      id: 9,
      title: 'Acer palmatum-Sangokaku (Coral Bark Maple)',
      price: '£34.99',
      oldPrice: '£44.99',
      imageUrl: './src/assets/images/image (7).jpeg',
    },
    {
      id: 10,
      title: 'Acer palmatum-Sangokaku (Coral Bark Maple)',
      price: '£34.99',
      oldPrice: '£44.99',
      imageUrl: './src/assets/images/image.jpeg',
    },
    {
      id: 11,
      title: 'Acer palmatum-Sangokaku (Coral Bark Maple)',
      price: '£34.99',
      oldPrice: '£44.99',
      imageUrl: './src/assets/images/image (1).jpeg',
    },
    {
      id: 12,
      title: 'Acer palmatum-Sangokaku (Coral Bark Maple)',
      price: '£34.99',
      oldPrice: '£44.99',
      imageUrl: './src/assets/images/image (4).jpeg',
    },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>Header</h1>
      </header>
      
      <main className="main">
        <section className="products">
          <h2>Collection</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.imageUrl} alt={product.title} />
                <h3>{product.title}</h3>
                <p className="price">
                  <span className="new-price">{product.price}</span>
                  {product.oldPrice && (
                    <span className="old-price">{product.oldPrice}</span>
                  )}
                </p>
                <button>Add to cart</button>
                <button>View</button>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default App;
