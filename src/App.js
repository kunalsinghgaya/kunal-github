// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import userA from "./userA.jpg";

function App() {
  const users = [
    {
      userName: "john@example.com",
      password: "123344454",
      name: "John Doe",
      address: "123 Main St",
    },
    {
      userName: "jane@example.com",
      password: "987654321",
      name: "Jane Smith",
      address: "456 Elm St",
    },
    {
      userName: "abuayyan7@gmail.com",
      password: "02021972",
      name: "Ahmed zeb khan",
      dob: "02 February 1972",
      fundAmt: "74.35 lakh dirham",
      claimAmt: "8.45 dirham ",
      fundStatus: "inactive till then activation",
      fundSentBy: "A AL MAKTOUM",
      doR: "9 March 2023",
      img: userA,
    },

    // Add more users as needed
  ];

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find the user with matching username and password
    const user = users.find(
      (u) =>
        u.userName === credentials.username &&
        u.password === credentials.password
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
        <h1>WELCOME TO GB MONITO</h1>
      <div className="form-css" >
        <div className="box-css" style={{marginTop:"8%"}}>
          <form onSubmit={handleSubmit} >
          <h2>Log In</h2>
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
            <div style={{ position: "relative" }}>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "-29px",
                  top: "12px",
                  border: "none",
                  background: "transparent",
                }}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
            {/* <br /> */}
            <button type="submit" className="button-css">
              Login
            </button>
          </form>
          {error && (
            <p
              style={{
                padding: "5px",
                color: "red",
                backgroundColor: "white",
                borderRadius: "5px",
              }}
            >
              {error}
            </p>
          )}

          {/* Popup */}
          {selectedUser && (
            <div className="pop-up-css">
              <h3>User Details</h3>
              <img
                style={{
                  width: "18%",
                  position: "fixed",
                  right: "5px",
                  top: "5px",
                }}
                src={selectedUser?.img}
                alt={selectedUser?.name || "User image"}
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  rowGap: "10px",
                  columnGap: "20px",
                  marginTop: "10px",
                }}
              >
                <React.Fragment>
                  <strong>Name:</strong>
                  <span>{selectedUser.name}</span>

                  <strong>Email:</strong>
                  <span>{selectedUser.userName}</span>

                  <strong>Date of Birth:</strong>
                  <span>{selectedUser.dob}</span>

                  <strong>Fund Amount:</strong>
                  <span>{selectedUser.fundAmt}</span>

                  <strong>Claim Amount:</strong>
                  <span>{selectedUser.claimAmt}</span>

                  <strong>Fund Status:</strong>
                  <span>{selectedUser.fundStatus}</span>

                  <strong>Fund Sent By:</strong>
                  <span>{selectedUser.fundSentBy}</span>

                  <strong>Date of Fund Release:</strong>
                  <span>{selectedUser.doR}</span>
                </React.Fragment>
              </div>

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
        </div>
      </header>
  
    </div>
  );
}

export default App;
