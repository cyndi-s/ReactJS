import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedEmail = process.env.REACT_APP_USERNAME;
    const storedPassword = process.env.REACT_APP_PASSWORD;

    if (email === storedEmail && password === storedPassword) {
      navigate('/welcome', { state: { username: email.split('@')[0] } });
    } else {
      setError('Username or Password is incorrect.');
    }
  };

  const clearError = () => {
    setError('');
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url('/bg-01.jpg')` }}>
      <form onSubmit={handleSubmit} noValidate>
        <h2>Sign In With</h2>
        <div className="social-buttons">
            <button type="button" className="facebook" onClick={() => window.location.href = 'https://facebook.com'}>
                <img src="/fb.jpg" alt="Facebook logo" className="facebook-logo" /> Facebook
            </button>
            <button type="button" className="google" onClick={() => window.location.href = 'https://gmail.com'}>
                <img src="/googleLogo.jpg" alt="Google logo" className="google-logo" /> Google
            </button>
        </div>
        {error && <p className="error">{error}</p>}
        <div className="input-group">
            <label htmlFor="email">Username</label>
            <input 
                type="email" 
                id="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                onFocus={clearError}
                required 
            />
            <div className="password-group">
                <label htmlFor="password">Password</label>
                <a href="/#" className="forgot-link">Forgot?</a>
            </div>
            <input 
                type="password" 
                id="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                onFocus={clearError}
                required 
                />
            </div>

            <button type="submit" className="sign-in">Sign In</button>
                <div class="signup-text">
                     Not a member? <a href="/#">Sign up now</a>
                 </div>
      </form>
    </div>
  );
};

export default LoginPage;
