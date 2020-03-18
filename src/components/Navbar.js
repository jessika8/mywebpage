import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navBarWhole'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Work">Work</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </div>
    )
}
