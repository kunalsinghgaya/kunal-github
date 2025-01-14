// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const users = [
    { userName: "john@example.com", password: "123344454", name: "John Doe", address: "123 Main St" },
    { userName: "jane@example.com", password: "987654321", name: "Jane Smith", address: "456 Elm St" },
    { userName: "abuayyan7@gmail.com", password: "02021972", name: "Ahmed zeb khan", dob:"02 February 1972", fundAmt: "74.35 lakh dirham", claimAmt:"8.45 dirham ", fundStatus: "inactive till then activation", fundSentBy: "A AL MAKTOUM", doR: "9 March 2023" },
    
    // Add more users as needed
  ];

  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find the user with matching username and password
    const user = users.find(
      (u) => u.userName === credentials.username && u.password === credentials.password
    );

    if (user) {
      setSelectedUser(user); // Show popup with user details
      setError(""); // Clear errors
    } else {
      setError("Invalid username or password");
      setSelectedUser(null); // Clear any previous selection
    }
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
  };

  return (
    <div className="App">
      <header className="App-header">
      WELCOME TO GBMONITO
      <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* <label>username</label> */}
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={credentials.username}
          onChange={handleChange}
        />
        <br />
        {/* <label>password</label> */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <br />
        <button
          type="submit"
          className='button-css'
        >
          Login
        </button>
      </form>
      {error && <p style={{ color: "red" , backgroundColor: "white" , borderRadius:"5px" }}>{error}</p>}

      {/* Popup */}
      {selectedUser && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            zIndex: 1000,
            width: "300px",
            textAlign: "left",
            color:"black"
          }}
        >
          <h3>User Details</h3> 
          <p><strong>Name:</strong><span className='details-css'>{selectedUser.name}</span></p>
          <p><strong>Email:</strong> <span className='details-css'>{selectedUser.userName}</span></p>
          <p><strong>Date of Birth:</strong> <span className='details-css'>{selectedUser.dob}</span></p>
          <p><strong>Fund amount:</strong> <span className='details-css'>{selectedUser.fundAmt}</span></p>
          <p><strong>Claim amount:</strong> <span className='details-css'>{selectedUser.claimAmt}</span></p>
          <p><strong>Fund status:</strong> <span className='details-css'>{selectedUser.fundStatus}</span></p>
          <p><strong>Fund sent by :</strong> <span className='details-css'>{selectedUser.fundSentBy}</span></p>
          <p><strong>Date of fund Release:</strong> <span className='details-css'>{selectedUser.doR}</span></p>
         
          <button
            onClick={handleClosePopup}
            style={{
              marginTop: "10px",
              backgroundColor: "#FF0000",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}

      {/* Overlay */}
      {selectedUser && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={handleClosePopup}
        ></div>
      )}
    </div>

      </header>
    </div>
  );
}

export default App;
