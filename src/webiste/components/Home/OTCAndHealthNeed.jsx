import React from 'react';
import './OTCAndHealthNeed.css';

const OTCAndHealthNeed = () => {
  const items = [
    { id: 1,
         image: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F212%2F07107.webp&w=256&q=50',
          name: 'OTC Product 1' },
    { id: 2, 
        image: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F12237-1.jpg&w=256&q=50',
         name: 'OTC Product 2' },
    { id: 3, 
        image: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F212%2F07570.webp&w=256&q=50', 
        name: 'OTC Product 3' },
    { id: 4, 
        image: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F13074-1.jpg&w=256&q=50', 
        name: 'OTC Product 4' },
    { id: 5, 
        image: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F212%2F05380.webp&w=256&q=50',
         name: 'OTC Product 5' },
  ];

  return (
    <section className="otc-section">
      <h2 className="otc-heading">OTC And Health Need</h2>
      <div className="otc-container">
        {items.map((item) => (
          <div key={item.id} className="otc-card">
            <img src={item.image} alt={item.name} className="otc-image" />
            <h3 className="otc-name">{item.name}</h3>
            <button className="otc-order-button">Order Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OTCAndHealthNeed;
