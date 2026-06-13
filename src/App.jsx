import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import NewTask from './Pages/NewTask'
import MyTasks from './Pages/MyTask'
import TaskForm from './Components/TaskForm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/newtask' element={<NewTask />} />
        <Route path='/taskform' element={<TaskForm />} />
        <Route path='/mytask' element={<MyTasks />} />
      </Routes>
    </Router>
  )
}

export default App
