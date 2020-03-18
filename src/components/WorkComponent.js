import React, { Component } from 'react'
import Work from './Work'
import Movie from '../pictures/movie.png'
import MyBlog from '../pictures/blogmy.png'
import Weather from '../pictures/weather.png'
import ToDo from '../pictures/todo.png'

export default class WorkComponent extends Component {

    render() {

        return (
                <div className="workAppjsAll">
        <div className="workAppjs">
        <div className="workAppjsOne">
        <Work img={Movie} text="A page where you can search info about movies or people who work in the industry. Created by using Node.js express, handlebars and CSS"/>
        <button onClick={ event => window.location.href='https://movie-search-search.herokuapp.com/'}>Movie/Person Search</button>
        </div>
        <div className="workAppjsOne">
        <Work img={MyBlog} text="A blog page built from scrach using Node.js express, handlebars, MongoDB for the database,  Bulma for the front end. "/>
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
        )
    }
}
