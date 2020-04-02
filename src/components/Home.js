import React from 'react'
import data from '../data.json'

export default function Home() {
    return (
        <div className="homeWrapper">
        <div className="homeText">
            <h2>{data.Hello}</h2>
            <h1>{data.NameOne}</h1>
             <p>{data.Who}</p>
            <p></p>
        </div>
        </div>
    )
}
