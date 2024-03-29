import React, { Component } from 'react';
import axios from 'axios';
import MeetupItem from './MeetupItem';

class Meetups extends Component{
  constructor(){
    super();
    this.state = {
      meetups: []
    }
  }

  componentWillMount(){
  let data =[];
  data.push(localStorage.getItem('rememberMe'))
    this.setState({meetups: data})
  
  }
  getMeetups(){
    console.log( localStorage.getItem('rememberMe'))
      axios.get('http://localhost:3000/api/meetups')
      .then(response => {
        this.setState({meetups: response.data}, () => {
          //console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  render(){
    const meetupItems = this.state.meetups.map((meetup, i) => {
      return(
        <MeetupItem key={meetup.name} item={meetup} />
      )
    })
    return (
      <div>
        <h1>Meetups</h1>
        <ul className="collection">
          {meetupItems}
        </ul>
      </div>
    )
  }
}

export default Meetups;