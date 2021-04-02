import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['shovel the ice', 'clear the ice', 'get the car out.']

const element = React.createElement('h1', null, 'Hello, World! This is Thiru');

const element1 = React.createElement('ol', null, 
  tasks.map((task, index) => React.createElement('li', {key: index}, task))
);

ReactDOM.render(element, document.getElementById('root')); 
ReactDOM.render(element1, document.getElementById('root'));