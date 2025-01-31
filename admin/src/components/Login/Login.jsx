import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    console.log("Login Data:", { email, password });
    toast.success("Login Successful!");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Food Delivery Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="signup-text">
          Don't have an account? <a href="/signup" className="signup-link">Sign up</a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

