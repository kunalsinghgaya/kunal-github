import React, { useState } from "react";

const AlertSection = () => {
  const [update, setUpdate] = useState(null);

  const toggleUpdate = () => {
    setUpdate((prevState) => !prevState);
  };
  
  return (
    <>
  <div style={{ padding: "10px", backgroundColor: "#fff3cd", color: "#856404", textAlign: "center", marginTop: "2rem", marginBottom: "3rem" }}>
    <p>Password expiring on <strong>05/Feb/2025</strong></p>
    <a href="#update" style={{ color: "#007bff" }} onClick={toggleUpdate}>Update Now</a>
  </div>
  {update && (
    <div className="pop-up-css">
      This feature will start after the account activation by OTP ending with number *******77546
      <button
      onClick={toggleUpdate}
      style={{
        marginTop: "10px",
        backgroundColor: "#0056b3",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        width: "28%",
      }}
    >
      Close
    </button>

    </div>

  )}
  </>
)};

export default AlertSection;