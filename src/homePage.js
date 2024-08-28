import React from 'react';
import { Link } from 'react-router-dom';
import background from './51188.jpg';

const HomePage = () => {
   const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  };
  return (
<div style={backgroundStyle}>
      <h1>مرحبا بكم في لعبة الألوان</h1>
      <Link to="/game">
      <button style={{ backgroundColor: '#5bca5f',
       border: 'none',
       color: 'white',
       padding: '10px 32px',
       textAlign: 'center',
       textDecoration: 'none',
       display: 'inline-block',
       fontSize: '16px',
       borderRadius: '8px',
       cursor: 'pointer',
       transition: 'background-color 0.3s ease' }}> ابدأ</button>
      </Link>
    </div>
  );
};

export default HomePage;