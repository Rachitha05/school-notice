import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AddNotice from './components/AddNotice';
import EditNotice from './components/EditNotice';
import ViewNotice from './components/ViewNotice';
import Footer from './components/Footer';
import './components/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <h1 className="navbar-title">🏫 School Notice Board</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Notice</Link></li>
            <li><Link to="/view">View Notices</Link></li>
          </ul>
        </nav>

        {/* Page Routes */}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddNotice />} />
            <Route path="/edit/:id" element={<EditNotice />} />
            <Route path="/view" element={<ViewNotice />} />
          </Routes>
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
