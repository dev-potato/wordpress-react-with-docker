import React, { Component } from 'react'

export default class About extends Component {

    componentDidMount() {
        window.setTimeout( () => this.props.stopLoader(), 1200)
    }
    
    render() {
        return (
            <div>
                About Page Works!
            </div>
        )
    }
}
