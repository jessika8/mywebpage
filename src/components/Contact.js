import React from 'react'

export default function Contact() {
    return (
        <div className="contactWrapper">
        <div className="contactDiv">

            <h1>Contact me</h1>
            <footer>
                <div className="footerDiv">
                <a onClick={ event => window.open('https://github.com/jessika8', "_blank")}>
               <ion-icon className="icon" name="logo-github"></ion-icon>
               </a>
               <a onClick={ event => window.open('https://linkedin.com/in/maarja-roots-56898319a', "_blank")}>
               <ion-icon className="icon" name="logo-linkedin"></ion-icon>
               </a>
               </div>
           </footer>
        </div>
        </div>
    )
}
