import React, { Component } from 'react'
import './loader.scss';

import Logo from '../../Assets/Icons/logo-blue.svg';

export default class Loader extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {

        
            return (
                    <div className={ this.props.loadingContent ? "logo-loader-wrapper show" : "logo-loader-wrapper hide"}>
                      <img className="logo-loader" src={Logo}/>
                    </div>
            )
        }
    }
