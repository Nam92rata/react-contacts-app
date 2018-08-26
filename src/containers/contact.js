import React, { Component } from 'react'
// import { connect } from 'react-redux'
class Contact extends Component {
    render() {
        return (
            <li>
                <div>
                    <span>{this.props.name} : {this.props.phone}</span>
                
                </div>
            </li>
        )
    }
}
 export default Contact;