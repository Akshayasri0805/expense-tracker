import React, { useState } from 'react'

// INPUT FIELDS COMPONENT - Form for adding new expenses
// Props: onAddExpense (function) - callback to add expense to parent component
const Inputfileds = ({ onAddExpense }) => {
  
  // STATE MANAGEMENT FOR FORM FIELDS
  const [amount, setAmount] = useState('');        // Expense amount (string for input handling)
  const [category, setCategory] = useState('Food'); // Selected category (default: 'Food')
  const [date, setDate] = useState('');            // Selected date (string format)

  // PREDEFINED EXPENSE CATEGORIES
  // Array of common expense categories for the dropdown
  const expenseCategories = [
    'Food',
    'Transportation',
    'Entertainment',
    'Shopping',
    'Bills',
    'Healthcare',
    'Education',
    'Other'
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

    // CALL PARENT FUNCTION: Send expense data to parent component
    onAddExpense({
      amount: parseFloat(amount), // Convert string to number
      category,                   // Current selected category
      date                       // Current selected date
    });

    // RESET FORM: Clear all fields after successful submission
    setAmount('');
    setCategory('Food');  // Reset to default category
    setDate('');
  };

  // COMPONENT RENDER
  return (
    // Main form container with styling
    <div className="form-container" style={{ 
      backgroundColor: '#fff5f5',  // Light red background for expenses
    }}>
      <h3 style={{ color: '#5a2d2d' }}>Add New Expense</h3>
      
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
              border: '1px solid #ffb3b3',  // Light red border
            }}
          />
        </div>
        
        {/* CATEGORY DROPDOWN */}
        <div className="form-row">
          <label>Category:</label>
          <select 
            value={category}        // Controlled select - value from state
            onChange={(e) => setCategory(e.target.value)} // Update state on change
            style={{ 
              border: '1px solid #ffb3b3',
            }}
          >
            {/* Map through categories array to create option elements */}
            {expenseCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
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
              border: '1px solid #ffb3b3',
            }}
          />
        </div>
        
        {/* SUBMIT BUTTON */}
        <button 
          type="submit"             // Triggers form submission
          className="submit-button"
          style={{ 
            backgroundColor: '#dc3545',  // Red color for expenses
          }}
        >
          Add Expense
        </button>
      </form>
    </div>
  )
}

export default Inputfileds