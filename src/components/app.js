// This is a dumb component
import React, { Component } from 'react'
// import Chart from './chart';
import ContactList from '../containers/contact-list'
// import InputField from '../containers/input-field'

class App extends Component{
    render(){
        return(
        <div className="container">
        <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
            <h1>CONTACTS APPLICATION</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-4">
                {/* <InputField/> */}
            </div>
           
        </div>    
        <div className="row">
            
            <div className="col-sm-10">
                {/* <Chart /> */}
                <ContactList />
            </div>
        </div>
        </div>
        
        )
    }
}

export default App