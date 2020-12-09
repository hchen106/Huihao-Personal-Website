
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Start from './pages/Start';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      {/*<Switch>
        <Route path = '/about' exact component={about}/>
        <Route path = '/project' exact component={project}/>
        <Route path = '/resume' exact component={resume}/>
        <Route path = '/contact' exact component={contact}/>
      </Switch>*/
      }
        
        <div>
          <Start/>
          <About />
          <Project/>
          <Contact/>
      </div>
    </Router>
   
    </>
  );
}

export default App;
