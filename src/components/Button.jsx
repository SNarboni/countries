import React, { Component } from 'react'

export default class Button extends Component {



    render() {
        return (
            <div>
                <input type="text" onChange={this.props.onChange}/><br/>
                <button className="btn btn-primary mr-2" onClick={this.props.onClick}>Search</button>
            </div>
        )
    }
}
