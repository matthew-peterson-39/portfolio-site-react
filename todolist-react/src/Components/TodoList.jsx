import React, {useEffect, useState} from 'react';
import './Todolist.css';

function TodoList( {initialTasks}) {
    const [inputTask, setInputTask] = useState('');
    const [taskList, setTaskList] = useState(initialTasks);
    
    useEffect(() => {
        setTaskList(initialTasks)
    }, [initialTasks])

    const handleInputChange = (event) => {
        setInputTask(event.target.value)
    }

    const handleAddTodo = (taskText) => {
        //checks for empty input and the length of list (using this to handle list overflowing for the moment)
        if (taskText.trim() !== '' && taskList.length < 6) {
          const newTask = {
            id: Math.random(),  // better practice here would be a unique id check on my task list but for this case it is overkill.
            task: taskText,
            completed: false,
          };
          setTaskList([...taskList, newTask]);  // update state
          setInputTask(''); //clear input field
        }
    };

    const handleCompleteTodo = (id) => {
        setTaskList((prevList) =>   
          prevList.map((task) =>
            task.id === id ? { ...task, completed: true } : task
          )
        );
    };

    const handleDeleteTodo = (id) => {
        const newList = taskList.filter((task) => 
            task.id !== id
       );
        setTaskList(newList); 
    };

    return (
        <>
        <div className='todo-project'>
            <h1 id='todo-header'>My To-Do List</h1>
            <div className="input-container">
                <input 
                    className="input" 
                    type="text" 
                    value={inputTask} 
                    onChange={handleInputChange} 
                    placeholder="Enter a task" />
                <button onClick={() => handleAddTodo(inputTask)}>ADD</button> 
            </div>
            <ul>
                {taskList.map((task) => (
                    <li className="task" 
                        key={task.id} 
                        // style={{backgroundColor: getBackgroundColor(task.completed)}}>
                        style={{backgroundColor: task.completed ? 'green' : '' }}>
                        {task.task}
                        {task.completed ? (
                            <button onClick={() => handleDeleteTodo(task.id)}>Delete</button>
                        ) : (
                            <button onClick={() => handleCompleteTodo(task.id)}>Complete</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
};

export default TodoList;

