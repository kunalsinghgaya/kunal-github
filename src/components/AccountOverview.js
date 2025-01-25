import React from "react";

const AccountOverview = () => (
  <div style={{ padding: "15px", backgroundColor: "#f0f4f8", }}>
    <h2 style={{color: "GrayText"}} >Accounts</h2>
    <div style={{ padding: "10px", backgroundColor: "#fff", borderRadius: "5px", textAlign: "center" }}>
      <p>Savings Account</p>
      <a href="#viewAll" style={{ color: "#007bff" }}>View All</a>
    </div>
  </div>
);

export default AccountOverview;