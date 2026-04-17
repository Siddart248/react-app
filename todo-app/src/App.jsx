import { useState } from "react";
import Header from "./components/Header"
import Todoinput from "./components/Todoinput"  

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo) return;
        setTodos([...todos, todo]);
    };

    return (
        <>
            <Header />
            <Todoinput addTodo={addTodo} />
            <ul>
                {todos.map((t, index) => (
                    <li key={index}>{t}</li>
                ))}
            </ul>
        </>
    )
}

export default App