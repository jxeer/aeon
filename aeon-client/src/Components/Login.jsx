import React from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


export default props => {
  const { toggle, show, email, password, onChange, onSubmit, onClick } = props;
  const showLogin = !show && toggle;
  return (
      <div className="user-form-container">
        <form>
          <h2>Login</h2>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              onChange={onChange}
              name="email"
              id="email"
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={onChange}
              name="password"
              id="password"
              value={password}
            />
          </div>
          <button type="submit" onClick={onSubmit}>
            Sign In
          </button>
          <button type="submit" onClick={onClick}>
            Register
          </button>
        </form>
      </div>
  );
};
