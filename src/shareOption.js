import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes  } from '@fortawesome/free-solid-svg-icons';

const Share = ({ blogContent }) => {
    const handleShare = async () => {
        try {
          // Get the OG graph data from the blogContent
          const { url, urlToImage, title, description } = blogContent;
          
          // Compose the OG graph data in the format for clipboard copy
          const sharedContent = `${url}\n${urlToImage || ''}\n${title}\n${description}`;
          await navigator.clipboard.writeText(sharedContent);
    
          // Show a notification or alert that the content has been copied
          alert('Content copied to clipboard! You can now share it on social media.');
        } catch (error) {
          console.error('Failed to copy to clipboard:', error);
          alert('Oops! Failed to copy content to clipboard. Please try again.');
        }
      };

  return (
    <button className="share-button" onClick={handleShare}>
      <FontAwesomeIcon icon={faShareNodes} size='lg' style={{ color: '#000000' }} />
    </button>
  );
};

export default Share;
