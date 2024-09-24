
# Travel Destinations Search App

A React and TypeScript application for searching travel destinations. Users can search for a destination and view detailed information about it, including nearby locations based on their current selection. The project was deployed to [Vercel](https://travel-destionations.vercel.app/).

## Project Overview

This application includes a search functionality with auto-suggestions for travel destinations, and a detailed view with nearby location recommendations. The app was built using the following technologies:

- **React (with TypeScript)**: To build a modular and type-safe user interface.
- **Material UI**: For building accessible and modern UI components efficiently.
- **Vercel**: For fast and easy deployment of the application.

## Features

- **Destination Search**: Users can search for destinations using an asynchronous combobox.
- **Destination Details**: Detailed information about the selected destination is displayed, including nearby locations.
- **Debounced Input**: The search input has a debounce to avoid excessive API calls.
- **Error Handling**: If the user searches for 'fail', an error message is displayed to simulate a failed API request.
- **Accessibility**: The UI is keyboard-accessible, and Material UI components ensure a good base for accessibility.
- **Loading Indicators**: Displays a loading spinner while fetching data from the API.

## Tech Stack and Choices

### 1. **React with TypeScript**
   - **Why**: React is widely used for building interactive UIs, and TypeScript helps ensure type safety, reducing potential bugs in production.
   - **Benefits**: React’s component-based architecture makes it easier to manage the application state and reusability, while TypeScript provides better tooling for detecting issues early in the development process.

### 2. **Material UI**
   - **Why**: Material UI offers pre-built, accessible components that follow modern design principles.
   - **Benefits**: It allowed for rapid UI development with built-in accessibility features, reducing the amount of custom styling needed.

### 3. **Debounce**
   - **Why**: To prevent excessive API calls when the user types in the search box.
   - **Benefits**: Using a debounce mechanism ensures that we only fetch data when the user has stopped typing, improving performance and reducing unnecessary API requests.

### 4. **Error Handling**
   - **Why**: Mimicking real-world API failure scenarios is essential for creating robust applications.
   - **Benefits**: It improves the user experience by providing clear feedback when something goes wrong.

### 5. **Vercel Deployment**
   - **Why**: Vercel provides seamless integration with GitHub and automated deployments.
   - **Benefits**: Fast build times, easy setup, and global CDN make Vercel ideal for deploying frontend applications.

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/your-username/travel-destinations.git
```

2. Navigate to the project folder:
```bash
cd travel-destinations
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```
5. Visit the app locally at http://localhost:3000.

## Deployment

The application is deployed on Vercel, and you can view it live at [Travel Destinations App](https://travel-destionations.vercel.app/).

