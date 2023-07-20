import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BlogContent from './blogContent';
import "./App.css"


const ShareOption = () => {
  const handleShare = async () => {
    try {
      // Copy the URL, image, meta title, and description to the clipboard
      const sharedContent = `${window.location.href}\n${blogContent.imageUrl}\n${blogContent.title}\n${blogContent.description}`;
      await navigator.clipboard.writeText(sharedContent);
  
      // Show a notification or alert that the content has been copied
      alert('Content copied to clipboard! You can now share it on social media.');
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      alert('Oops! Failed to copy content to clipboard. Please try again.');
    }
  };
  

  // Sample blog content
  const blogContent = {
    title: 'BlogSphere: Connect and Share News Blogs',
  };

  return (
      <div>
        <Navbar />
        <div className='container'>
          <h1>{blogContent.title}</h1>
          {/* <div className="blog-content">
          <p>This is a sample blog post content.</p>
          <img src="https://example.com/sample-image.jpg" alt="Sample Blog Post" />

          <button onClick={handleShare}>Share</button>
          </div> */}
          <div className="blog-container" id="blog-content">
            <BlogContent />
          </div>
        </div>
        <Footer id="contact" />
      </div>
  );
};

export default ShareOption;
