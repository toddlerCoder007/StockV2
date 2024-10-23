import React from 'react';

const LogIn = () => {
  return (
    <div>
      <h2>Log In</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;
