import React from 'react'
import './todo.css'

function TodoItem(props) {

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    console.log(props)
    return (
        <div className="todo-item">
            <input type="checkbox" 
                    checked={props.item.completed} 
                    onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle : null}>{props.item.title}</p>
        </div>
    )
}

export default TodoItem