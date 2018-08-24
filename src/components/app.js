import React, { Component } from 'react'
import ContactList from '../containers/contact_list'
import ContactDetail from '../containers/contact-detail'

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
                <ContactList />
            </div>
            <div className="col-sm-4">
                <ContactDetail />
            </div>
        </div>
                

        </div>
        
        )
    }
}

export default App