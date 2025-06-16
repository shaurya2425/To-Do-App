import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
function TodoForm() {

    const [todo,setTodo] = useState("")
    const [dueDate, setDueDate] = useState("");

    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault();

        if(!todo) return
        addTodo({
            todo:todo,
            completed:false,
            dueDate:dueDate || null
        })
        setTodo("")
        setDueDate("")
    }
    
    return (
        <form onSubmit={add}  className="flex " >
            <input
                type="text"
                placeholder="Enter your Task "
                className="w-full border border-black/10 rounded-l-lg px-3 py-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value) }
            />

            <input 
                type="date" 
                className="border border-black/10  px-3 py-1.5 bg-white/20 text-sm text-gray-700 outline-none placeholder:text-gray-400"
                value={dueDate}
                onChange={(e)=>setDueDate(e.target.value)}    
            />

            <button type="submit" className="rounded-r-lg px-8 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;