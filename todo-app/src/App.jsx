import { useState } from "react";
import Header from "./components/Header"
import Todoinput from "./components/Todoinput"  
import TodoList from "./components/Todolist"

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
        <>
            <Header />
            <Todoinput addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={handledeleteTodo} />
            <ul>
                {todos.map((t, index) => (
                    <li key={index}>{t}</li>
                ))}
            </ul>
        </>
    )
}

export default App