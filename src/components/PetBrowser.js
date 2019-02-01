import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  //onAdoptPet
  render() {
    let cutePets = this.props.pets.map((pet) => <Pet key={pet.id} petData={pet} onAdoptPet={this.props.onAdoptPet} />)
    return <div className="ui cards">{cutePets}</div>
  }
}

export default PetBrowser
