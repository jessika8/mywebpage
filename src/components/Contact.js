import React from 'react'

export default function Contact() {
    return (
        <div className="contactWrapper">
        <div className="contactDiv">

            <h1>This is my contact page</h1>
            <footer>
                <div className="footerDiv">
                <a onClick={ event => window.location.href='https://github.com/jessika8'}>
               <ion-icon className="icon" name="logo-github"></ion-icon>
               </a>
               <a onClick={ event => window.location.href='https://linkedin.com/in/maarja-roots-56898319a'}>
               <ion-icon className="icon" name="logo-linkedin"></ion-icon>
               </a>
               </div>
           </footer>
        </div>
        </div>
    )
}
