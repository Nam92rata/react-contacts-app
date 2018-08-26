import React, { Component } from 'react'
import { connect } from 'react-redux'
import inputFieldContact from '../actions/action_input_field'
import InputDetail from '../containers/input-detail'
import { bindActionCreators } from 'redux'

class InputField extends Component{
    constructor(props){
        super(props)
        this.state={contact:''}
    }
  
    handleChange=(e)=>{
        this.setState({contact:e.target.value})
    }
    render(){
        return(
            <div>
            <div>
                {this.props.inputContact}
                {/* {this.props.inputFieldContact} */}
                <input type="text"  onChange={(e) =>{
                    this.handleChange(e)
                } 
                } 
                />
            </div>
            <div >
                <InputDetail value={this.state.contact}/>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        inputContact: state.inputContact
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        inputFieldContact: inputFieldContact
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(InputField)
