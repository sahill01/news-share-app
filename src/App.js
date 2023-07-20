import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BlogContent from './blogContent';
import "./App.css"


const ShareOption = () => {

  const blogContent = {
    title: 'BlogSphere: Connect and Share News Blogs',
  };

  return (
      <div>
        <Navbar />
        <div className='container'>
          <h1>{blogContent.title}</h1>
          <div className="blog-container" id="blog-content">
            <BlogContent />
          </div>
        </div>
        <Footer id="contact" />
      </div>
  );
};

export default ShareOption;
