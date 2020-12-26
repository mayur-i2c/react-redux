import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div style={{
      background: "linear-gradient(to right, #8e2de2, #4a00e0)"
      }} className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  );
};

export default Banner;
