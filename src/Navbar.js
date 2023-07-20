import React from 'react';
import { Link } from 'react-scroll'; 

const Navbar = () => {
    const handleHomeClick = (event) => {
        event.preventDefault();
        window.scrollTo(0, 0);
      };
      
      const handleBlogsClick = (event) => {
        event.preventDefault();
        const blogContentElement = document.getElementById('blog-content');
        if (blogContentElement) {
          blogContentElement.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <nav>
      <ul>
        <li><a href="#home" onClick={handleHomeClick}>Home</a></li>
        <li><a href="#about" onClick={handleBlogsClick}>Blogs</a></li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
