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
  const [lockers, setLockers] = useState([])
  const [students, setStudents] = useState([])
  const [gradeLevelInput, setGradeLevelInput] = useState()
  const [addLocker, setAddLocker] = useState(false)
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    school_name: "",
    grade_level: ""
  })

  useEffect(() => {
    fetch('http://localhost:9292/')
    .then(resp => resp.json())
    .then(data => setTeachers(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/lockers')
    .then(resp => resp.json())
    .then(data => setLockers(data))
  }, [addLocker])

  useEffect(() => {
    fetch("http://localhost:9292/students")
    .then(resp => resp.json())
    .then(data => setStudents(data))
  }, [formData])

  const handleChange = (e) => {
      setGradeLevelInput(e.target.labels[0].textContent)
  }
  
  const handleSubmit = (e) => {
      e.preventDefault()
      setFormData({
        first_name: e.target[0].value,
        last_name: e.target[1].value,
        email: e.target[2].value,
        school_name: e.target[3].value,
        grade_level: gradeLevelInput
      })
      fetch("http://localhost:9292/students", {
          method: "POST",
          headers: {
              "Content-Type" : "application/json"
          },
          body: JSON.stringify({
              first_name: e.target[0].value,
              last_name: e.target[1].value,
              email: e.target[2].value,
              school_name: e.target[3].value,
              grade_level: gradeLevelInput
          })
      })
      .then(() => {
        e.target[0].value = ""
        e.target[1].value = ""
        e.target[2].value = ""
        e.target[3].value = ""
    })
  }

  function assignLocker(e) {
    const id = parseInt(e.target.id)
    const student_id = parseInt(e.target.parentElement.parentElement.parentElement.lastChild.id)
    fetch(`http://localhost:9292/lockers/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            student_id: student_id
        })
    })
    setAddLocker(!addLocker)
  }

  function handleUnassignLocker(e) {
    const clickedLockerId = e.target.id
    console.log(clickedLockerId)
    fetch(`http://localhost:9292/lockers/${clickedLockerId}`, {
      method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            student_id: null
        })
    })
    setAddLocker(!addLocker)
  }

  const handleDelete = (e) => {
    const clickedStudentId = parseInt(e.target.id)
    fetch(`http://localhost:9292/students/${clickedStudentId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const studentsWithoutDeleted = students.filter(student => student.id !== clickedStudentId)
    setStudents(studentsWithoutDeleted)
  }
  
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
          <Route exact path="/students">
            <StudentList 
              lockers = {lockers}
              students = {students}
              setStudents = {setStudents}
              setLockers = {setLockers}
              formData = {formData}
              setFormData = {setFormData}
              handleDelete = {handleDelete}
              handleSubmit = {handleSubmit}
              handleChange = {handleChange}
              assignLocker = {assignLocker}
              handleUnassignLocker = {handleUnassignLocker}
            />
          </Route>
          <Route exact path="/music-library" component={MusicLibrary} />
          <Route exact path="/instruments" component={InstrumentList} />
          <Route exact path="/lockers" component={LockerList} />
        </Switch>  
      </div>
    </BrowserRouter>
  )
}
export default App;
