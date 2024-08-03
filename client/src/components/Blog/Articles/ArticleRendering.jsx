import React, { useState, useRef, useEffect } from 'react';
import Article1 from './Article1';
import Article2 from './Article2';
import Article3 from './Article3';
import 'bootstrap/dist/css/bootstrap.min.css';

const ArticleRendering = () => {
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const articleRef = useRef(null);

  const articles = [
    { id: 1, component: <Article1 /> },
    { id: 2, component: <Article2 /> },
    { id: 3, component: <Article3 /> }
  ];

  const scrollToTop = () => {
    if (articleRef.current) {
      articleRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [currentArticleIndex]);

  const handlePrevious = () => {
    setCurrentArticleIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentArticleIndex((prevIndex) => Math.min(prevIndex + 1, articles.length - 1));
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center">
        
      {/* Render selected article */}
      <div className="w-100" ref={articleRef}>
        {articles[currentArticleIndex].component}
      </div>

      {/* Pagination controls */}
      <div className="d-flex w3-padding-48 w3-margin-bottom justify-content-between">
        <button
          className="btn btn-outline-primary mx-1"
          style={{ paddingRight: '1rem', paddingLeft: '1rem' }}
          onClick={handlePrevious}
          disabled={currentArticleIndex === 0}
        >
          Previous
        </button>
        <button
          className="btn btn-outline-primary mx-1"
          onClick={handleNext}
          disabled={currentArticleIndex === articles.length - 1}
          style={{ paddingRight: '2.2rem', paddingLeft: '2.2rem' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ArticleRendering;
