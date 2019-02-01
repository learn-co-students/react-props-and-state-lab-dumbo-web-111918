import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import { getAll, getByType, getBetweenAge } from '../data/pets.js';

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

  componentDidMount(){
    this.setState({
      pets: getAll()
    })
  }

  onChangeType = (event) =>{
    this.setState ({
      filters: {...this.state.filters, type:event.target.value }
    })
  }


  onFindPetsClick = () => {
   
    if (this.state.filters.type === 'all'){
        return this.state.pets
    }
    else{
      return getByType(this.state.filters.type);
    }
  }

  onAdoptPet = (petObj) =>{
    let copyOfPetObj = {...petObj}
    copyOfPetObj.isAdopted = true
    
    const newArray = this.state.pets.map(pet =>{
      if(pet.id === copyOfPetObj.id){
        return copyOfPetObj
      } else{
        return pet
      }
    })

    this.setState ({
      pets: newArray
    })
    //purpose of this handler is to change state
    //find the pet pet inside my array of pets

  }

  render() {
    console.log(this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters type={this.state.filters.type} onChangeHandler={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.onFindPetsClick()} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
