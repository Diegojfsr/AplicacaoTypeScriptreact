import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1>Page: Home</h1>
      <nav>
        <Link to="/about" className="button">
          About
        </Link>
      </nav>
    </div>
  );
};

export default Home;
