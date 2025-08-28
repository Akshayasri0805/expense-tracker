# 💰 Expense Tracker

A modern, responsive web application for tracking personal income and expenses built with React and Vite.

![Expense Tracker Preview](https://via.placeholder.com/800x400/2c3e50/ecf0f1?text=Expense+Tracker+App)

## ✨ Features

### 📊 **Financial Overview**
- **Income Card**: Track all income sources (Fixed & Additional)
- **Expenses Card**: Monitor spending across multiple categories
- **Balance Card**: Real-time calculation with visual indicators
- **Dynamic Colors**: Green for positive balance, yellow for deficit

### 💳 **Income Management**
- Add Fixed Income (salary, regular payments)
- Add Additional Income (bonuses, freelance, etc.)
- Date picker with calendar interface
- Complete income history with delete functionality

### 💸 **Expense Tracking**
- 8 predefined categories: Food, Transportation, Entertainment, Shopping, Bills, Healthcare, Education, Other
- Amount validation and error handling
- Date selection for accurate record keeping
- Detailed expense history with individual deletion

### 🎯 **Interactive UI**
- **Click-to-Reveal**: Click Income/Expense cards to show management sections
- **Real-time Updates**: All calculations update instantly
- **Form Validation**: Prevents invalid entries
- **Smooth Animations**: Enhanced user experience with transitions

### 📱 **Mobile Responsive**
- **Desktop**: Horizontal card layout with side-by-side forms
- **Tablet**: Optimized spacing and flexible layouts
- **Mobile**: Vertical stacking with touch-friendly buttons
- **Small Screens**: Compact design for devices ≤320px

## 🚀 Live Demo

🌐 **[View Live App](https://expense-tracker-akshayasri0805.vercel.app)**

## 🛠️ Built With

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with Flexbox
- **State Management**: React Hooks (useState)
- **Date Handling**: HTML5 Date Input
- **Form Validation**: Custom JavaScript validation

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🏗️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Akshayasri0805/expense-tracker.git
cd expense-tracker
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Start Development Server
```bash
npm run dev
# or
yarn dev
```

### 4. Open in Browser
Navigate to `http://localhost:5173` to view the application.

## 📁 Project Structure

```
expense-tracker/
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── Components/
│   │   ├── Cards.jsx           # Financial overview cards
│   │   ├── IncomeInput.jsx     # Income entry form
│   │   └── Inputfileds.jsx     # Expense entry form
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Responsive styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── package.json
├── vite.config.js
└── README.md
```

## 💡 How to Use

### Adding Income
1. Click on the **Income Card**
2. Select income type (Fixed Income or Additional Income)
3. Enter amount and date
4. Click **Add Income**

### Adding Expenses
1. Click on the **Expenses Card**
2. Enter expense amount
3. Select category from dropdown
4. Choose date using calendar picker
5. Click **Add Expense**

### Managing Records
- View all transactions in the history section below forms
- Delete individual entries using the **Delete** button
- Watch real-time balance updates as you add/remove transactions

## 🎨 Design Features

### Color Scheme
- **Income**: Green theme (#e0ffe0, #2d5a2d)
- **Expenses**: Red theme (#ffe0e0, #5a2d2d)
- **Balance**: Blue/Yellow based on positive/negative
- **UI Elements**: Modern gray palette

### Responsive Breakpoints
- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: 321px - 480px
- **Small Mobile**: ≤ 320px

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

