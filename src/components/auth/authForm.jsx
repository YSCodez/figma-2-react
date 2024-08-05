import React, { useState } from 'react';
import '../auth/authForm.css';
import '../../Navbar';

export default function AuthForm() {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="Authbkg">
      <div className="container">
        <div className="leftText">
          <h1>
            We solve digital problems with an outstanding creative flare
          </h1>
          <p>
            We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
          </p>
        </div>
        <div className="formContainer">
          <div className="formNav">
            <button
              className={`navButton ${isSignup ? 'active' : ''}`}
              onClick={() => setIsSignup(true)}
            >
              Sign Up
            </button>
            <button
              className={`navButton ${!isSignup ? 'active' : ''}`}
              onClick={() => setIsSignup(false)}
            >
              Login
            </button>
          </div>
          <div className="formContent">
            {isSignup ? (
              <form>
                <input
                  placeholder="Your email"
                  className="inputField"
                  type="email"
                />
                <input
                  placeholder="Your password"
                  className="inputField"
                  type="password"
                />
                <input
                  placeholder="Confirm password"
                  className="inputField"
                  type="password"
                />
                <button className="submitButton">
                  Create an Account
                </button>
                <div className="divider">
                  <span>or</span>
                </div>
                <button className="socialButton">
                  Sign Up via Twitter
                </button>
              </form>
            ) : (
              <form>
                <input
                  placeholder="Your email"
                  className="inputField"
                  type="email"
                />
                <input
                  placeholder="Your password"
                  className="inputField"
                  type="password"
                />
                <button className="submitButton">
                  Login
                </button>
                <div className="divider">
                  <span>or</span>
                </div>
                <button className="socialButton">
                  Login via Twitter
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
