import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'


class Todos extends Component {

    render() {
        return (
            this.props.todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} 
                delTodo={this.props.delTodo}
                markComplete={this.props.markComplete}/>
            ))
        )
    }

   
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
}


export default Todos;