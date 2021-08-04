import { useEffect, useState } from 'react'
import StudentCard from './StudentCard'
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const StudentList = () => {
    const [students, setStudents] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:9292/students")
        .then(resp => resp.json())
        .then(data => setStudents(data))
    }, [])
    
    return (
        <main>
            <h1>All Students</h1>
            <Container fluid>
                <Row xs={2} md={3} lg={4}>
                    {students.map(student => { return (
                    <StudentCard 
                        key = {student.id}
                        first_name = {student.first_name}
                        last_name = {student.last_name}
                        grade_level = {student.grade_level}
                        email = {student.email}
                        picture_url = {student.picture_url}
                        school_name = {student.school.school_name}
                    />
                    )})}
                </Row>
            </Container>
        </main>
    )
}

export default StudentList
