import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const tasks = ['shovel the ice', 'clear the ice', 'get the car out.']

//const element3 = <ol>  {tasks.map((task, index) => <li key = {index}> {task} </li> )}  </ol>

class List extends Component {
  render() {
    return  <ol>  
              {tasks.map((task, index) => <li key = {index}> {task} </li> )}  
            </ol>
  }
}

class Title extends Component {
  render() {
    return <h1> TITLE HERE GOES </h1>
  }
}

class Main extends Component {
  render() {
    return <div>
            <Title/>
            <List/>
            <List/>
           </div>
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'));