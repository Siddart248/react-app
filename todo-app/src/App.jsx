import { useState } from "react";
import "./App.css";
import Header from "./components/Header"
import Todoinput from "./components/Todoinput"  

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo) return;
        setTodos([...todos, todo]);
    };
    
    const handledeleteTodo = (index) => {
        const newTodos = todos.filter((_,i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="app-container">
            <Header />
            <Todoinput addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={handledeleteTodo} />
        </div>
    )
}

export default App