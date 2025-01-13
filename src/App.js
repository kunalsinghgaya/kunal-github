// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", address: "123 Main St" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", address: "456 Oak Ave" },
    { id: 3, name: "Mike Brown", email: "mike@example.com", address: "789 Pine Rd" },
    { id: 4, name: "New SMITH", email: "smith@example.com", address: "888 Pine Rd" },
  ];

  const [selectedId, setSelectedId] = useState("");
  const [popupData, setPopupData] = useState(null);

  // Handle search action
  const handleSearch = () => {
    const result = data.find((item) => item.id === Number(selectedId));
    if (result) {
      setPopupData(result); // Set data to display in popup
    } else {
      alert("No record found for the selected ID!");
    }
  };

  // Close the popup
  const closePopup = () => {
    setPopupData(null);
  };

  return (
    <div className="App">
      <header className="App-header">
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Search by ID</h1>

      {/* Dropdown to select an ID */}
      <label htmlFor="id-select">Select ID:</label>
      <select
        id="id-select"
        className='search-bar'
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        <option value="">--Select ID--</option>
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.id}
          </option>
        ))}
      </select>

      {/* Search Button */}
      <button
      className='button-css'
        onClick={handleSearch}
      >
        Search
      </button>

      {/* Popup to show user details */}
      {popupData && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "20px",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            borderRadius: "8px",
            zIndex: 1000,
            color: "black",
            textAlign: "start",
          }}
        >
          <h2>User Details</h2>
          <p>
            <strong>Name:</strong> {popupData.name}
          </p>
          <p>
            <strong>Email:</strong> {popupData.email}
          </p>
          <p>
            <strong>Address:</strong> {popupData.address}
          </p>
          <button
            onClick={closePopup}
            style={{
              marginTop: "10px",
              padding: "5px 10px",
              backgroundColor: "#DC3545",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}

      {/* Popup overlay (optional, to make background dim) */}
      {popupData && (
        <div
          onClick={closePopup}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        ></div>
      )}
    </div>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
