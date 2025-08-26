import React from "react";

// CARDS COMPONENT - Displays three financial summary cards with click functionality
// Props: income (number), expenses (number), onIncomeClick (function), onExpenseClick (function), activeSection (string)
function Cards({ income = 0, expenses = 0, onIncomeClick, onExpenseClick, activeSection }) {
  // Calculate balance by subtracting expenses from income
  const balance = income - expenses;

  return (
    // Main container with flexbox layout for responsive card arrangement
    <div className="cards-container">
      
      {/* INCOME CARD - Shows total income in green theme (CLICKABLE) */}
      <div 
        onClick={onIncomeClick}
        className="card"
        style={{ 
          background: activeSection === 'income' ? "#c8e6c9" : "#e0ffe0",  // Darker green when active
          boxShadow: activeSection === 'income' ? "0 4px 8px rgba(0,0,0,0.2)" : "0 2px 4px rgba(0,0,0,0.1)",
          transform: activeSection === 'income' ? "scale(1.02)" : "scale(1)",  // Slightly larger when active
        }}
        onMouseEnter={(e) => {
          if (activeSection !== 'income') {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
          }
        }}
        onMouseLeave={(e) => {
          if (activeSection !== 'income') {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
          }
        }}
      >
        <h2 style={{ margin: "0 0 1rem 0", color: "#2d5a2d" }}>Income</h2>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0", color: "#2d5a2d" }}>
          {/* Format income to 2 decimal places */}
          ${income.toFixed(2)}
        </p>
        {activeSection === 'income' && (
          <small style={{ color: "#2d5a2d", fontStyle: "italic" }}>Click to close</small>
        )}
        {activeSection !== 'income' && (
          <small style={{ color: "#2d5a2d", fontStyle: "italic" }}>Click to manage</small>
        )}
      </div>
      
      {/* EXPENSES CARD - Shows total expenses in red theme (CLICKABLE) */}
      <div 
        onClick={onExpenseClick}
        className="card"
        style={{ 
          background: activeSection === 'expenses' ? "#ffcdd2" : "#ffe0e0",  // Darker red when active
          boxShadow: activeSection === 'expenses' ? "0 4px 8px rgba(0,0,0,0.2)" : "0 2px 4px rgba(0,0,0,0.1)",
          transform: activeSection === 'expenses' ? "scale(1.02)" : "scale(1)",  // Slightly larger when active
        }}
        onMouseEnter={(e) => {
          if (activeSection !== 'expenses') {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
          }
        }}
        onMouseLeave={(e) => {
          if (activeSection !== 'expenses') {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
          }
        }}
      >
        <h2 style={{ margin: "0 0 1rem 0", color: "#5a2d2d" }}>Expenses</h2>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0", color: "#5a2d2d" }}>
          {/* Format expenses to 2 decimal places */}
          ${expenses.toFixed(2)}
        </p>
        {activeSection === 'expenses' && (
          <small style={{ color: "#5a2d2d", fontStyle: "italic" }}>Click to close</small>
        )}
        {activeSection !== 'expenses' && (
          <small style={{ color: "#5a2d2d", fontStyle: "italic" }}>Click to manage</small>
        )}
      </div>
      
      {/* BALANCE CARD - Shows remaining balance with dynamic color (NON-CLICKABLE) */}
      <div className="card" style={{ 
        // Dynamic background: blue if positive balance, yellow if negative
        background: balance >= 0 ? "#e0e7ff" : "#ffeaa7", 
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        cursor: "default"  // Override cursor for non-clickable card
      }}>
        <h2 style={{ margin: "0 0 1rem 0", color: balance >= 0 ? "#2d2d5a" : "#5a4a2d" }}>Balance</h2>
        <p style={{ 
          fontSize: "1.5rem", 
          fontWeight: "bold", 
          margin: "0", 
          // Dynamic text color based on positive/negative balance
          color: balance >= 0 ? "#2d2d5a" : "#5a4a2d" 
        }}>
          {/* Format balance to 2 decimal places */}
          ${balance.toFixed(2)}
        </p>
        <small style={{ color: balance >= 0 ? "#2d2d5a" : "#5a4a2d", fontStyle: "italic" }}>
          {balance >= 0 ? "You're doing great!" : "Budget carefully"}
        </small>
      </div>
    </div>
  );
}

export default Cards;