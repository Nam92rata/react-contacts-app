import React, { Component } from 'react'
import Name from '../components/name'
export default class Shortlist extends Component {
render() {
    const hasFavourites = (this.props.favourites.length > 0)
    const favList = this.props.favourites.map((fav, i) => {
        return (
            <Name
                id={i}
                key={i}
                info={this.props.data[fav]}
                handleFavourite={(id) => this.props.deleteFavourite(id)}
            />
        )
    })
    return (
        <div className="favourites">
            <h4>
                {hasFavourites
                    ? 'Your Shortlist'
                    : 'Click on a name to shortlist it..'
                }
            </h4>
            <ul>
                {favList}
            </ul>
            {hasFavourites && <hr />}
        </div>
    )
}
}