import React, { Component } from 'react'

export default class LunchMenu extends Component {

    componentDidMount() {
        window.setTimeout( () => this.props.stopLoader(), 1200)
    }
    
    render() {
        return (
            <div>
                Lunch Menu works!
            </div>
        )
    }
}
