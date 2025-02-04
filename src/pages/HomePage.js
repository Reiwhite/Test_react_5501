// Homepage.js
import React from 'react';

function Homepage() {
  return (
    <div className="homepage">
        <img src="https://img1.picmix.com/output/stamp/thumb/6/9/7/8/2588796_cb6f0.gif" alt="logo" />
        <p>
          Kuru Kuru 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kururing
        </a>
      <h1>Welcome to the Homepage</h1>
      <p>This is the homepage of our website. Here, you can find an overview of our app and all the great features we offer!</p>
      
      <section className="features">
        <h2>Our Features</h2>
        <ul>
          <li>Feature 1: Easy Navigation</li>
          <li>Feature 2: User-friendly Interface</li>
          <li>Feature 3: Fast and Reliable</li>
        </ul>
      </section>
    </div>
  );
}

export default Homepage;
