import React, {Component} from 'react'
import Title from './Title'
import List from './List'

class Main extends Component {
    render() {
      return <div>
              <Title title = {"To DO's"}/>
              <List tasks = {[ 'Move the lawn', 'walk the dog' ]}/>
              <List tasks = {[ 'Ride the horse', 'walk the horse']}/>
             </div>
    }
  }

  export default Main