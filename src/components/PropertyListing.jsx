import React from 'react';
import PropertyCard from './PropertyCard';
import '../assets/css/PropertyListing.css';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import house1 from "../assets/images/house1.jpeg";
import house2 from "../assets/images/house2.jpeg";
import house3 from "../assets/images/house3.jpeg";
import house4 from "../assets/images/house4.jpeg";
import house5 from "../assets/images/house5.jpeg";
import house6 from "../assets/images/house6.jpeg";
import house7 from "../assets/images/house7.jpeg";
import house8 from "../assets/images/house8.jpeg";


const PropertyListing = ({limit}) => {
  const dummyProperties = [
    {
      id: 1,
      name: "Luxury Apartment",
      location: "Victoria Island, Lagos",
      rating: 4.8,
      price: 25000000,
      period: "monthly",
      type: "rent",
      propertyType: "Penthouse",
      bedrooms: 3,
      bathrooms: 4,
      image: house1
    },
    {
      id: 2,
      name: "Modern Duplex",
      location: "Lekki Phase 1, Lagos",
      rating: 4.5,
      price: 85000000,
      type: "sale",
      propertyType: "Duplex",
      bedrooms: 5,
      bathrooms: 6,
      image: house2
    },
    {
      id: 3,
      name: "Cozy Flat",
      location: "Ikeja GRA, Lagos",
      rating: 4.2,
      price: 1800000,
      period: "yearly",
      type: "rent",
      propertyType: "Flat",
      bedrooms: 2,
      bathrooms: 2,
      image: house3
    },
 {
      id: 4,
      name: "Cozy Flat",
      location: "Ikeja GRA, Lagos",
      rating: 4.2,
      price: 1800000,
      period: "yearly",
      type: "rent",
      propertyType: "Flat",
      bedrooms: 2,
      bathrooms: 2,
      image: house4
    }
    ,
     {
      id: 5,
      name: "Cozy Flat",
      location: "Ikeja GRA, Lagos",
      rating: 4.2,
      price: 1800000,
      period: "yearly",
      type: "rent",
      propertyType: "Flat",
      bedrooms: 2,
      bathrooms: 2,
      image: house5
    },
     {
      id: 6,
      name: "Cozy Flat",
      location: "Ikeja GRA, Lagos",
      rating: 4.2,
      price: 1800000,
      period: "yearly",
      type: "rent",
      propertyType: "Flat",
      bedrooms: 2,
      bathrooms: 2,
      image: house6
    },
     {
      id: 7,
      name: "Cozy Flat",
      location: "Ikeja GRA, Lagos",
      rating: 4.2,
      price: 1800000,
      period: "yearly",
      type: "rent",
      propertyType: "Flat",
      bedrooms: 2,
      bathrooms: 2,
      image: house7
    },
     {
      id: 8,
      name: "Cozy Flat",
      location: "Ikeja GRA, Lagos",
      rating: 4.2,
      price: 1800000,
      period: "yearly",
      type: "rent",
      propertyType: "Flat",
      bedrooms: 2,
      bathrooms: 2,
      image: house8
    }
  ];

const propertiesToShow = limit ? dummyProperties.slice(0, limit) : dummyProperties;

  return (
    <>

    <div className="properties-grid">
      {propertiesToShow.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
   
{limit && (
<div className='see-more'>
 <Link to="/featured-properties">
 <div className="see-more-icon">
  <FiChevronDown />
</div>
  </Link>
</div>
)}

</>

  );
};

export default PropertyListing;