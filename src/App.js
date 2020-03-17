import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

class App extends Component {


  render() {

    return (

      <div className="App">
        <BrowserRouter>
          <NavBar home='/'/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />


          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
