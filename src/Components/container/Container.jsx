import React, { Component } from 'react'
import Guest from '../Guests/Guest';
import Name from '../Name';
export default class NameContainer extends Component {
  state = {
    names: [
      'John',
      'Alice',
      'Shadia',
      'Suzan',
      'Solomon', 
    ],
    guests: [
      {
        name: "John",
        salutation : "Hello John! You are most welcome"
      },
      {
        name: "Alice",
        salutation : "Hello Alice! Tuna kupenada sana"
      },
      {
        name: "Shadia",
        salutation : "Hello Shadia! Where are you from ?"
      },
      {
        name: "Suzan",
        salutation : "Hello Suzan! Where are you now ?"
      },
      {
        name: "Solomon",
        salutation : "Hello Solomon! how are you  ?"
      }
    ]
  }
  render() {
    return (
    
      <div> 
          { this.state.names.map((name)=>{
              return <Name key={name} name={name} />
          })}

          { this.state.guests.map((guest)=>{
              return <Guest key={guest.salutation} guest={guest} />
          })}
      </div>
    )
  }
}
