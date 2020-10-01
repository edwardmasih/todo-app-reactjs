import React from 'react'
import './todo.css'

function TodoItem(props) {
    console.log(props)
    return (
        <div className="todo-item">
            <input type="checkbox" 
                    checked={props.item.completed} 
                    onChange={() => props.handleChange(props.item.id)}
            />
            <p>{props.item.title}</p>
        </div>
    )
}

export default TodoItem