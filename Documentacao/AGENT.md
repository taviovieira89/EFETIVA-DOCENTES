# AGENT.md - EFETIVA DOCENTES Simulado

## Build/Test Commands
- Open `index.html` directly in browser - no build system required
- No formal test framework - manual testing by running quiz through browser
- No lint/typecheck commands - vanilla HTML/CSS/JS project

## Architecture & Structure
- Single-page application: `index.html` contains entire quiz interface
- Vanilla JavaScript with HTML5, CSS3, and external CDNs (Tailwind CSS, Chart.js)
- All quiz data embedded in JavaScript array `quizData` within HTML file
- Three main screens: start, quiz dashboard, final results
- No backend/server required - runs entirely in browser

## Code Style & Conventions
- Portuguese language used throughout (PT-BR)
- CSS uses custom color variables (efetiva-blue: #0963B5, efetiva-teal: #26bebb)
- JavaScript uses camelCase naming
- Event listeners attached via addEventListener
- DOM manipulation using vanilla JavaScript methods
- HTML follows semantic structure with proper accessibility labels
- Responsive design using Tailwind utility classes

## Key Features
- Timer functionality (optional)
- Text highlighting system with color palette
- Question navigation with visual status indicators
- Progress tracking and performance analytics
