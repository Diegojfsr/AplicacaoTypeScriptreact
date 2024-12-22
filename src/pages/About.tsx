import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="container">
      <h1>Page: About</h1>
      <nav>
        <Link to="/" className="button">
          Home
        </Link>
      </nav>
    </div>
  );
};

export default About;
