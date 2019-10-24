import React from 'react';
import Todos  from './components/Todos'
import { AddTodo }  from './components/AddTodo'
import About from './components/pages/About'
import Header from './components/layout/Header'
import uuid from 'uuid';
import {BrowserRouter  as Router, Route} from 'react-router-dom'

import './App.css';

class App extends React.Component {
  state ={
    todos :[
      {
        id:uuid.v4(),
        title: 'Take out the trash', 
        complete: false
      },
      {
        id: uuid.v4(),
        title: 'Clean the refrigerator', 
        complete: false
      },
      {
        id: uuid.v4(),
        title: 'Change the curtains', 
        complete: false
      }
    ]
  }

  // toggle complete
  markComplete = (id) => { 
    console.log("Hello from app.js " + id)
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.complete = !todo.complete
        }
        return todo
      })
    })
}

delTodo = (id) => { 
  console.log('todo to delete:' + id)
  this.setState({
    todos: [...this.state.todos.filter(todo => todo.id !== id)]
  });
}


addTodo = (title) => {
  console.log(title)
  const newTodo = {
    id: uuid.v4(),
    title,
    complete: false
  }
  this.setState({todos: [...this.state.todos,newTodo]})
}

  render() {
  return (
    <Router>
    <div className="App">
      <div className="container">
      <Header />
      <Route exact path="/" render={props => (
        <React.Fragment>
          <AddTodo addTodo={this.addTodo}/>
          <Todos  todos={this.state.todos} 
                  delTodo={this.delTodo}
                  markComplete={this.markComplete}/>
        </React.Fragment>
      )} />
      <Route path="/about" component={About} />
      
    </div>
    </div>
    </Router>
  );
}



}



export default App;
