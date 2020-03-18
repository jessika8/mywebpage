import React from 'react'

export default function Work(props) {
    return (
        <div className="workAll">
            <img src={props.img}></img>
            <p>{props.text}</p>
            {/* <button>{props.address}</button> */}
        </div>
    )
}
