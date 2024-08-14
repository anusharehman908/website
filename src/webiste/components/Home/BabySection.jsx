import React from 'react';
import './BabySection.css';

const BabySection = () => {
  const items = [
    {
      src: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F09607.jpg&w=256&q=50',
      alt: 'Baby Product 1',
      title: 'Baby Milk',
      description: 'Gentle and nourishing baby lotion.',
    },
    {
      src: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F20688.jpg&w=256&q=50',
      alt: 'Baby Product 2',
      title: 'Baby Milk',
      description: 'Tear-free shampoo for your baby.',
    },
    {
      src: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F09360-1.jpg&w=256&q=50',
      alt: 'Baby Product 3',
      title: 'Baby Wipes',
      description: 'Soft and sensitive baby wipes.',
    },
    {
      src: 'https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2Fdvago-products-images%2Fjohnson-baby-oil-reg-125ml.webp&w=256&q=50',
      alt: 'Baby Product 4',
      title: 'Baby Lotion',
      description: 'Smooth and soothing baby powder.',
    },
  ];

  return (
    <section className="baby-section">
      <div className="container">
        <h2 className="section-title">Baby & Mother Care</h2>
        <div className="product-grid">
          {items.map((item, index) => (
            <div key={index} className="product-item">
              <img src={item.src} alt={item.alt} className="product-image" />
              <h3 className="product-title">{item.title}</h3>
              <p className="product-description">{item.description}</p>
              <button className="shop-button">Shop Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BabySection;
