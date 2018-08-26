import React, { Component } from 'react'
import { connect } from 'react-redux'
import Contact from './contact'
// import InputField from './input-field';
class ContactList extends Component {
    constructor(props){
        super(props)
        this.state = {
            filterText: '',
            favourites: []}
          }
     // update filterText in state when user types 
    filterUpdate(value) {
        console.log(value)
        let search = value.toLowerCase()
        var displayedContacts = this.props.contacts.filter((el) => {
                let searchValue = el.name.toLowerCase();
                if(searchValue ===search){
                    console.log(el.name)
                    const newSet = this.state.favourites.push(el.name)
                    this.setState({
                        favourites: newSet
                    })
                    
                }
            })
        
        this.setState({
            filterText: value
        });
        console.log(this.state.favourites)
        this.setState({
            favourites: []
        })
    }
    
  
    render(){
    const hasSearch = this.state.filterText.length > 0
    const { filterVal, filterUpdate } = this.props
    return( 
      <div>
    <header>
                <input
                    type='text'
                    ref='filterInput'
                    placeholder='Type to filter..'
                    // binding the input value to state
                    value={filterVal}
                    onChange={() => {
                        this.filterUpdate(this.refs.filterInput.value)
                    }}
                />
    </header>
    <main>
        <div className="holder">
            {/* <input type="text" className="search" onChange={this.searchHandler} /> */}
                
            <ul>
                {
                    this.props.contacts.map((el) => {
                        return <Contact key={el.id}
                            name={el.name}

                            phone={el.phoneNumber}
                        />
                    })
                }
            </ul>
            <ul>
                {
                    this.state.favourites.map((el)=>{
                        return(
                            <div>{el}</div>
                        )
                    })
                }
            </ul>
                
        </div>        
    </main>
    </div >
    )
  }
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    }
}
export default connect(mapStateToProps)(ContactList);