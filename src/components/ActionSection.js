import React from "react";

const actions = [
  { name: "Bill Payments", icon: "🧾" },
  { name: "Money Transfer", icon: "💰" },
  { name: "Add Payee", icon: "➕" },
  { name: "Scan & Pay", icon: "📲" },
  { name: "Recharge", icon: "🔋" },
  { name: "UPI Payment", icon: "💸" },
];

const ActionsSection = () => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", padding: "10px", marginBottom:"1rem" }}>
    {actions.map((action) => (
      <div key={action.name} style={{ textAlign: "center" }}>
        <div style={{ fontSize: "30px", marginBottom: "5px" }}>{action.icon}</div>
        <p>{action.name}</p>
      </div>
    ))}
  </div>
);

export default ActionsSection;