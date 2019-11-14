import React, { Component } from 'react'
import './home.scss';
import Logo from '../../Assets/Icons/logo-background.svg'

export default class Home extends Component {

  

    render() {
        return (
            <div className="home-page-wrapper">
                <h1>WELOME TO EATS.</h1>
              <article>
                  <p>Eats. is an example of a simple <span style={{ color: "white"}}>React application</span>. It demonstrates routing in a Single Page Application (SPA), <span style={{color: "yellow"}}>Asynchornous data loading</span>, <span className="mobile-text">mobile-responsivness</span>, <span className="animate-text">transitions</span> and loading states for an enhanced user experience</p>
                  <p className="make-bold">This was my first time building a React application on top of a Headless Wordpress Content Managment System, and my first time serving a WP cms locally.</p>
                  <p>I decided to build and deploy the backend with Docker (My first time.) The decision was because I wanted to take this opportunity to learn about containers, and this challenge seemed like the perfect motivator to learn a relevent technology</p>              
                  <p>Feel free to click around and resize the screen to your hearts content. I really appreciate you taking the time to check this out. Additionally, if you would like to provide any feedback my ears are open.</p>
                  <strong>---Tayt</strong>
                <img src={Logo}/>
              </article>
            </div>
        )
    }
}
