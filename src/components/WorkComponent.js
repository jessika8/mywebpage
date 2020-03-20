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
        {/* window.location.href= */}
        <Work img={Movie} text="A page where you can search info about movies or people who work in the industry. Created by using Node.js express, handlebars and CSS"/>
        <button onClick={ event => window.open('https://movie-search-search.herokuapp.com/', "_blank")}>Movie/Person Search</button>
        </div>
        <div className="workAppjsOne">
        <Work img={MyBlog} text="A blog page built from scrach using Node.js express, handlebars, MongoDB for the database,  Bulma for the front end. "/>
        <button onClick={event => window.open('https://node-express-mongodb-blog.herokuapp.com/', "_blank")}>MYBlog</button>
        </div>
        </div>
        <div className="workAppjs">
        <div className="workAppjsOne">
        <Work img={Weather} />
        <button onClick={event => window.open('https://new-weather-app-app.herokuapp.com/', "_blank")}>Weather app</button>
        </div>
        <div className="workAppjsOne">
        <Work img={ToDo} />
        <button onClick={event => window.open('https://jessika8.github.io/ToDoList/', "_blank")}>To-Do List</button>
        </div>
        </div>
        
        <div className="workCompGit">
        <h2>My GitHub</h2>
        <a onClick={ event => window.open('https://github.com/jessika8', "_blank")}>
               <ion-icon className="icon" name="logo-github"></ion-icon>
               </a>
               </div>
        </div>
        )
    }
}
