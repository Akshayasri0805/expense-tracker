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

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to GitHub Pages
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://Akshayasri0805.github.io/expense-tracker",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to [Netlify](https://netlify.com)
3. Your app is live!

### Deploy to Vercel (Recommended)
1. Install Vercel CLI: 
```bash
npm i -g vercel
```
2. Deploy:
```bash
vercel
```
3. Follow the prompts and your app will be live!

### Deploy to GitHub Pages
1. Install gh-pages:

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

## 🐛 Known Issues

- Local storage not implemented (data resets on page refresh)
- No data export/import functionality
- No expense categories editing

## 🚀 Future Enhancements

- [ ] **Data Persistence**: Local storage or database integration
- [ ] **Export/Import**: CSV or JSON data export
- [ ] **Charts & Analytics**: Visual spending patterns
- [ ] **Budget Goals**: Set and track spending limits
- [ ] **Categories Management**: Custom expense categories
- [ ] **Search & Filter**: Find specific transactions
- [ ] **Dark Mode**: Theme switching capability
- [ ] **Multi-currency**: Support for different currencies

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Akshaya Sri Arasada**
- GitHub: [@Akshayasri0805](https://github.com/Akshayasri0805)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vite** for lightning-fast development experience
- **MDN Web Docs** for comprehensive documentation
- **GitHub** for hosting and version control

## 📱 Screenshots

### Desktop View
![Desktop View](https://via.placeholder.com/800x500/34495e/ecf0f1?text=Desktop+View)

### Mobile View
![Mobile View](https://via.placeholder.com/400x600/2c3e50/ecf0f1?text=Mobile+View)

### Tablet View
![Tablet View](https://via.placeholder.com/600x400/27ae60/ecf0f1?text=Tablet+View)

---

⭐ **Star this repo if you found it helpful!** ⭐

**Happy budgeting! 💰✨**
