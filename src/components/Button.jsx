import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary mr-2" onClick={this.props.onClick}>{this.props.children}</button>
            </div>
        )
    }
}
