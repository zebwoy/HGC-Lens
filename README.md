# HGC Lens - Price Checker & Navigation App

A modern, responsive web application built with React and TypeScript that provides price checking functionality and will include AR-powered navigation features.

## Features

### 🎯 Current Features
- **Price Checker Tab**: Advanced price calculator with dynamically dependent control forms
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations
- **Real-time Calculations**: Instant price updates as you modify form values
- **Price History**: Save and track calculated prices over time

### 🚧 Coming Soon
- **Direction Tab**: AR-powered navigation with real-time location tracking
- **Interactive 3D Maps**: Immersive navigation experience
- **AR Waypoint Visualization**: Visual navigation cues

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: CSS3 with responsive design
- **Build Tool**: Create React App
- **Package Manager**: npm

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd HGC-Lens
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── TabNavigation.tsx    # Tab navigation component
│   ├── TabNavigation.css    # Tab navigation styles
│   ├── PriceChecker.tsx     # Price calculator component
│   ├── PriceChecker.css     # Price calculator styles
│   ├── Direction.tsx        # Direction/AR component
│   └── Direction.css        # Direction component styles
├── App.tsx                  # Main application component
├── App.css                  # Main application styles
├── index.tsx                # Application entry point
└── index.css                # Global styles
```

## Price Checker Features

The Price Checker tab includes:

- **Basic Information**: Base price, quantity, and currency selection
- **Category & Quality**: Product categorization with quality multipliers
- **Additional Costs**: Discount, tax, and shipping calculations
- **Real-time Breakdown**: Live price calculation with detailed breakdown
- **Price History**: Save and track calculated prices

### Dynamic Dependencies

The form controls are interconnected:
- Quantity affects subtotal calculations
- Discount is applied to subtotal before tax
- Tax is calculated on the discounted amount
- Category and quality can affect pricing multipliers
- All changes update the final price in real-time

## Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured interface with side-by-side layouts
- **Tablet**: Adapted layouts with touch-friendly controls
- **Mobile**: Stacked layouts with optimized touch targets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Future Enhancements

- [ ] AR navigation implementation
- [ ] Real-time location services
- [ ] 3D map integration
- [ ] Offline functionality
- [ ] Advanced price analytics
- [ ] Multi-language support 