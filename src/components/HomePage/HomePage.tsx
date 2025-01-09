import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import useFetch from '../../utils/useFetch';
import './HomePage.css';

const HomePage: React.FC = () => {
  useFetch('/api/example', { method: 'GET' });

  return (
    <>
      <Header itemCount={0} /> {/* Pass itemCount if required by Header */}
      <section className="main-section">
        <div className="content">
          <h1>
            Beautiful food & takeaway, <span className="highlight">delivered</span> to your door.
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
          </p>
          <button disabled>Place an Order</button>
          <div className="rating">
            <div className="stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
            <span>4.8 out of 5 based on 2000+ reviews</span>
          </div>
        </div>
        <div className="image">
          <img src="./src/assets/images/food.svg" alt="Delicious food" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
