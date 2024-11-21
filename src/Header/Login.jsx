import React, { useState } from 'react';

const LoginPage = () => {
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState(''); 
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value); 
  };

  const handleMobileChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ userType,username,  mobileNumber, email });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Login</h2>
        <label>
          Are you
          <div className="radio-container">
            <label className="radio-label">
              <input
                type="radio"
                value="Buyer/Owner"
                checked={userType === 'Buyer/Owner'}
                onChange={handleUserTypeChange}
              />
              Buyer/Owner
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value="Agent/Builder"
                checked={userType === 'Agent/Builder'}
                onChange={handleUserTypeChange}
              />
              Agent/Builder
            </label>
          </div>
        </label>

        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
            className="input"
            required
          />
        </label>

        {userType && (
          <label>
            Mobile Number:
            <input
              type="tel"
              value={mobileNumber}
              onChange={handleMobileChange}
              placeholder="Enter your mobile number"
              className="input"
              required
            />
          </label>
        )}

        {userType === 'Agent/Builder' && (
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email address"
              className="input"
              required
            />
          </label>
        )}

        <button
          type="submit"
          className="button"
          onMouseOver={(e) => (e.target.style.backgroundColor = '#a12a2a')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#c13030')}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
