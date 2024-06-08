import React from 'react';
import "./css/Testimonies.css";
import image1 from './Images/Testimonies/Testimony.jpg';
import image2 from './Images/Testimonies/Testimony1.jpg';
import image3 from './Images/Testimonies/Testimony2.jpg';
import image4 from './Images/Testimonies/Testimony3.jpg';

const testimonies = [
  { id: 1, imageUrl: image1, name: 'Jarvis James', width: '460px', height: '300px' },
  { id: 2, imageUrl: image4, name: 'Andrea Falk', width: '460px', height: '300px' },
  { id: 3, imageUrl: image3, name: 'Kennetta Campbell', width: '460px', height: '350px' },
  { id: 4, imageUrl: image2, name: 'Deb Rich', width: '460px', height: '800px' }
];

function Testimonies() {
  return (
    <div className="testimonies-container">
      <h1>Testimonies</h1>
      <p>Don't just take our word for it, here's what a few of our customers have to say!</p>
      <div className="testimonies">
        {testimonies.map(testimony => (
          <div key={testimony.id} className="testimony">
            <p>{testimony.name}</p>
            <img
              src={testimony.imageUrl}
              alt={testimony.name}
              style={{ width: testimony.width, height: testimony.height }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonies;
