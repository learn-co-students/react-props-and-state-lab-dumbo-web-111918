import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (data) => {
    this.setState({
      filters: {...this.state.filters, type: data}
    })
  }

  onFindPetsClick = () => {
    let parm;
    this.state.filters.type === 'all' ? parm = "" : parm = `?type=${this.state.filters.type}`
    fetch('/api/pets' + parm)
      .then(res => res.json())
      .then(e => { 
        this.setState({
          pets: [...e]
        })
      })
  }

  onAdoptPet = (data) => {
    let petArr = [...this.state.pets]
    let pet = petArr.find(e => e.id === data)
    pet.isAdopted = !pet.isAdopted
    this.setState({
      pets: petArr
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
