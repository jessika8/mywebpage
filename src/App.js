
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Work from './components/Work'
import Movie from './pictures/movie.png'
import MyBlog from './pictures/blogmy.png'
import Weather from './pictures/weather.png'
import ToDo from './pictures/todo.png'

export default class App extends Component {

  render() {

    return (

      <div>
        <Navbar />
        <About />
        <div className="workAppjsAll">
        <div className="workAppjs">
        <div className="workAppjsOne">
        <Work img={Movie} />
        <button onClick={ event => window.location.href='https://movie-search-search.herokuapp.com/'}>Movie/Person Search</button>
        </div>
        <div className="workAppjsOne">
        <Work img={MyBlog} />
        <button onClick={event => window.location.href='https://node-express-mongodb-blog.herokuapp.com/'}>MYBlog</button>
        </div>
        </div>
        <div className="workAppjs">
        <div className="workAppjsOne">
        <Work img={Weather} />
        <button onClick={event => window.location.href='https://new-weather-app-app.herokuapp.com/'}>Weather app</button>
        </div>
        <div className="workAppjsOne">
        <Work img={ToDo} />
        <button onClick={event => window.location.href='https://jessika8.github.io/ToDoList/'}>To-Do List</button>
        </div>
        </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

