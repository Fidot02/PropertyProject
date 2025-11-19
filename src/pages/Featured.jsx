import React from 'react'
import PropertyListing from '../components/PropertyListing'
import '../assets/css/ListingSection.css'
import {Link} from 'react-router-dom'

const Featured = () => {
  return (
    <section className="listing-section featured">
      <div className="listing-header">
        <h2 className="listing-title">Featured Properties</h2>
        <p className="listing-subtitle">Discover our handpicked selection of premium properties</p>
      </div>
      <PropertyListing/>
      <div className="back-home">
     <Link to="/" className="back-home-btn">Back to Home</Link>
     </div>
  


      
    </section>
  )
}

export default Featured