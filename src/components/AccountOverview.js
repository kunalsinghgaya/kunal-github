import React from "react";

const AccountOverview = () => (
  <div style={{ padding: "15px", backgroundColor: "#f0f4f8",marginBottom: "3rem",}}>
    <h2 style={{color: "GrayText", marginBottom: "2rem"}} >Accounts</h2>
    <div style={{ padding: "10px", backgroundColor: "#fff", borderRadius: "5px", textAlign: "center", marginBottom: "1rem" }}>
        <p style={{fontSize:"10px"}}>74.35 Lakh AED (In pending till then initial Deposit)</p>
      <p>Savings Account</p>
      <a href="#viewAll" style={{ color: "#007bff" }}>View All</a>
    </div>
  </div>
);

export default AccountOverview;