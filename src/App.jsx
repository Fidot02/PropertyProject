import { useState } from "react";
import './App.css';

import Footer from "./components/Footer";
import propertyPagination from "./components/propertyPagination";
import Reviews from "./components/reviews";
import Review from "./components/Review";
import ReviewForm from "./components/ReviewForm";
function App() {
  return (
  <>
  <propertyPagination/>
  <Review/>
  {/* <Reviews/> */}
  <ReviewForm/> 
  <Footer/>


</>
  )
}

export default App;
