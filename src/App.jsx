import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homesearch from './components/HomeSearch.jsx'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.jsx';
import Featured from './pages/Featured.jsx';

function App() {
  return (
    <>
    
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/featured-properties" element={<Featured />} />
      </Routes>

    </>
  )

     
  
  
}

export default App;
