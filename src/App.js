import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // Steps for Declaring my routes - where I'm declaring and specifying my router

const App = () => (
  <Router>
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/">About</Link>
      <Link to="/">Contact</Link>
      <Navigation />

      <Route exact path='/' component={Home} /> {/* Mount Home when '/' is requested.*/}
      <Route path='/about' component={About} /> {/* Mount About when '/about' is requested.*/}
      <Route path='/contact' component={Contact} />
      {/* What component do I want mounted, when a `foo` path is requested? */}
    </div>
  </Router>
);

export default App;


