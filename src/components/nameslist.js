import React, { Component } from 'react'
import Name from '../components/name'
export default class Nameslist extends Component{
    render(){
        const input = this.props.filter.toLowerCase()
        const names = this.props.data.filter((person, i) => {
                return (
                    this.props.favourites.indexOf(person.id) === -1                    
                    && (!person.phoneNumber.toLowerCase().indexOf(input) || !person.name.toLowerCase().indexOf(input))
                )
            }).map((person, i) => {               
                return (
                    <Name
                        id={person.id}
                        key={i}
                        info={person}
                        handleFavourite={(id) => this.props.addFavourite(id)}
                    />
                )
            })
        return (
            <ul>
                {names}
            </ul>
        )
    }    
}
