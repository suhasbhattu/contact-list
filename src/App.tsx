import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {

  const
    [btnDisabled, setBtnDisabled] = useState(true),
    username = useRef<HTMLInputElement>(null),
    password = useRef<HTMLInputElement>(null),
    
    onDataChange = () => {
      if (username.current && password.current) {
        if (username.current.value.length > 0 && password.current.value.length > 0) {
          setBtnDisabled(false);
        } else {
          setBtnDisabled(true);
        }
      }
    };

  return (
    <div className="App">
      <header className="App-header">
        <h5>Contact List</h5>
        <div id="login-form">
          <h3>Login</h3>
          <div className="username">
            <input type="text" name="username" id="username" placeholder="Username" ref={username} onChange={onDataChange} />
          </div>
          <div className="password">
            <input type="password" name="password" id="password" placeholder="Password" ref={password} onChange={onDataChange} />
          </div>
          <div className="submit">
            <Link to="/home">
              <button className="login" disabled={btnDisabled}>Login</button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
