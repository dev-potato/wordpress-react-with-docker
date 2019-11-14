import React, { Component } from 'react'
import Logo from '../../Assets/Icons/logo.svg';
import NavBar from '../NavBar/navBar';
import Loader from '../Loader/loader'
import { Link, withRouter } from 'react-router-dom';
import './header.scss';

class Header extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            mobileMenuActive: false,
            width: 0
        }
    }


    updateDimensions = () => {
        this.setState({
            width: window.innerWidth,
            mobileMenuActive: false
        })
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.updateDimensions);

        this.setState({
            width: window.innerWidth
        })
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateDimensions);
    }

    handleMenuClick = () => {
        this.setState({
            mobileMenuActive: !this.state.mobileMenuActive
        }
      ) 
    }

    closeMenuOnClick = () => {
        if (window.location.href.includes('/blog/*') && !this.props.isLoading) {
            this.setState({
                mobileMenuActive: false,
            })
        } else {
            this.setState({
                mobileMenuActive: false,
            }, () => this.props.updateParent())
        }
    }

    render() {
        const { width, mobileMenuActive } = this.state;
        const {
            history,
            location,
            match,
            staticContext,
            to,
            onClick,
            ...rest
          } = this.props;
        return (
            <div>
            <Loader
              loadingContent={this.props.isLoading}
            />
            <div className="header-wrapper">
              <div 
                onClick={this.handleMenuClick} 
                className='mobile-menu-button'>
                        <span className={ !mobileMenuActive ? 'bar-1' : ' bar-1-x' }></span>
                        <span className={ !mobileMenuActive ? 'bar-2' : ' bar-2-x' }></span>
                        <span className={ !mobileMenuActive ? 'bar-3' : ' bar-3-x' }></span>
              </div>
              <div className="header">
                    <Link onClick={this.closeMenuOnClick} to="/"><img src={Logo}/></Link>
                    <h3>Eats.</h3>
              </div> 
                <div className={ width < 768 && !mobileMenuActive ? 'show-nav hide' :  'show-nav'}>
                  <NavBar
                    closeMenuOnClick={this.closeMenuOnClick}
                    menuOpen={this.state.mobileMenuActive} />
                </div>
            </div>
            </div>
        )
      }
    }

    export default withRouter(Header)