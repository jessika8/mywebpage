import React, { Component } from 'react'
import Work from './Work'
import Movie from '../pictures/movie.png'
import MyBlog from '../pictures/blogmy.png'
import Weather from '../pictures/weather.png'
import ToDo from '../pictures/todo.png'
import data from '../data.json'

 

export default class WorkComponent extends Component {

    render() {

        return (
                <div className="workAppjsAll">
        <div className="workAppjs">
        <div className="workAppjsOne">
        {/* window.location.href= */}
        <Work img={Movie} text={data.Work[0].movie}/>
        <button onClick={ event => window.open('https://movie-search-search.herokuapp.com/', "_blank")}>Movie/Person Search</button>
        </div>
        <div className="workAppjsOne">
        <Work img={MyBlog} text={data.Work[0].blog}/>
        <button onClick={event => window.open('https://node-express-mongodb-blog.herokuapp.com/', "_blank")}>MYBlog</button>
        </div>
        </div>
        <div className="workAppjs">
        <div className="workAppjsOne">
        <Work img={Weather} text={data.Work[0].weatherApp}/>
        <button onClick={event => window.open('https://new-weather-app-app.herokuapp.com/', "_blank")}>Weather app</button>
        </div>
        <div className="workAppjsOne">
        <Work img={ToDo} text={data.Work[0].toDo}/>
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
