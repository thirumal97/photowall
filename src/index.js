import React, {Component} from 'react';
import ReactDOM from 'react-dom';



//const element3 = <ol>  {tasks.map((task, index) => <li key = {index}> {task} </li> )}  </ol>

class List extends Component {
  render() {
    return  <ol>  
              {this.props.tasks.map((task, index) => <li key = {index}> {task} </li> )}  
            </ol>
  }
}

class Title extends Component {
  render() {
    return <h1> {this.props.title} </h1>
  }
}

class Main extends Component {
  render() {
    return <div>
            <Title title = {"To DO's"}/>
            <List tasks = {[ 'Move the lawn', 'walk the dog' ]}/>
            <List tasks = {[ 'Ride the horse', 'walk the horse']}/>
           </div>
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'));