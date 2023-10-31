import './App.css'
import TodoList from './Components/TodoList'
import TimerApp from './Components/TimerApp'
import initialTasks from './tasks.json'

function App() {
  return (
    <>
    <header>
        <nav>      
            <h1>Matthew Peterson</h1>
            <ul>
                <button className='nav-btn'><a href="#about">About</a></button>
                <button className='nav-btn'><a href="#project-container">Projects</a></button>
                <button className='nav-btn' id='contrast'><a href="#contact">Contact</a></button>
            </ul>
        </nav>
    </header>

    <div id="wrapper">
        <section id="about" class="section">
            <div class="container">
                <h2>About Me</h2>
                <p>Your introduction and a brief description of yourself as a software developer.</p>
                <div className='project-card'>
                    <TimerApp/>
                </div>

            </div>

            
        </section>
        <div id='project-container'>
            <div className='project-card'>
                <TodoList initialTasks={initialTasks}/>
            </div>
            
        </div>
        <section id="contact" class="section">
            <div class="container">
                <h2>Contact Me</h2>
                <form id="contact-form">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required></input>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required></input>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    </div>
    <footer>
        <div class="container">
            <div class="social-links">
                <a href="https://github.com/matthew-peterson-39" target="_blank"><img src="github-icon.png" alt="GitHub"></img></a>
                <a href="https://www.linkedin.com/in/matthew-peterson-5498a7248/" target="_blank"><img src="linkedin-icon.png" alt="LinkedIn"></img></a>
                
            </div>
        </div>
    </footer>

   
    </>
  )
}

export default App
