import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/*Pages*/
import HomePage from "./pages/HomePage.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/blog-carolwargo">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

// Create a component for handling not found routes
function NotFound() {
  console.error("Page not found!"); // Log error to console
  return <h1>404 - Not Found</h1>;
}

export default App;
