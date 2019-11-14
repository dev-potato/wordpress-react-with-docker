import React, { Component } from 'react'

export default class DinnerMenu extends Component {

    componentDidMount() {
        window.setTimeout( () => this.props.stopLoader(), 1200)
    }

    render() {
        return (
            <div className="dinner-wrapper">
                Dinner Menu Works!
            </div>
        )
    }
}
