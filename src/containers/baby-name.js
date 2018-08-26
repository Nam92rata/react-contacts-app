import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import Contact from './contact'
import NamesList from '../components/nameslist'
import ShortList from '../components/shortlist'
import Search from '../components/search'

class App1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            favourites: []
        }
    }

    // update filterText in state when user types 
    filterUpdate(value) {
        this.setState({
            filterText: value
        });
    }

    // add clicked name ID to the favourites array
    addFavourite(id) {
        const newSet = this.state.favourites.concat([id])
        this.setState({
            favourites: newSet
        })
    }

    // remove ID from the favourites array
    deleteFavourite(id) {
        const { favourites } = this.state
        const newList = [
            ...favourites.slice(0, id),
            ...favourites.slice(id + 1)
        ]
        this.setState({
            favourites: newList
        })
    }

    render() {
        const hasSearch = this.state.filterText.length > 0
        return (
            <div class="container">
                <div class="row">
                    <br />
                </div>
                <div class="row">
                    <div class="col-md-6 col-offset-3">
                    <Search
                        className="searchbar"
                        filterVal={this.state.filterText}
                        filterUpdate={this.filterUpdate.bind(this)}
                    />
                    </div>
                  
                    <div class="row">
                    <br/>
                    <br/>
                    </div>
                </div>
                
                    <div class="row">
                        <div class="col-md-6"><NamesList
                            className="nameslist"
                            data={this.props.babyName}
                            filter={this.state.filterText}
                            favourites={this.state.favourites}
                            addFavourite={this.addFavourite.bind(this)}
                        /></div>
                        {/* <div class="col-md-6"><ShortList
                            data={this.props.babyName}
                            favourites={this.state.favourites}
                            deleteFavourite={this.deleteFavourite.bind(this)}
                        /></div> */}
                    </div>
                <div class="row">                 
                        <div class="col-md-6">
                    {hasSearch &&
                        <button
                            onClick={this.filterUpdate.bind(this, '')}>
                            Clear Search
            </button>
                    }
                    </div>
                </div>

            </div>
        )
    }
}




function mapStateToProps(state) {
    return {
        babyName: state.contacts
    }
}
export default connect(mapStateToProps)(App1);

