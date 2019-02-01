import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  pets = () => {
    return this.props.pets.map((pet, ind) => <Pet pet={pet} key={ind} onAdoptPet={this.props.onAdoptPet}/> )
  }
   
  render() {
    return (<div className="ui cards">{this.pets()}</div>)
  }
}

export default PetBrowser
