import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Volunteer from './pages/Volunteer';
import Health from './pages/Health';
import Sports from './pages/Sports';
import Character from './pages/Character';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/volunteer" component={Volunteer} />
        <Route path="/contact" component={Contact} />
        <Route path="/sports" component={Sports} />
        <Route path="/health" component={Health} />
        <Route path="/character" component={Character} />
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
