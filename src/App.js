
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import WorkComponent from './components/WorkComponent'
import Contact from './components/Contact'
import Home from './components/Home'


export default class App extends Component {

  render() {

    return (

      <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
        {/* <About /> */}
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Work' component={WorkComponent} />
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

