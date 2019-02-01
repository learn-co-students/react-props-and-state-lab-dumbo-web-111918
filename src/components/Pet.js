import React from 'react'

class Pet extends React.Component {

  clickHandler = ()=>{
    this.props.onAdoptPet(this.props.petData)
    //call another function
    //pass up thing to app that arent events 
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
             Pet Name: {this.props.petData.name} {''}
             {this.props.petData.gender === 'female' ? '♀' : '♂'}
          </a>
          <div className="meta">
            <span className="date"> {this.props.petData.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petData.age}</p>
            <p>Weight: {this.props.petData.weight}</p>
            <p>Gender: {this.props.petData.gender}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.petData.isAdopted ? 
          <button className="ui disabled button">Already adopted</button> 
            : 
          <button className="ui primary button" onClick={this.clickHandler}>Adopt pet</button>}
          
         
        </div>
      </div>
    )
  }
}

export default Pet


// id: '86520b4b-7849-4462-b511-cddc7f416ad6',
//    isAdopted: false,