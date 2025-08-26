import React, { useState } from 'react'

// INCOME INPUT COMPONENT - Form for adding new income
// Props: onAddIncome (function) - callback to add income to parent component
const IncomeInput = ({ onAddIncome }) => {
  
  // STATE MANAGEMENT FOR FORM FIELDS
  const [amount, setAmount] = useState('');              // Income amount (string for input handling)
  const [type, setType] = useState('Fixed Income');      // Selected income type (default: 'Fixed Income')
  const [date, setDate] = useState('');                  // Selected date (string format)

  // PREDEFINED INCOME TYPES
  // Array of common income types for the dropdown
  const incomeTypes = [
    'Fixed Income',
    'Additional Income'
  ];

  // FORM SUBMISSION HANDLER
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // VALIDATION: Check if required fields are filled
    if (!amount || !date) {
      alert('Please fill in all fields');
      return;
    }

    // VALIDATION: Check if amount is a valid positive number
    if (isNaN(amount) || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    // CALL PARENT FUNCTION: Send income data to parent component
    onAddIncome({
      amount: parseFloat(amount), // Convert string to number
      type,                       // Current selected income type
      date                        // Current selected date
    });

    // RESET FORM: Clear all fields after successful submission
    setAmount('');
    setType('Fixed Income');      // Reset to default type
    setDate('');
  };

  // COMPONENT RENDER
  return (
    // Main form container with styling
    <div className="form-container" style={{ 
      backgroundColor: '#f0fff0',  // Light green background for income
    }}>
      <h3 style={{ color: '#2d5a2d' }}>Add New Income</h3>
      
      {/* FORM ELEMENT with submit handler */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        
        {/* AMOUNT INPUT FIELD */}
        <div className="form-row">
          <label>Amount: $</label>
          <input 
            type="number"           // HTML5 number input for better mobile experience
            step="0.01"             // Allow decimal values (cents)
            placeholder="Enter amount" 
            value={amount}          // Controlled input - value from state
            onChange={(e) => setAmount(e.target.value)} // Update state on change
            style={{ 
              border: '1px solid #90EE90',  // Light green border
            }}
          />
        </div>
        
        {/* INCOME TYPE DROPDOWN */}
        <div className="form-row">
          <label>Type:</label>
          <select 
            value={type}            // Controlled select - value from state
            onChange={(e) => setType(e.target.value)} // Update state on change
            style={{ 
              border: '1px solid #90EE90',
            }}
          >
            {/* Map through income types array to create option elements */}
            {incomeTypes.map(incomeType => (
              <option key={incomeType} value={incomeType}>{incomeType}</option>
            ))}
          </select>
        </div>
        
        {/* DATE PICKER INPUT */}
        <div className="form-row">
          <label>Date:</label>
          <input 
            type="date"             // HTML5 date input - opens calendar picker
            value={date}            // Controlled input - value from state
            onChange={(e) => setDate(e.target.value)} // Update state on change
            style={{ 
              border: '1px solid #90EE90',
            }}
          />
        </div>
        
        {/* SUBMIT BUTTON */}
        <button 
          type="submit"             // Triggers form submission
          className="submit-button"
          style={{ 
            backgroundColor: '#28a745',  // Green color for income
          }}
        >
          Add Income
        </button>
      </form>
    </div>
  )
}

export default IncomeInput
