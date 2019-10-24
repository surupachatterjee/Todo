import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor:'#f4f4f4',
            padding:'10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.todo.complete ? 'line-through':'none'
        }
    }

    

    render() {
        const { id, title } =  this.props.todo
        return (
            <div style = {this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
                {title}
                <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = { 
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    backgroundColor: '#ff0000', 
    color: '#fff',
    border: 'none',
    padding: '8px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float:'right'
}


export default TodoItem
