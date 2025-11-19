import React from 'react'
import Featured from './Featured'
import '../assets/css/HomePage.css'
import PropertyListing from '../components/PropertyListing'
import Homesearch from '../components/HomeSearch.jsx'

const HomePage = () => {
  return (

    
    <div className="home-page">
      <section>
        <div>
         <Homesearch/> 
        </div>
      </section>
        <section className="listing-section featured">
      <div className="listing-header">
        <h2 className="listing-title">Featured Properties</h2>
        <p className="listing-subtitle">Discover our handpicked selection of premium properties</p>
      <PropertyListing limit={6} />
        </div>
    </section>
    </div>
  )
}

export default HomePage