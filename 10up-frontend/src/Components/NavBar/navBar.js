import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export default class NavBar extends Component {
 constructor(props) {
     super(props);

     this.handleMouseHover = this.handleMouseHover.bind(this);
 }
    state =  {
        hovering: false,
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState() {
        return {
            hovering: !this.state.hovering
        }
    }


    render() {
        const { hovering } = this.state;
        
        return (
            <div className="navbar">
               <nav>
                  <div className={ hovering ? "menu-dropdown expand" : "menu-dropdown collapse"}
                      onMouseEnter={this.handleMouseHover}
                      onMouseLeave={this.handleMouseHover}>
                       Lunch/Dinner Menu
                      <div className={ hovering ? "link-reveal" : "link-reveal hide"}>
                          <Link onClick={this.props.closeMenuOnClick} to="/menu/lunch">Lunch</Link>
                          <Link onClick={this.props.closeMenuOnClick} to="/menu/dinner">Dinner</Link>
                      </div>
                  </div>
                  <Link onClick={this.props.closeMenuOnClick} to="/blog">Blog</Link>
                  <Link onClick={this.props.closeMenuOnClick} to="/about">About Us</Link>
                  <Link onClick={this.props.closeMenuOnClick} to="/contact">Contact</Link>
               </nav>
            </div>
        )
    }
}