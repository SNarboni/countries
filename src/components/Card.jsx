import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
                <div className="card mt-5">
                    <img src={this.props.flag} className="card-img-top"/>
                    <div className="card-body">
                        <div className="text-left">
                            <h3 className="card-title">Country : {this.props.name}</h3>
                        </div>
                        <div className="text-left">
                            <h5 className="card-title">Capital : {this.props.capital}</h5>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush text-left">
                        <li className="list-group-item">Région : {this.props.region}</li>
                        <li className="list-group-item">Population : {this.props.population}</li>
                    </ul>
                </div>
        )
    }
}
