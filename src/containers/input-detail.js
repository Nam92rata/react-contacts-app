import React, { Component } from 'react'
import { connect } from 'react-redux'
class InputDetail extends Component {
    render() {
        if (!this.props.value) {
            return (
                <div>Search a contact to see its details</div>
            );
        }
        return (
            <div>
                <div>New Contact: <h3>{this.props.value}</h3></div>
           
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        inputContact: state.inputContact
    }
}
export default connect(mapStateToProps)(InputDetail);