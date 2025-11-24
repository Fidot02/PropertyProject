import React, { useState, useEffect} from "react";
import aPgination from "./components/pagination";
import 'App.css';

function Property() { 
    const[properties,setProperties] = useState([]);
    const[currentPageInfo,setCurrentPageInfo] = useState(
      {pageNumber:1, pageSize:1})
    
      const fetchPropertiesData = async (page = 1) => {
        const response = await fetch (`http://localhost:5044/api/Products?pageNumber=${page}&pageSize=5`)
        
        const data = await response.json();
        setProperties(data.properties);
        setCurrentPageInfo({
          pageNumber: data.pageNumber,
          pageSize: data.pageSize,
      
        })
      };
        useEffect(() => {
        try {
          fetchPropertiesData();
        }  
        catch (error) {
            console.error("Error fetching properties:", error);
        }
      }, []);

        

        return (
            <>
    <div className="pagination">
      <button></button>
      </div>
      </>
        )
    }

    export default Property