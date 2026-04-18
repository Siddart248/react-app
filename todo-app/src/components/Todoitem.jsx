import React from 'react'

function TodoItem({todo, index, deleteTodo}){
    return(
        <li className="todo-item" style={{ animationDelay: `${index * 0.05}s` }}>
            <p className="todo-text">{todo}</p>
            <button className="delete-button" onClick={() => deleteTodo(index)}>Delete</button>
        </li>   
    )
}   

export default TodoItem