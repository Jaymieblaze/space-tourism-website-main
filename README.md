# Space Tourism Multi-Page Website

This is a solution to the **Space tourism multi-page website challenge on Frontend Mentor**. This fully responsive website provides an immersive experience for users interested in space travel, featuring multiple pages with unique layouts and interactive elements.

**Live Site URL**: [Space Tourism Website](https://space-tourism-website-main-livid.vercel.app/)

## Features
* **Fully Responsive Design:** Optimized layouts for mobile, tablet, and desktop screens.
* **Multi-Page Navigation:** Four distinct pages (Home, Destination, Crew, Technology) managed with client-side routing.
* **Interactive Elements:**
  * Tabbed navigation for destinations.
  * Dot and numbered indicators for crew and technology sliders.
  * CSS-animated hover states for links and buttons, including a unique expanding effect on the "Explore" button.
* **Mobile-Friendly Swipe Gestures:** Users can swipe left/right (or up/down on the Technology page) to navigate through content on touch devices.

## Technologies Used
This project was built using a modern frontend stack:
* <u>React</u> - A JavaScript library for building user interfaces.
* <u>TypeScript</u> - For static type-checking, improving code quality and maintainability.
* <u>Vite</u> - A next-generation frontend tooling that provides an extremely fast development experience.
* <u>Tailwind CSS</u> - A utility-first CSS framework for rapid UI development.
  * Utilizes the modern CSS-first configuration with @theme for custom fonts.
* <u>React Router</u> - For declarative client-side routing.
* <u>React Swipeable</u> - A lightweight library for adding touch swipe gestures.

## Setup and Local Development
To get a local copy up and running, follow these simple steps.

### Prerequisites
* Node.js (v18.x or later)
* npm

### Installation
1. Clone the repository:
```
git clone https://github.com/jaymieblaze/space-tourism-website.git
```

2. Navigate to the project directory:
```
cd space-tourism-website
```

3. Install NPM packages:
```
npm install
```

4. Start the development server:
```
npm run dev
```

The application will be available at ```http://localhost:5173.```

## Project Structure

The project follows a component-based architecture to keep the code organized and reusable.
```
/src
|-- /assets         # Static assets like images and fonts
|-- /components     # Reusable components (Header, Layout)
|-- /hooks          # Custom React hooks (useWindowSize)
|-- /pages          # Page-level components (Home, Destination, etc.)
|-- data.json       # JSON file containing all site content
|-- App.tsx         # Main application component with routing setup
|-- main.tsx        # Entry point of the React application
|-- index.css       # Global styles and Tailwind CSS configuration
```

## Key Learnings
Building this project was a great opportunity to practice and solidify several important frontend development concepts:
* Advanced Responsive Design: Implementing complex, distinct layouts for three different screen sizes using Tailwind CSS's responsive prefixes.
* Component-Based Architecture: Breaking down the UI into logical, reusable components ```(Header, Layout)``` and pages.
* State Management with Hooks: Using the ```useState``` hook to manage the active state for tabs, sliders, and the mobile menu.
* Client-Side Routing: Creating a seamless multi-page experience using react-router-dom.
* User Experience Enhancements: Adding touch-based swipe gestures to improve usability on mobile devices.
* Custom Hooks: Creating a useWindowSize hook to apply conditional logic based on screen dimensions, making components more intelligent.

## Acknowledgments
* Design provided by <u>Frontend Mentor</u>.
* Fonts sourced from <u>Google Fonts</u>.