import Sidebar from './Sidebar';
import Main from './Main';
import TeacherList from './TeacherList'
import { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/')
    .then(resp => resp.json())
    .then(data => setTeachers(data))
  }, [])
  
  return (
    <BrowserRouter>
      <div className='app'>
      <Sidebar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/teachers">
            <TeacherList
              teachers = {teachers}
            />
          </Route>
        </Switch>  
      </div>
    </BrowserRouter>
  )
}
export default App;
