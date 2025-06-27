import React, { useState } from 'react';
import './App.scss';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
    // Add your subscription logic here
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="../src/assets/images/acerite.png" alt="Acerite" className="logo-image" />
          </div>
        </div>
      </header>
      
      <main className="main">
        <div className="container">
          <div className="hero">
            <h1 className="hero__title">Something Intelligent Is Taking Shape.</h1>
            <p className="hero__text">
              We're building quietly. Launching boldly. Acerite is not just another startup — it's a spark of something different, something smarter.
            </p>
            <div className="subscription">
              <p className="subscription__label">Want to be one of the first to know?</p>
              <form className="subscription__form" onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  className="subscription__input" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="subscription__button">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      {/* <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Acerite. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
