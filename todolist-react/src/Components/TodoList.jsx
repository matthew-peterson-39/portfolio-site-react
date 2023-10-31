import React, {useEffect, useState} from 'react';
import './Todolist.css';

    function TodoList( {initialTasks}) {
    // We can think have state for both the input and the list
    const [inputTask, setInputTask] = useState('');
    const [taskList, setTaskList] = useState(initialTasks);
    
    const handleInputChange = (event) => {
        setInputTask(event.target.value)
    }

    const handleAddTodo = (taskText) => {
        if (taskText.trim() !== '' && taskList.length < 6) {
          const newTask = {
            id: Math.random(),
            task: taskText,
            completed: false,
          };
          setTaskList([...taskList, newTask]);
          setInputTask('');
        }
    };

    const handleCompleteTodo = (id) => {
        setTaskList((prevList) =>
          prevList.map((task) =>
          //create new list with tasks
          //change clicked tasked completed->true
            task.id === id ? { ...task, completed: true } : task
          )
        );
      };

    const getBackgroundColor = (completed) => {
        return completed ? 'green' : 'white';
    }

    const handleDeleteTodo = (id) => {
        const newList = taskList.filter((task) => 
            task.id !== id
       );
        setTaskList(newList); 
    };

    useEffect(() => {
        setTaskList(initialTasks)
    }, [initialTasks])

    return (
        <>
        <div className="project" id='todo'>
            <h1 className='heading'>My To-Do List</h1>
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
                        style={{backgroundColor: getBackgroundColor(task.completed)}}>
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

