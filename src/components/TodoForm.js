import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import {v4 as uuid} from "uuid";


function TodoForm({ addTodo }) {

    // State to keep track of user input

    const [todo, setTodo] = useState({
        id:"",
        task:"",
        completed: false
    })
// Function to handle user input for todo to track in state - responsible for updating task property on todo object

function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
}
// User submits form, form's todo added from state to list of todos - also takes in event from DOM

function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
        addTodo({ ...todo, id: uuid() });
        // Reset task input
        setTodo({ ...todo, task: ""});

    }
}
    

    return (
        <form className="todo-form" onSubmit={handleSubmit}> 
            <TextField
            label="Task" 
            name="task"
            type="text"
            value={todo.task}
            onChange={handleTaskInputChange}
            />
            <Button type="submit">Submit</Button>
        </form>
    );

}

export default TodoForm;