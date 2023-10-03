import { useState } from 'react'
import {Route,Routes} from "react-router-dom";

import { SideBar } from './components/sideBar/SideBar'
import { Dashboard } from './pages/dashboard/Dashboard';
import { Exercise } from './pages/exercises/Exercise';
import { Food } from './pages/food/Food';
import { Goals } from './pages/goals/Goals';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <SideBar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/excercises' element={<Exercise />} />
        <Route path='/food' element={<Food />} />
        <Route path='/goals' element={<Goals />} />
      </Routes>
    </div>
  )
}

export default App
