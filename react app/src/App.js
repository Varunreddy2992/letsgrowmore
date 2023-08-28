import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // State for managing query page number, fetched data, and loading state
  const [query, setQuery] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch data from API
  const fetchApi = async () => {
    setIsLoading(true);
    try {
      const res = await axios(`https://reqres.in/api/users?page=${query}`);
      // Append new data to existing data array
      setData((prevData) => [...prevData, ...res.data.data]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  // Function to handle fetching more data on button click
  const handleQuery = () => {
    setQuery((prev) => prev + 1);
    fetchApi();
  };

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <h1 className="brand">Brand Name</h1>
        {/* Fetch API button */}
        <button className="btn-get-users" onClick={handleQuery} disabled={isLoading}>
          FetchApi
        </button>
      </header>

      {/* Display fetched data */}
      <section className="dataSection">
        {data.map((item) => (
          <div key={item.id} className="data">
            <img className="img" src={item.avatar} alt="" />
            <div className="text">
              <p className="name text-md">
                {item.first_name} {item.last_name}
              </p>
              <p className="email">{item.email}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Loading indicator */}
      {isLoading && (
        <div className="loaderSection">
          <div className="loader">
            <div className="circle"></div>
            <div className="line-1"></div>
            <div className="line-2"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
