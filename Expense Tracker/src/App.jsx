// Import necessary dependencies
import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards'
import Inputfileds from './Components/Inputfileds'
import IncomeInput from './Components/IncomeInput'

function App() {
  // STATE MANAGEMENT
  // Array to store all expense entries - each expense has: amount, category, date, and unique id
  const [expenses, setExpenses] = useState([]);
  
  // Array to store all income entries - each income has: amount, type, date, and unique id
  const [incomes, setIncomes] = useState([]);
  
  // UI state to control which section is visible
  const [activeSection, setActiveSection] = useState(''); // '', 'expenses', or 'income'

  // EXPENSE MANAGEMENT FUNCTIONS
  
  // Function to add a new expense to the expenses array
  const addExpense = (expenseData) => {
    // Create new expense with unique ID using current timestamp
    // Spread operator (...) copies existing expenses and adds the new one
    setExpenses([...expenses, { ...expenseData, id: Date.now() }]);
  };

  // Function to delete an expense by its unique ID
  const deleteExpense = (id) => {
    // Filter out the expense with matching ID, keeping all others
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // INCOME MANAGEMENT FUNCTIONS
  
  // Function to add a new income to the incomes array
  const addIncome = (incomeData) => {
    // Create new income with unique ID using current timestamp
    setIncomes([...incomes, { ...incomeData, id: Date.now() }]);
  };

  // Function to delete an income by its unique ID
  const deleteIncome = (id) => {
    // Filter out the income with matching ID, keeping all others
    setIncomes(incomes.filter(income => income.id !== id));
  };

  // CALCULATIONS
  // Calculate total expenses by summing all expense amounts
  // reduce() iterates through all expenses and adds up their amounts
  const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount || 0), 0);
  
  // Calculate total income by summing all income amounts
  const totalIncome = incomes.reduce((total, income) => total + parseFloat(income.amount || 0), 0);

  // CARD CLICK HANDLERS
  const handleExpenseCardClick = () => {
    setActiveSection(activeSection === 'expenses' ? '' : 'expenses');
  };

  const handleIncomeCardClick = () => {
    setActiveSection(activeSection === 'income' ? '' : 'income');
  };

  // MAIN COMPONENT RENDER
  return <div className="app-container" style ={{justifyContent:'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    {/* App Title and Description */}
    <h1>Expense Tracker</h1>
    <h3>Track your Expenses without any hassle</h3>
    
    {/* Cards Component - Shows Income, Expenses, and Balance */}
    {/* Pass income and calculated totalExpenses as props, along with click handlers */}
    <Cards 
      income={totalIncome} 
      expenses={totalExpenses} 
      onIncomeClick={handleIncomeCardClick}
      onExpenseClick={handleExpenseCardClick}
      activeSection={activeSection}
    />
    
    {/* CONDITIONAL RENDERING BASED ON ACTIVE SECTION */}
    
    {/* Show Income Input when income card is clicked */}
    {activeSection === 'income' && (
      <div style={{ marginTop: '2rem' }}>
        <IncomeInput onAddIncome={addIncome} />
        
        {/* INCOME HISTORY SECTION */}
        <div className="history-section">
          <h3>Income History</h3>
          
          {/* Conditional rendering - show message if no income, otherwise show list */}
          {incomes.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>No income added yet.</p>
          ) : (
            // Map through incomes array to create individual income items
            incomes.map(income => (
              <div key={income.id} className="transaction-item">
                {/* Income Details */}
                <div className="transaction-details">
                  {/* Display amount with 2 decimal places */}
                  <div className="transaction-amount" style={{ color: '#2d5a2d' }}>
                    +${income.amount.toFixed(2)}
                  </div>
                  <div className="transaction-category">
                    {income.type}
                  </div>
                  {/* Format date for better readability */}
                  <div className="transaction-date">
                    {new Date(income.date).toLocaleDateString()}
                  </div>
                </div>
                
                {/* Delete Button */}
                <button 
                  onClick={() => deleteIncome(income.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    )}
    
    {/* Show Expense Input when expense card is clicked */}
    {activeSection === 'expenses' && (
      <div style={{ marginTop: '2rem' }}>
        {/* Input Component - Form to add new expenses */}
        {/* Pass addExpense function as prop so child component can add expenses */}
        <Inputfileds onAddExpense={addExpense} />
        
        {/* EXPENSE HISTORY SECTION */}
        <div className="history-section">
          <h3>Expense History</h3>
          
          {/* Conditional rendering - show message if no expenses, otherwise show list */}
          {expenses.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>No expenses added yet.</p>
          ) : (
            // Map through expenses array to create individual expense items
            expenses.map(expense => (
              <div key={expense.id} className="transaction-item">
                {/* Expense Details */}
                <div className="transaction-details">
                  {/* Display amount with 2 decimal places */}
                  <div className="transaction-amount" style={{ color: '#5a2d2d' }}>
                    -${expense.amount.toFixed(2)}
                  </div>
                  <div className="transaction-category">
                    {expense.category}
                  </div>
                  {/* Format date for better readability */}
                  <div className="transaction-date">
                    {new Date(expense.date).toLocaleDateString()}
                  </div>
                </div>
                
                {/* Delete Button */}
                <button 
                  onClick={() => deleteExpense(expense.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    )}
  </div>
}

export default App;
