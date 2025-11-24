import React, { useState, useEffect} from "react";

function propertyPagination() { 
    const[properties,setProperties] = useState([]);
    const[currentPageInfo,setCurrentPageInfo] = useState(
      {pageNumber:1, pageSize:19})
    
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

      const goToNextPage = () => {
    fetchPropertiesData(currentPageInfo.pageNumber + 1);
  };

  const goToPrevPage = () => {
    if (currentPageInfo.pageNumber > 1) {
      fetchPropertiesData(currentPageInfo.pageNumber - 1);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Properties</h2>

      {/* Property List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {properties.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow p-4 rounded"
          >
            <h3 className="font-bold">{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={goToPrevPage}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Previous
        </button>

        <span>Page {currentPageInfo.pageNumber}</span>

        <button
          onClick={goToNextPage}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default propertyPagination;
