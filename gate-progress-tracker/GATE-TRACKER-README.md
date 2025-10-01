# GATE 2026 Progress Tracker - Next.js Application

A comprehensive progress tracking application for GATE 2026 preparation, converted from HTML to Next.js with React components.

## Features

### 📋 Paper Selection

- Choose 1 or 2 GATE papers from 30 available options
- Intelligent validation for allowed paper combinations
- GA (General Aptitude) is automatically included

### 📊 Progress Tracking

- Visual progress charts using Chart.js
- Real-time completion percentage calculation
- Color-coded progress indicators for different papers

### 📚 Topic Management

- Complete syllabus coverage for all GATE papers
- Track status: Not Started, In Progress, Completed
- Set difficulty levels: Easy, Moderate, Hard
- Add personal notes for each topic
- Common topics across papers are highlighted

### 📝 Task Management

- Add daily study tasks with dates
- Track completion status for each task
- Add detailed notes and observations
- View complete task history

### 🌓 Dark Mode

- Toggle between light and dark themes
- Persistent theme preference
- Enhanced readability in low-light conditions

### 💾 Data Persistence

- All data stored in browser's localStorage
- Automatic save on every change
- Complete reset functionality with confirmation

## Technology Stack

- **Framework**: Next.js 15.5.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Charts**: Chart.js with react-chartjs-2
- **State Management**: React Hooks
- **Data Storage**: Browser localStorage

## Project Structure

```
app/
├── components/
│   ├── PaperSelectionModal.tsx    # Paper selection interface
│   ├── ProgressChart.tsx          # Chart.js doughnut charts
│   ├── ProgressSummary.tsx        # Progress overview cards
│   ├── TaskManagement.tsx         # Task input and history
│   └── TopicManagement.tsx        # Topic status tracking
├── data/
│   └── syllabus.ts               # GATE syllabus data
├── hooks/
│   └── useLocalStorage.ts        # Custom localStorage hook
├── globals.css                   # Global styles and dark mode
├── layout.tsx                    # Root layout
└── page.tsx                      # Main application component
```

## Key Components

### PaperSelectionModal

- Modal interface for selecting GATE papers
- Validates paper combinations against GATE rules
- Initializes topic tracking for selected papers

### ProgressSummary

- Displays completion percentages
- Interactive doughnut charts for visual progress
- Color-coded cards for different paper types

### TopicManagement

- Comprehensive topic listing for each paper
- Inline editing for status, difficulty, and notes
- Identifies common topics across multiple papers

### TaskManagement

- Daily task input form
- Complete task history with sorting
- Task deletion functionality

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd gate-progress-tracker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Usage Guide

### First Time Setup

1. Select your GATE paper(s) from the modal
2. Choose 1 paper + GA or 2 papers + GA
3. System validates allowed combinations

### Daily Usage

1. **Update Topic Status**: Mark topics as you progress through them
2. **Add Tasks**: Record daily study activities with notes
3. **Monitor Progress**: Check completion percentages and charts
4. **Adjust Difficulty**: Update topic difficulty as you understand them better

### Data Management

- All changes are automatically saved to localStorage
- Use "Reset All Data" to start fresh (requires double confirmation)
- Toggle dark mode for comfortable studying

## Original HTML Features Preserved

All functionality from the original HTML file has been successfully converted:

✅ **Paper Selection**: All 30 GATE papers with proper combination validation  
✅ **Progress Tracking**: Real-time charts and percentage calculations  
✅ **Topic Management**: Status tracking, difficulty levels, and notes  
✅ **Task Management**: Daily tasks with history and deletion  
✅ **Dark Mode**: Complete theme switching with persistence  
✅ **Data Storage**: localStorage integration with SSR compatibility  
✅ **Responsive Design**: Mobile-friendly layouts

## Improvements Over Original HTML

### Code Organization

- **Modular Components**: Separated into reusable React components
- **Type Safety**: Full TypeScript implementation
- **Custom Hooks**: useLocalStorage for consistent data management
- **Clean Architecture**: Separation of concerns with data, hooks, and components

### Enhanced Features

- **Better Performance**: React's optimized rendering
- **SSR Compatibility**: Proper handling of localStorage in Next.js
- **Improved Accessibility**: Better semantic HTML and ARIA support
- **Enhanced Styling**: Tailwind CSS for consistent design system

### Developer Experience

- **Hot Reload**: Instant updates during development
- **TypeScript**: Compile-time error checking
- **ESLint**: Code quality enforcement
- **Modern Build System**: Optimized production builds

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

**Note**: localStorage is required for data persistence.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

**Happy GATE 2026 Preparation! 🎯**
