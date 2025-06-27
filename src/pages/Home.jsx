import React, { useState } from 'react';
import './Home.scss';

const Home = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="home">
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
              <button type="submit" className="subscription__button btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;