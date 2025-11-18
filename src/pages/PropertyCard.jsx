import React from 'react';
import { FaHome, FaBed, FaBath } from 'react-icons/fa';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  const {
    id,
    name,
    location,
    rating,
    price,
    period,
    type, // 'sale' or 'rent'
    propertyType, // 'flat', 'duplex', etc.
    bedrooms,
    bathrooms,
    imageUrl
  } = property;

  // Format price in Naira
  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  // Get period text
  const getPeriodText = () => {
    if (type === 'sale') return 'outright';
    return period || 'monthly';
  };

  return (
    <div className="property-card">
      {/* Property Image */}
      <div className="property-image">
        <img 
          src={imageUrl || '/default-property.jpg'} 
          alt={name}
          onError={(e) => {
            e.target.src = '/default-property.jpg';
          }}
        />
      </div>

      {/* Property Details */}
      <div className="property-details">
        {/* Name, Location and Rating */}
        <div className="property-header">
          <div className="property-info">
            <h3 className="property-name">{name}</h3>
            <p className="property-location">{location}</p>
          </div>
          <div className="property-rating">
            <span className="rating-number">{rating}</span>
            <span className="rating-star">⭐</span>
          </div>
        </div>

        {/* Price and Period */}
        <div className="property-pricing">
          <span className="property-price">{formatPrice(price)}</span>
          <span className="property-period">/{getPeriodText()}</span>
        </div>

        {/* Property Features */}
        <div className="property-features">
          <div className="feature-item">
            <FaHome className="feature-icon" />
            <span className="feature-text">{propertyType}</span>
          </div>
          <div className="feature-item">
            <FaBed className="feature-icon" />
            <span className="feature-text">{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="feature-item">
            <FaBath className="feature-icon" />
            <span className="feature-text">{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;