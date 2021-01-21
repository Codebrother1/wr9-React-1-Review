import React, { Component } from 'react'
// import Person from "./Person"


class People extends Component{
  constructor(){
    super()
    this.state = {
      people: [
        {name: "Ben", age: 28},
        {name: "Cole", age: 27}
      ]
    }
  }

deletePerson = (index) => {
const people = [...this.state.people]
people.splice(index, 1)
this.setState({
  people
})
}


  render(){
    return(
      <div> <h1>Hello World</h1> 
      {this.state.people.map((element, index) => {
        return  (
          <div key={index} className="person-card">
            <h2>Name: {element.name}</h2>
            <h2>Age: {element.age}</h2>
            <button onClick={() => {this.deletePerson()}}>Delete Person</button>
          </div>
        )
      })}
      {/* <Person/> */}
      </div>
    )
  }
}




export default People;