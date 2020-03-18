import React, { Component } from 'react'

export default class Footer extends Component {

    handleClick = (e) => {
        e.preventDefault();
        console.log('it is clicked');
        
    }

    render() {

        return (

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
        )
    }
}
