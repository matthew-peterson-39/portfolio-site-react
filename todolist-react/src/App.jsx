import React, { useState } from 'react'
import './App.css'
import TodoList from './Components/TodoList'
import TimerApp from './Components/TimerApp'
import initialTasks from './tasks.json'
import ContactFormModal from './Components/ContactFormModal';
import './Modal.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <header>
        <nav>
            <h1 id='name-logo'>Matthew Peterson</h1>
            <ul>
                <button className='nav-btn' href="#about">About</button>
                <button className='nav-btn' href="#project-container">Projects</button>
                <button className='nav-btn' id='contrast'  href="#contact" onClick={() => setIsModalOpen(!isModalOpen)}>Contact</button>
            </ul>
        </nav>
      </header>
      
      <div id='app-container'>
        <div id="about">
            <h2>About Me</h2>
            <p>Your introduction and a brief description of yourself as a software developer.</p>
        </div>

        <div className='project-container'>
          <div className='project-card' id='todo-list-card'>
            <TodoList initialTasks={initialTasks}/>
          </div> 
          <div className='project-card' id='timer-card'>
            <TimerApp/>
          </div>
        </div>
      </div>

      <footer>
          <div class="container">
              <div class="social-links">
                  <a href="https://github.com/matthew-peterson-39">
                    <img src="./icons/github.svg" alt="GitHub"></img>
                  </a>
                  <a href="https://www.linkedin.com/in/matthew-peterson-5498a7248/">
                    <img src="./icons/linkedin.svg" alt="LinkedIn"></img>
                  </a>
              </div>
          </div>
      </footer>
      <ContactFormModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(!isModalOpen)}/>
    </>
  )
}

export default App