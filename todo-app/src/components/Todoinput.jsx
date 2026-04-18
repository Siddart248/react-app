import { useState } from "react";

function Todoinput({ addTodo }) {
    const [todo, setTodo] = useState("");

    const handleAdd = () => {
        if (todo.trim()) {
            addTodo(todo.trim());
        }
        setTodo("");
    };

    return (
        <div className="input-container">
            <input 
                type="text" 
                className="todo-input"
                placeholder="Enter your todo..." 
                value={todo} 
                onChange={e => setTodo(e.target.value)}
                onKeyDown={e => {
                    if (e.key === 'Enter') handleAdd();
                }} 
            />
            <button className="add-button" onClick={handleAdd}>Add Todo</button>
        </div>
    );
}

export default Todoinput;