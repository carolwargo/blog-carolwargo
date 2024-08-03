import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/*Pages*/
import HomePage from "./pages/HomePage.jsx";
import BlogHomePage from "./pages/BlogHomePage.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

import BlogHeaderNav from "./components/Headers/BlogHeaderNav.jsx";
import BlogFooter from "./components/BlogFooter.jsx";
import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <BlogHeaderNav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogHomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BlogFooter />
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
