import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom'; // Steps for Declaring my routes - where I'm declaring and specifying my router

const App = () => (
  <div className="App">
    <Navigation />
    <Route exact path='/' component={Home} /> {/* Mount Home when the root route '/' is requested.*/}
    <Route path='/about' component={About} /> {/* Mount About when '/about' is requested.*/}
    <Route path='/contact' component={Contact} />
    {/* What component do I want mounted, when a `foo` path is requested? */}
  </div>

);

export default App;


