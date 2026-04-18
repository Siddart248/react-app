import React from 'react'
import TodoItem from './Todoitem'

function TodoList({todos, deleteTodo}){
    return (
        <ul className="todo-list-container">
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
            ))}
        </ul>
    );
}

export default TodoList