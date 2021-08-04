import Sidebar from './Sidebar';
import Home from './Home';
import TeacherList from './TeacherList'
import StudentList from './StudentList';
import { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import InstrumentList from './InstrumentList';
import MusicLibrary from './MusicLibrary';
import LockerList from './LockerList';

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
          <Route exact path="/" component={Home} />
          <Route exact path="/teachers">
            <TeacherList
              teachers = {teachers}
            />
          </Route>
          <Route exact path="/students" component={StudentList} />
          <Route exact path="/music-library" component={MusicLibrary} />
          <Route exact path="/instruments" component={InstrumentList} />
          <Route exact path="/lockers" component={LockerList} />
        </Switch>  
      </div>
    </BrowserRouter>
  )
}
export default App;
