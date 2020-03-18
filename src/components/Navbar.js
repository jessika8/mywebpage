import React from 'react'

export default function Navbar() {
    return (
        <div className='navBarWhole'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/work">Work</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    )
}