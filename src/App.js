import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import {
  BrowserRouter, Routes,
  Route,
  Link, useNavigate,
} from 'react-router-dom';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';



function App() {
  return (
    <div className="App">
      <Route>

      </Route>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
    </div>
  );
}

export default App;
