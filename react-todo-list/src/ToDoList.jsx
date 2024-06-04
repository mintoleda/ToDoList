import React, { useState } from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            // Get the text from the text box
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){

        // Tasks other than index
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks);

    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            // Formula: [[index], [index - 1]] = [[index - 1], [index]];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];

            setTasks(updatedTasks);

        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            // Formula: [[index], [index - 1]] = [[index - 1], [index]];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];

            setTasks(updatedTasks);

        }
    }

    return (
    
    <div className="to-do-list">
    
    <h1>To-Do-List</h1>
        
        <div>
            <input 
            type="text"
            placeholder="Enter a task..."
            vaue= {newTask}
            onChange={handleInputChange}/>

            <button
                className="add-button"
                onClick={addTask}>
                Add
            </button>
        </div>

        <ol>
            {tasks.map((task, index) => 
            <li key={index}>
                <span className="text">{task}</span>
                <button
                className="delete-button"
                onClick={() => deleteTask(index)}>
                    Delete
                </button>

                <button
                className="move-button"
                onClick={() => moveTaskUp(index)}>
                    ⬆️
                </button>

                <button
                className="move-button"
                onClick={() => moveTaskDown(index)}>
                    ⬇️
                </button>
            </li>)}
        </ol>

    </div>);
}

export default ToDoList;