import React, { useState, useEffect } from 'react';
import Share from './shareOption';

const BlogContent = () => {
  const [newsData, setNewsData] = useState([]);

  const fetchNewsData = async () => {
    try {
      const apiKey = '0389d07c28f047f8b274f10dc32e8b4f'; 
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=In&apiKey=${apiKey}`
      );

      const data = await response.json();
      setNewsData(data.articles);
    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <div className="blog-content">
      {newsData.length === 0 ? (
        <div>Loading...</div>
      ) : (
      newsData.map((article) => (
        <div key={article.url} className="card">
          <h3>{article.title}</h3>
          <Share blogContent={article} />
          <p>{article.description}</p>
          {article.urlToImage ? (
            <img src={article.urlToImage} alt={article.title} />
          ) : (
            <img src="https://raw.githubusercontent.com/sahill01/icons/main/icons/Default-img.jpg" alt="Default" />
            )}

          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))
      )}
    </div>
  );
};

export default BlogContent;
